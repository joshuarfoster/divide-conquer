function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    const firstVal = arr[0];
    const lastVal = arr[arr.length - 1];

    while(leftIdx <= rightIdx){
        let midIdx = Math.floor((leftIdx + rightIdx)/2);
        let midVal = arr[midIdx];
        if(midIdx === 0 && midVal < lastVal || midVal < arr[midIdx - 1]){
            return midIdx;
        }else if ((midVal >= firstVal && midVal > lastVal)){
            leftIdx = midIdx + 1;
        }else if (midVal < lastVal){
            rightIdx = midIdx -1;
        }
    }
}

module.exports = findRotationCount