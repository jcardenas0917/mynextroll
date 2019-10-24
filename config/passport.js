const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

// Load User
const db = require("../models");
passport.use(
    new LocalStrategy({
        username: "username",
        password: "password",
        passReqToCallback: true
    }, (username, password, done) => {
        // Match User
        db.profile.findOne({
            where: {
                username: username
            }
        })
            .then(user => {
                // Match User
                if (!user) {
                    return done(null, false, { message: "That username does not exist." });
                }

                // Match Password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false, { message: "Password is incorrect." });
                    }
                });
            })
            .catch(err => console.log(err));
    })
);
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    db.profile.findByPk(id).then(function (user) {
        if (user) {
            done(null, user.get());
        }
        else {
            done(user.errors, null);
        }
    });
});
module.exports = passport;