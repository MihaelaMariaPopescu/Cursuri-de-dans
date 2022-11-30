const fs = require("fs");

// Functia de citire din fisierul .json
module.exports.readJSONFile=()=>{
    return JSON.parse(fs.readFileSync("cursuridb.json"))["cursuri"];
  }
  
  // Functia de scriere in fisierul .json
  module.exports.writeJSONFile=(content)=> {
    fs.writeFileSync(
      "cursuridb.json",
      JSON.stringify({ cursuri: content }, null, 7),
      "utf8",
      err => {
        if (err) {
          console.log(err);
        }
      }
    );
}

