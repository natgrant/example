const express = require("express");
const router = express.Router();
//const data = require ('')
const bodyParser = require("body-parser");
// const fs = require ('fs')

//const server = express ()
//router.use(bodyParser.urlencoded({extended: true}))

var dataFile = [
  {
    id: 1,
    title: "urban wanderer",
    blurb:
      "Take time out from city living and make the most of your day by exploring some of the best trails Wellington has to offer"
  },
  { id: 2, name: "natalie", age: "26" }
];

router.get("/", (req, res) => {
  res.render(__dirname + "/views/index", dataFile[0]);
});

router.get("/urban-walks/:id", (req, res) => {
  //your loop

  //loop thru array
  // let person = ""
  // for(i = 0; i < dataFile.length; i++){
  //   if(dataFile[i] === 2){
  //     person = dataFile[i]

  //built in javascript function
  var person = dataFile.find(function(item) {
    return item.id == req.params.id;
  });

  res.render(__dirname + "/views/index", person);
});

module.exports = router;
