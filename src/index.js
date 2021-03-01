
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix && matrix.length !== 0 && Array.isArray(matrix)) {
    return matrix.map((item, index) => index % 2 ? item.reverse() : item).flat();
  }
  return [];
}
