let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
let mySearch2 = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
/**
 * 函数参数 接口里定义的名字相匹配
 * */
let mySearch1;
mySearch1 = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
