// subsets --->>>> (Backtracking Algorithm);
// Given an integer of unique array of elements , return all possible subsets(Power Sets),
// The solution set must not contain duplicate sets

// Input: [1,2,3] --->>>>> Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0] ---->>>>> Output: [[], [0]]

const arr = [1, 2, 3];

function subsets(arr) {
  let result = [];
  let temp = [];

  function recursiveSubset(arr, i) {
    if (i === arr.length) {
      return result.push([...temp]);
    }

    temp.push(arr[i]);
    recursiveSubset(arr, i + 1);

    // console.log(temp, result);

    temp.pop();
    recursiveSubset(arr, i + 1);
  }

  recursiveSubset(arr, 0);
  return result;
}

console.log(subsets([1, 2]));
// subsets([1, 2]);
