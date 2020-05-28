const express = require("express");
const router = express.Router();
const SpotifyStrategy = require("passport-spotify").Strategy;
const passport = require("passport");
const spotifyUser = require("../../models/user");
require("dotenv").config();

var spotifyID;
console.log("env:", process.env.CLIENT_ID);

// const clientID = process.env.CLIENT_ID;
// const clientSecret = process.env.CLIENT_SECRET;
// const callbackUrl = process.env.SPOTIFY_DEVELOPMENT_REDIRECT_URI;

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.SPOTIFY_DEVELOPMENT_REDIRECT_URI,
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      spotifyID = profile.id;
      displayName = profile.displayName;
      email = profile._json.email;
      profileURL = profile.profileUrl;
      accessToken = accessToken;
      refreshToken = refreshToken;
      country = profile.country;
      accountType = profile.product;

      console.log(spotifyID);

      process.nextTick(function () {
        spotifyUser
          .findOne({
            spotifyID: spotifyID,
          })
          .then((currentUser) => {
            if (!currentUser) {
              const User = new SpotifyUser({
                spotifyID: spotifyID,
                displayName: displayName,
                email: email,
                profileURL: profileURL,
                accessToken: accessToken,
                refreshToken: refreshToken,
                country: country,
                accountType: accountType,
              });
              User.save(function (err) {
                if (err) console.log(err);
                return done(err, user);
              });
            } else {
              console.log(currentUser);
            }
          });
      });
      //route is comming with /spotify
    }
  )
);

router.get("/spotify/login", function(req,res,next){

    console.log("GET TO THE LOGIN ROUTE")
})
router.get(
  "/spotify/login",
  passport.authenticate("spotify", {
    scope: ["user-read-email", "user-read-private"],
    showDialog: true,
    useUnifiedTopology: true,
  }),
  function (req, res) {
    console.log(res.accessToken);
    console.log(res.refreshToken);
  }
);

router.get(
  "/callback",
  passport.authenticate("spotify", {
    failureRedirect: "/login",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/success");
  }
);

router.get("/success", passport.authenticate("spotify"), (req, res) => {
  res.send("success");
});


module.exports = router;
