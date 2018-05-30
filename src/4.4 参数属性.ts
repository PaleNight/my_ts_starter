/**
 * 参数属性通过给构造函数参数添加一个访问限定符来声明。
 * 只能在constructor 的参数中使用
 * */

class Animal1 {
    constructor(private name: string) {
    }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }

}

// 等同于
class Animal2 {
    private name: string;

    constructor(name: string) {
    }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }

}