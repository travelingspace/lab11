var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*fetch for picture*/
router.get('/fetchpicture', function(req, res, next){

  if (req.query.picturetype === 'random'){
    res.send('todo: get random picture');
  }
  else{
    res.send('todo: get today\'s picture');
  }

});



//***********************************
module.exports = router;
