var dirw = require('dirw');
var fs = require('fs');

module.exports = function (path, pre_file_extend, post_file_extend) {
    dirw.walk(path, 0, handleFile);

    function handleFile(path, floor) {
        if ((new RegExp("" + pre_file_extend + "$").test(path))) {
            
            var newPath = path.replace("." + pre_file_extend, "." + post_file_extend)

            console.log("rename "+ path + " to " + newPath)
            fs.renameSync(path, newPath)
        }
    }
}