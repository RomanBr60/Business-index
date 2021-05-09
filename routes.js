var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/', (req, res, next) => {
  var userAgent = req.headers['user-agent'];     // user-agent header from an HTTP request
  res.render('./Components/HomePage', { ua: userAgent } );
});

router.get('/Q', function(req, res, next) {
  var userAgent = req.headers['user-agent'];     // user-agent header from an HTTP request

  
  let href2 = "https://spreadsheets.google.com/feeds/list/18GAUw1YmWC2pcCug6jqU_atcIn51fQSrDLNmcuqdoP8/oye0vyq/public/values?alt=json"
  //types
  
  let href1 = "https://spreadsheets.google.com/feeds/list/18GAUw1YmWC2pcCug6jqU_atcIn51fQSrDLNmcuqdoP8/od6/public/values?alt=json"
  //Business
  
  arr = [href1, href2]
  Promise.all(
    arr.map((url) =>
      fetch(url).then((response) => {
        //This reponse has over 100 elements always
        return response.json();
      })
      .catch(err => err.json())
    ))
    .then((value) => {
      let val = { };
      val.businesses = filterKeysOfArrayOfObjects ('gsx$', value[0].feed.entry);
      val.types = filterKeysOfArrayOfObjects ('gsx$', value[1].feed.entry);
      val.ua = userAgent;
      return res.render('./Components/HP1', val);
    })
    .catch(err => res.status(404).json(err))
  
});


router.get('/:id', function(req, res) {
  var userAgent = req.headers['user-agent'];

  let id = req.params.id;
  let href = "https://spreadsheets.google.com/feeds/list/18GAUw1YmWC2pcCug6jqU_atcIn51fQSrDLNmcuqdoP8/od6/public/values?alt=json"
  fetch(href)
      .then(response => response.json())
        .then(data => {
        let arr = data.feed.entry[id];
        res.render('./Components/Itemdata', { data: arr, ua: userAgent });
      })
      .catch(err => res.status(404).json(err))

});


router.post('/getTypes', function(req, res, next) {
  let href = "https://spreadsheets.google.com/feeds/list/18GAUw1YmWC2pcCug6jqU_atcIn51fQSrDLNmcuqdoP8/oye0vyq/public/values?alt=json"
  fetch(href)
      .then(response => response.json())
      .then(data => { res.json (data) })
	    .catch(err => res.status(404).json(err))
});

router.post('/getBusinesses', function(req, res, next) {
  let href = "https://spreadsheets.google.com/feeds/list/18GAUw1YmWC2pcCug6jqU_atcIn51fQSrDLNmcuqdoP8/od6/public/values?alt=json"
  fetch(href)
      .then(response => response.json())
      .then(data => { res.json (data) })
	    .catch(err => res.status(404).json(err))
});

router.post('/getBusinessesBySearch', function(req, res, next) {
  let searchText = req.body.searchText;
  let href = "https://spreadsheets.google.com/feeds/list/18GAUw1YmWC2pcCug6jqU_atcIn51fQSrDLNmcuqdoP8/od6/public/values?alt=json"
  fetch(href)
      .then(response => response.json())
      .then(data => { 
        let arr = data.feed.entry;
        arr = filterKeysOfArrayOfObjects ('gsx$', arr);
        arr = filterArrayOfObjects (searchText, arr);
        res.json (arr)
      })
	    .catch(err => res.status(404).json(err))

});


function filterKeys(prefix, obj) {
  return Object.entries(obj).reduce((res, [key, value]) => {
      if (key.startsWith(prefix)) {
          res[key] = value;
      }
      return res;
  }, {});
}

/*function filterKeys1(filterdeKeys, obj) {
  return Object.entries(obj).reduce((res, [key, value]) => {
      if (!filterdeKeys.includes(filterdeKeys)) {
          res[key] = value;
      }
      return res;
  }, {});
}*/

function filterKeysOfArrayOfObjects (prefix, arr) {
  return arr.map (e => filterKeys (prefix, e));
}

function filterArrayOfObjects (tags, arr) {
  return arr.filter(obj => {
    //let res = Object.values(obj).some (s => s.includes(tags))
    return Object.values(obj).some (e => e.$t.includes (tags)) 
  })
}

module.exports = router;
