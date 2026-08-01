const express = require("express")
const router = express.Router({mergeParams : true})
const wrapAsync = require("../utils/wrapAsync")
const expressError = require("../utils/expressError.js")
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const listing = require("../models/listing.js")
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js")

// Reviews
router.post("/", isLoggedIn, validateReview, wrapAsync( reviewController.createReview ))

// Delete Review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync( reviewController.destroyReview ))


module.exports = router