const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const fs = require("fs");
const data = require("./data.json");

//const server = express ()
//router.use(bodyParser.urlencoded({extended: true}))

var dataFile = [
  {
    id: 1,
    title: "urban wanderer",
    blurb:
      "Take time out from city living and make the most of your day by exploring some of the best trails Wellington has to offer"
  }
];

router.get("/", (req, res) => {
  res.render(__dirname + "/views/index", dataFile[0]);
});

router.get("/walks", (req, res) => {
  fs.readFile(data, "utf8", function(err, data) {
    if (err) {
      return res.status(500).send("An error has occurred");
    }
    let walk = {
      walkways: JSON.parse(data)
    };
    console.log(walk);
    res.render("views/walk", walk);
  });
});

router.get("/walks/:id", (req, res) => {
  //your loop

  //loop thru array
  // let person = ""
  // for(i = 0; i < dataFile.length; i++){
  //   if(dataFile[i] === 2){
  //     person = dataFile[i]

  //built in javascript function
  var walk = dataFile.find(function(item) {
    return item.id == req.params.id;
  });
  res.render(__dirname + "/views/walk", { layout: "walks" });
});

module.exports = router;
