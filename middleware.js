const listing = require("./models/listing.js")
const expressError = require("./Utils/expressError.js")
const {listingSchema, reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl
        req.flash("error", "You must be signed in.")
        return res.redirect("/login")
    }
    next()
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl)
        res.locals.redirectUrl = req.session.redirectUrl
    next()
}

module.exports.isOwner = async (req, res, next) => {
    let {id} = req.params
    let list = await listing.findById(id)
    if(!list.owner.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not the owner of this listing.")
        return res.redirect(`/listings/${id}`)
    }
    next()
}

module.exports.validateListing = (req, res, next) => {
    // Normalize category: single checkbox comes as a string, multiple as an array
    if (req.body.category && !Array.isArray(req.body.category)) {
        req.body.category = [req.body.category];
    } else if (!req.body.category) {
        req.body.category = [];
    }

    console.log(req.body)
    let { error } = listingSchema.validate(req.body)
    console.log(error)
    if(error) {
        throw new expressError(400, error.details[0].message)
    } else {
        next()
    }
}

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body)
    console.log(error)
    if(error) {
        throw new expressError(400, error.details[0].message)
    } else {
        next()
    }
}

module.exports.isReviewAuthor = async (req, res, next) => {
    let {reviewId, id} = req.params
    let review = await Review.findById(reviewId)
    if(!review.author.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not the author of this review.")
        return res.redirect(`/listings/${id}`)
    }
    next()
}