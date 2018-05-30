/**
 * 函数类型
 * 接口也可以用来来描述函数的类型
 * */
interface SearchFunc {
    (source: string, subString,
     // [propName]:any // 这句话可以无视参数数量
    ): boolean
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
};

/**
 * 函数参数 接口里定义的名字相匹配
 * */
let mySearch1: SearchFunc;
mySearch1 = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
};