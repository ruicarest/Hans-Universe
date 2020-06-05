var fs = require("fs"),
  path = require("path");

function dirTree(filename) {
  var stats = fs.lstatSync(filename),
    info = {
      path: filename,
      name: path.basename(filename),
    };

  if (stats.isDirectory()) {
    info.type = "folder";
    info.children = fs.readdirSync(filename).map(function (child) {
      return dirTree(filename + "/" + child);
    });
  } else {
    // Assuming it's a file. In real life it could be a symlink or
    // something else!
    info.type = "file";
  }

  return info;
}

if (module.parent == undefined) {
  // node dirTree.js ~/foo/bar
  var util = require("util");
  console.log(util.inspect(dirTree(process.argv[2]), false, null));
}

fs.writeFile("output.json", jsonContent, "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});

//read files from folder

//verify if the src exists in the folder
//  if not - adds with new (ID, src, Colletion, Name, Description, power, shield, maxhp)
//  if yes - skip
//saves actors.json in a folder
