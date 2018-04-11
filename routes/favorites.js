var express = require('express');
var router = express.Router();

//get favorites page
router.get('/', function(req, res, next){
    res.render('favorites', {favorites:req.session.favorites});
})

//post to get a favorite page
router.post('/add', function(req, res, next){

    //if no cookie, create it
    if(!req.session.favorites){
        req.session.favorites = [];
    }

    //check if date is already in favorite and assign to variable
    var favorite_on_date = req.session.favorites.filter(function(fav){
        return fav.date == req.body.date
    });

    //if no favorite exists in variable above, then add it to favorites array/cookie
    if (favorite_on_date.length === 0){
        req.session.favorites.push(req.body);
    }

    res.redirect('/favorites')

});

module.exports = router;