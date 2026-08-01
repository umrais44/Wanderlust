const express = require("express")
const router = express.Router({mergeParams : true})
const listing = require("../models/listing.js")
const wrapAsync = require("../utils/wrapAsync")
const {listingSchema, reviewSchema} = require("../schema.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings")

const { storage } = require('../cloudConfig.js');
const multer  = require('multer')
const upload = multer({ storage })


router.route("/")
 .get(wrapAsync(listingController.index))
 .post(isLoggedIn, upload.single('image'), validateListing, wrapAsync( listingController.create ))

// New Route
router.get("/new", isLoggedIn, wrapAsync( listingController.new ))

router.get("/category/:category", wrapAsync(listingController.filterByCategory))

router.get("/search", wrapAsync(listingController.search));

router.route("/:id")
 .get(wrapAsync( listingController.show ))
 .put(isLoggedIn, isOwner, upload.single('image'), validateListing, wrapAsync( listingController.update ))
 .delete(isOwner, isLoggedIn, wrapAsync( listingController.destroy ))

// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync( listingController.edit ))

module.exports = router