const User = require("../Models/user")

module.exports.signUp = async (req, res, next) => {
    try {
        let {username, password, email} = req.body
        let newUser = new User({username, email})
        let registeredUser = await User.register(newUser, password)
        console.log(registeredUser)
        await req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Successfully Signed Up!")
            return res.redirect("/listings")
        })
    } catch (e) {
        req.flash("error", e.message)
        return res.redirect("/signup")
    }
}

module.exports.renderLoginPage = (req, res) => {
    return res.render("users/login.ejs")
}

module.exports.login = (req, res) => {
    req.flash("success", "Successfully Logged In!")
    let url = res.locals.redirectUrl || "/listings"
    return res.redirect(url)
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Successfully Logged Out!");
        return res.redirect("/listings");
    });
}