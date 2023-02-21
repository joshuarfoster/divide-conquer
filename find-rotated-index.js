function findRotatedIndex(arr, val) {

    function findLowestIdx(){
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

    const lowestIdx = findLowestIdx()

    function convertOrderedToRot(idx){
        if ((idx + lowestIdx) < arr.length){
            return idx + lowestIdx;
        }else{
            return idx + lowestIdx - arr.length;
        }
    }

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {

        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midRotIdx = convertOrderedToRot(midIdx);
        let midVal = arr[midRotIdx];

        if (midVal < val) {
            leftIdx = midIdx + 1;
        } else if (midVal > val) {
            rightIdx = midIdx - 1;
        } else {
            return midRotIdx
        }
    }
    return -1



}

module.exports = findRotatedIndex