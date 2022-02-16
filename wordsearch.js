
  
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalLetters = transpose(letters);
    const verticalJoin = verticalLetters.map(ls => ls.join(''));
    const wordBackwards = word.split('').reverse().join('');
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(wordBackwards)) return true
        
    }
    for (l of verticalJoin) {
        if (l.includes(word) || l.includes(wordBackwards)) return true
    }
    return false;
}
const transpose = function(matrix) {
    const outputArr = [];
    for (let i = 0; i < matrix[0].length; i++) {
      outputArr.push([matrix[0][i]]);
    }
    for (let i = 1; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        outputArr[j].push(matrix[i][j]);
      }
    }
    return outputArr;
  };
module.exports = wordSearch