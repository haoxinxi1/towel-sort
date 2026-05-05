module.exports = function towelSort(matrix) {
  if (!matrix) return [];
  return matrix
    .map((el, i) => {
      if (i % 2 === 1) return el.reverse();
      return el;
    })
    .flat();
};
