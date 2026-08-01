const express = require("express")
const router = express.Router({mergeParams : true})
const wrapAsync = require("../Utils/wrapAsync")
const expressError = require("../Utils/expressError.js")
const { reviewSchema } = require("../schema.js");
const Review = require("../Models/review.js");
const listing = require("../Models/listing")
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js")

// Reviews
router.post("/", isLoggedIn, validateReview, wrapAsync( reviewController.createReview ))

// Delete Review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync( reviewController.destroyReview ))


module.exports = router