var cfg = require("./Config");
var Server = require("./Server");
var stream = require("./Stream");
var feeds = require("./Feeds");
var db = require("./Database");
var Hound = require("./Hound");
var console = require("./DevConsole");

//sets up the database if none exists
db.create();

console.log("Weir instance started on port " + cfg.port + "...");
Hound.setDB(db);
Hound.start();
if (!cfg.totp) {
  console.log("This installation is not secure: visit the options panel to set up TOTP passwords");
}
