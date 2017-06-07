var fs = require('fs');
var path = require('path');
var fileExtension = require('file-extension');

var downloadPath = path.resolve('../../Downloads');
var files = [];

console.log(downloadPath);

fs.readdir(downloadPath, function(err, resultFiles) {
  if (!err)
  {
    resultFiles.forEach(function(file) {
      var extension = fileExtension(file);
      if (fs.statSync(path.join(downloadPath, file)).isFile()) {
        files.push(file);
      }
    });

    console.log(files);
  }
  else {
    console.log(err);
  }
})
