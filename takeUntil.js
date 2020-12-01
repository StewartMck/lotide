const takeUntil = function(array, callback) {
  return array.slice(0, array.findIndex(callback));
};

module.exports = takeUntil;