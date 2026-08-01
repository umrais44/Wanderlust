if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require("express")
const app = express()
const mongoose = require('mongoose');
const listing = require("./Models/listing")
const path = require('path');
const ejsMate = require("ejs-mate")
const methodOverride = require('method-override')
const wrapAsync = require("./Utils/wrapAsync")
const expressError = require("./Utils/expressError.js")
const {listingSchema, reviewSchema} = require("./schema.js");
const Review = require("./Models/review.js");
const session = require("express-session")
const { MongoStore } = require('connect-mongo');
const flash = require("connect-flash")
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require("./Models/user.js")

const listingRouter = require("./routes/listing")
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user")

const { required } = require("joi");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended : true}))
app.engine("ejs", ejsMate)
app.use(express.static(path.join(__dirname, "public")))
app.use(methodOverride('_method'))

const dbUrl = process.env.ATLASDB_URL

const store = MongoStore.create({
    mongoUrl : dbUrl,
    touchAfter : 24 * 60 * 60,
    crypto : {
        secret : press.env.SECRET
    }
})

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + (1000 * 60 * 60 * 24 * 7),
        maxAge : 1000 * 60 * 60 * 24 * 7,
        httpOnly : true
    }
}

store.on("error", (err) => {
    console.log("Error in MongoStore", err)
})

app.use(session(sessionOptions))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

main()
 .then(() => {
    console.log(`Connected to DB.`)
 })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}


app.use((req, res, next) => {
    res.locals.success = req.flash("success")
    res.locals.error = req.flash("error")
    res.locals.currentUser = req.user
    next()
})

// Debug middleware: wrap response methods to detect multiple sends
// app.use((req, res, next) => {
//     const methods = ["send", "json", "redirect", "render", "end"]
//     // guard flag to avoid re-entrancy — only set when response actually ends
//     res._hasSent = false
//     methods.forEach((m) => {
//         if (typeof res[m] !== 'function') return
//         const original = res[m].bind(res)
//         if (m === 'end') {
//             res[m] = function (...args) {
//                 if (res._hasSent) {
//                     console.error(`Double response attempt detected: ${m} on ${req.method} ${req.originalUrl}`)
//                     console.error(new Error().stack)
//                     return
//                 }
//                 res._hasSent = true
//                 return original(...args)
//             }
//         } else {
//             res[m] = function (...args) {
//                 // call original first; internal implementations may call `end`
//                 const result = original(...args)
//                 // if headers were sent by the original call, mark as sent
//                 if (res.headersSent) {
//                     res._hasSent = true
//                 }
//                 return result
//             }
//         }
//     })
//     next()
// })

app.use("/listings", listingRouter)
app.use("/listings/:id/reviews", reviewRouter)
app.use("/", userRouter)


app.all("/*rest", (req, res, next) => {
    next(new expressError(404, "Page not Found."))
})

app.use((err, req, res, next) => {
    if(res.headersSent) {
        return next(err)
    }
    let { statuscode = 500, message = "Something went wrong." } = err
    res.status(statuscode).render("error.ejs", {err})
})

const port = 8080
app.listen(port, () => {
    console.log(`Listening to port ${port}.`)
})