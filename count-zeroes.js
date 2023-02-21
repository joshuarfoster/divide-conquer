function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while(leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx+rightIdx) / 2)
    let middleVal = arr[middleIdx]
    if (middleVal === 0 && (middleIdx === 0 || arr[middleIdx-1] === 1)){
        return arr.length-middleIdx
    } else if (middleVal === 1 && middleIdx === arr.length-1) {
        return 0
    } else if (middleVal === 1) {
        leftIdx = middleIdx + 1
    } else {
        rightIdx = middleIdx - 1
    }
    }
  }


module.exports = countZeroes