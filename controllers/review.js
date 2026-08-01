const Review = require("../models/review.js");
const listing = require("../models/listing.js")

module.exports.createReview = async (req, res) => {
    let {id} = req.params
    let list = await listing.findById(id)
    let newReview = new Review(req.body.review)
    list.reviews.push(newReview)
    newReview.author = req.user._id
    await newReview.save()
    await list.save()
    req.flash("success", "New Review Added.")
    return res.redirect(`/listings/${id}`)
}

module.exports.destroyReview = async (req, res) => {
    let {id, reviewId} = req.params
    await listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}})
    await Review.findByIdAndDelete(reviewId)
    req.flash("success", "Review Deleted.")
    return res.redirect(`/listings/${id}`)
}