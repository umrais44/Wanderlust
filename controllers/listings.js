const listing = require("../models/listing.js")
const geocodeAddress = require("../utils/geocode.js")
const categories = require("../utils/categories.js");

module.exports.index = async (req, res) => {
    let allListings = await listing.find({})
    return res.render("listings/index.ejs", {allListings, activeCategory: null, categories})
}


module.exports.new = (req, res) => {
    res.render("listings/new.ejs", {categories})
}

module.exports.show = async (req, res) => {
    let {id} = req.params
    let list = await listing.findById(id).populate({path : "reviews", populate : {path :"author"}}).populate("owner")
    if(!list) {
        req.flash("error", "Listing not found.")
        return res.redirect("/listings")
    }
    return res.render("listings/show.ejs", {list})
}

module.exports.create = async (req, res) => {
    let {title, description, price, location, country, category} = req.body
    let {path, filename} = req.file

    // Normalize: single checkbox = string, multiple = array
    if (category && !Array.isArray(category)) {
        category = [category]
    }
    category = category || []

    let geometry
    try {
        geometry = await geocodeAddress(location, country)
    } catch (err) {
        req.flash("error", "Could not find that location. Please try a more specific address.")
        return res.redirect("/listings/new")
    }

    await listing.create({
        title : title,
        description : description,
        image : {
            url :path,
            filename :filename
        },
        price : price, 
        location : location,
        country : country,
        category : category,
        geometry : geometry,
        owner : req.user._id
    })
    req.flash("success", "New listing Created.")
    return res.redirect("/listings")
}

module.exports.edit = async (req, res) => {
    let {id} = req.params
    let list = await listing.findById(id)
    if(!list) {
        req.flash("error", "Listing not found.")
        return res.redirect("/listings")
    }

    let originalImageUrl = list.image && list.image.url
        ? list.image.url.replace("/upload/", "/upload/w_300,c_fill/")
        : ""

    return res.render("listings/edit.ejs", {list, originalImageUrl, categories})
}

module.exports.update = async (req, res) => {
    let { id } = req.params
    let {title, description, price, location, country, category} = req.body

    // Normalize: single checkbox = string, multiple = array
    if (category && !Array.isArray(category)) {
        category = [category]
    }

    let list = await listing.findById(id)
    if(!list) {
        req.flash("error", "Listing not found.")
        return res.redirect("/listings")
    }

    if (location !== list.location || country !== list.country) {
        try {
            list.geometry = await geocodeAddress(location, country)
        } catch (err) {
            req.flash("error", "Could not find that location. Please try a more specific address.")
            return res.redirect(`/listings/${id}/edit`)
        }
    }

    list.title = title
    list.description = description
    list.price = price
    list.location = location
    list.country = country
    list.category = category || []

    if(req.file) {
        let {path, filename} = req.file
        list.image = {
            url : path,
            filename : filename
        }
    }

    await list.save()
    req.flash("success", "Listing Updated.")
    return res.redirect(`/listings/${id}`)
}

module.exports.destroy = async (req, res) => {
    let {id} = req.params
    let deletedList = await listing.findByIdAndDelete(id)
    console.log(deletedList)
    req.flash("success", "Listing Deleted.")
    return res.redirect("/listings")
}

module.exports.filterByCategory = async (req, res) => {
  const { category } = req.params;
  const allListings = await listing.find({ category: category });
  res.render("listings/index.ejs", { allListings, activeCategory: category, categories });
};

module.exports.search = async (req, res) => {
  const { q } = req.query;

  if (!q || q.trim() === "") {
    req.flash("error", "Please enter something to search for.");
    return res.redirect("/listings");
  }

  const regex = new RegExp(q.trim(), "i"); // case-insensitive partial match

  const allListings = await listing.find({
    $or: [
      { title: regex },
      { location: regex },
      { country: regex }
    ]
  });

  res.render("listings/index.ejs", {
    allListings,
    activeCategory: null,
    searchQuery: q
  });
};