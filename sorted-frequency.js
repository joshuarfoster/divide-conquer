function sortedFrequency(arr, num) {
    //find first instance
    

    function findFirstNum (){
        let firstLeftIdx = 0;
        let firstRightIdx = arr.length - 1;

        while (firstLeftIdx <= firstRightIdx) {
        let firstMidIdx = Math.floor((firstLeftIdx + firstRightIdx) / 2);
        let firstMidVal = arr[firstMidIdx];

        if(firstMidVal !== num && firstMidIdx === (0 || arr.length - 1)){
            return -1;
        }else if(firstMidVal < num){
            firstLeftIdx = firstMidIdx + 1;
        } else if (firstMidVal > num){
            firstRightIdx = firstMidIdx - 1;
        }else if (firstMidVal === num && (firstMidIdx === 0 || arr[firstMidIdx - 1] !== num)){
            return firstMidIdx;
        }else {
            firstRightIdx = firstMidIdx - 1;
        }
        }
    }

    let firstNumIdx = findFirstNum();
    if (firstNumIdx === -1) {
        return -1;
    };

    function findLastNum (){
        let lastLeftIdx = 0;
        let lastRightIdx = arr.length - 1;

        while (lastLeftIdx <= lastRightIdx) {
        let lastMidIdx = Math.floor((lastLeftIdx + lastRightIdx) / 2);
        let lastMidVal = arr[lastMidIdx];

        if(lastMidVal < num){
            lastLeftIdx = lastMidIdx + 1;
        } else if (lastMidVal > num){
            lastRightIdx = lastMidIdx - 1;
        }else if (lastMidVal === num && (lastMidIdx === arr.length - 1 || arr[lastMidIdx + 1] !== num)){
            return lastMidIdx;
        }else {
            lastLeftIdx = lastMidIdx + 1;
        }
        }
    }

    let lastNumIdx = findLastNum();
    return lastNumIdx - firstNumIdx + 1
}

module.exports = sortedFrequency