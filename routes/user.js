const express = require("express")
const wrapAsync = require("../utils/wrapAsync")
const router = express.Router()
const User = require("../models/user.js")
const passport = require("passport")
const {saveRedirectUrl} = require("../middleware.js")
const { signUp } = require("../controllers/user.js")
const userController = require("../controllers/user.js")

router.route("/signup")
 .get((req, res) => {
    res.render("users/signup.ejs")})
 .post(wrapAsync ( userController.signUp ))

router.route("/login")
 .get(userController.renderLoginPage)
 .post(
    saveRedirectUrl, 
    passport.authenticate("local", 
        {failureFlash : true, failureRedirect : "/login"}),
    userController.login)

router.get("/logout", userController.logout);

module.exports = router