// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    let resArray = [];

    matrix.forEach((elem, index, matrixArr) => {
        if (index % 2 === 0) {
            resArray.push(...matrixArr[index]);
        } else {
            resArray.push(...matrixArr[index].reverse());
        }
    });

    return resArray;
};
