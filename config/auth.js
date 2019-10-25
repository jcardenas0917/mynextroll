module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash("errorMsg", "Please login.");
        res.redirect("/login");
    }
};