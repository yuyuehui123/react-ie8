const findIndex = function (list, type, value) {
    let index = null;
    for (let i = 0; i < list.length; i++) {
        if (list[i][type] == value) {
            index = i;
            break;
        }
    }
    return index;
};

module.exports = findIndex;