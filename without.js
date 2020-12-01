const without = function(source, itemsToRemove) {
  const copySource = Array.from(source);
  for (let item of itemsToRemove) {
    if (copySource.includes(item)) copySource.splice(copySource.indexOf(item), 1);
  }
  return copySource;
};

module.exports = without;