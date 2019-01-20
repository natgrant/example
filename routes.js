const express = require("express");
const router = express.Router();
const fs = require("fs");
const dataPath = "./data.json";
//const data = require("./data.json");
//const dataLoader = require("./js/helpers/dataLoader");
//const bodyParser = require("body-parser");

//const server = express ()
//router.use(bodyParser.urlencoded({extended: true}))

router.get("/", (req, res) => {
  res.render(__dirname + "/views/home");
});

router.get("/walks", (req, res) => {
  fs.readFile(dataPath, "utf8", function(err, data) {
    if (err) {
      return res.status(500).send("An error has occurred");
    }
    let walks = JSON.parse(data);
    res.render(__dirname + "/views/index", { walks: walks, layout: "walks" });
  });
});

router.get("/walks/:id", (req, res) => {
  fs.readFile(dataPath, "utf8", function(err, data) {
    if (err) {
      return res.status(500).send("An error has occurred");
    }
    let walks = JSON.parse(data);
    let walk = walks.find(item => item.id === req.params.id);
    res.render(__dirname + "/views/show", { walk: walk, layout: "walks" });
  });
});

router.get("/contact", (req, res) => {
  fs.readFile(dataPath, "utf8", function(err, data) {
    if (err) {
      return res.status(500).send("An error has occurred");
    }
    res.render(__dirname + "/views/contact", { layout: "walks" });
  });
});

module.exports = router;

//loop thru array
// let person = ""
// for(i = 0; i < dataFile.length; i++){
//   if(dataFile[i] === 2){
//     person = dataFile[i]
//built in javascript function

// TODO: DRY this up
