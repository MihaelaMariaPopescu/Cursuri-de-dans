const stilrep =require("./StiluriRepository")
const uuid = require("uuid");

module.exports.getAllstyles = () => {
    const stillist = stilrep.readJSONFile();

    return stillist;
}
