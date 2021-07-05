function checkAuth(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
};


function checkNotAuth(req, res, next) {
    if(req.isAuthenticated()) {
        res.redirect('/');
    }
    
    next();
};

module.exports = { checkAuth, checkNotAuth };