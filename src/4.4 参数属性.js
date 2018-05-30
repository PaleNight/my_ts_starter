/**
 * 参数属性通过给构造函数参数添加一个访问限定符来声明。
 * 只能在constructor 的参数中使用
 * */
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
// 等同于
class Animal2 {
    constructor(name) {
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
