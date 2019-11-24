'use strict';

module.exports = function isValidXss(requestURL) { // TODO: 没看懂这个正则
  var xssRegex = /(\b)(on\S+)(\s*)=|javascript|(<\s*)(\/*)script/gi;
  return xssRegex.test(requestURL);
};
