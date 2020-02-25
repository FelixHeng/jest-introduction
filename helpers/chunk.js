// Split an array into chunked arrays of a specific length
// ex : chunkArray([1, 2, 3, 4, 5, 6, 7], 3) *** [[1, 2, 3], [4, 5, 6], [7]]
// ex : chunkArray([1, 2, 3, 4, 5, 6, 7], 2) *** [[1, 2], [3, 4], [5, 6], [7]]

const chunkArray = (arr, len) => {
    // init chunked arr
    const chunkedArr = [];

    // loop through arr
    arr.forEach(val => {
        // get last element
        const lastElem = chunkedArr[chunkedArr.length - 1];

        if (!lastElem || lastElem.length === len) {
            chunkedArr.push([val]);
        } else {
            lastElem.push(val)
        }
    });

    return chunkedArr
}

module.exports = chunkArray