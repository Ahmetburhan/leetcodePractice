/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var addThemUp = function(array){
  return array.reduce(function(prev, curr){return prev + curr}, 0);
}

var combinationSum3 = function(k, n) {
  var choices = [9, 8, 7, 6, 5, 4, 3, 2, 1]
  var results = [];

  var findWorkingTotals = function(current, pullFrom, depth){
    if (depth === k && addThemUp(current) === n){
      results.push(current.sort(function(a, b){return a-b}).slice());
      return;
    }else if (depth > k){
      return;
    }else if (addThemUp(current) > n){
      return;
    }

    for (var i = 0; i < pullFrom.length; i++){
      var temp = pullFrom.splice(i, 1)[0];
      current.push(temp);
      findWorkingTotals(current, pullFrom, depth + 1);
      current.pop();
      pullFrom.splice(i, 0, temp);
    }


  }

  findWorkingTotals([], choices, 0);
  return results;
};

combinationSum3(3, 7);