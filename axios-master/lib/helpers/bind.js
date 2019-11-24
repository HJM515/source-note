'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    } // TODO: QUESTION 为什么要复制一个数组呢，这也不是深拷贝呀
    return fn.apply(thisArg, args);
  };
};
