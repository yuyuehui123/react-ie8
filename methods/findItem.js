const findItem = function (list, type, value) {
    let item = null;
    for (let i = 0; i < list.length; i++) {
        if (list[i][type] == value) {
            item = list[i];
            break;
        }
    }
    return item;
};

module.exports = findItem;