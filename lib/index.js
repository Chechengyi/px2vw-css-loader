var loaderUtils = require('loader-utils');
var Px2vw = require('px2vw-css');

module.exports = function (source) {
  var options = loaderUtils.getOptions(this);
  var px2vw = new Px2vw(options);
  return px2vw.generateVw(source)
}