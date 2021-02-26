
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let str = '';
  if( matrix == undefined || matrix.length == 0)
		return [];
	for(let i = 0; i < matrix.length; i++) {
		str += (i % 2 == 0)? matrix[i].join('') : matrix[i].reverse().join('');
	}

  return str.split('').map(Number);
}
