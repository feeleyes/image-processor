var config = require('./config.js');
var Jimp = require('jimp');

Jimp.read('./samples/geometric_pattern_sm.jpg', function(err, image) {
    var colorArray = [];
    for(var width = 0; width < config.size.width; width++) {
        colorArray.push([]);
        for(var height = 0; height < config.size.height; height++) {
            var rgba = Jimp.intToRGBA(image.getPixelColor(width, height));
            var grayColor = .21 * rgba.r + .72 * rgba.g + .07 * rgba.b;
            colorArray[width].push(grayColor * 100 / 200);
        }
    }

    console.log(colorArray);
});
