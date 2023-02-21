function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length -1;

    while (leftIdx <=rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx];
        if (midVal < val && (arr[midIdx+1] >= val || midIdx + 1 === arr.length)) {
            return midVal;
        }else if (midVal < val){
            leftIdx = midIdx + 1;
        }else if (midVal >= val){
            rightIdx = midIdx - 1;
        }
    }
    
    return -1;
}

module.exports = findFloor