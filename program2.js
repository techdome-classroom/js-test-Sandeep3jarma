const decodeTheRing = function (s, p) {

    // write your code here
    function decodeTheRing(str, pattern) {
      const regex = new RegExp('^' + pattern.replace(/\*/g, '.*').replace(/\?/g, '.') + '$');
      return regex.test(str);
  }
  
  

  };
  
  module.exports = decodeTheRing;

