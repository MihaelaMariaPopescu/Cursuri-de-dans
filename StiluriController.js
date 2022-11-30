var express = require('express');
var router = express.Router()

const stilserv = require("./StiluriService");
  
  router.get("/cursuri/:id", (req, res) => {
    const stillist = readJSONFile();
  });
  
  router.get("/cursuri", (req, res) => {
    const stillist = stilserv.getAllstyles();
    if(stillist !== undefined && stillist.length !== 0){
      res.status(200).send(stillist);
    }else{
      res.status(204).send("No style found!");
    }
  });
  
 

  module.exports = router
