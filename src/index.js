
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
	if( matrix == undefined || matrix.length == 0)
		return arr;
	for(let i = 0; i < matrix.length; i++) {
		arr.push((i % 2 == 0)? matrix[i] : matrix[i].reverse());
	}

  return String(arr).split(',');
}
