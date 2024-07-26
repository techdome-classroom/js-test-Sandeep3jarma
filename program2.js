// program2.js
function decodeTheRing(string, pattern) {
  // Use regex to create a regex pattern from the given pattern
  const regex = new RegExp('^' + pattern.split('*').map(part => part.replace(/([.+^$[\](){}\\])/g, '\\$1')).join('.*') + '$');
  return regex.test(string);
}

module.exports = decodeTheRing;
