// Filename: optfn.js
// Timestamp: 2014.03.20-13:48:33 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)
// Requires:


var optfn = ((typeof module === 'object') ? module : {}).exports = (function (b) {

  return function (fn) {
    return typeof fn === "function" ? fn : b;
  };

}(function(){}));


