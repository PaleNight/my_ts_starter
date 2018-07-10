{
    function printLabel1(labelledObj: { label: string }) {
        console.log(labelledObj.label);
    }

    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel1({label: "2"});
}
{
    interface LabelledValue {
        label: string;
    }

    function printLabel2(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }

    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel2(myObj);
}
{
    /** 与接口相关的 属性数量 */
    interface AInterface {
        param1: number
    }

    // 变量 不能有任何多余的属性
    const a: AInterface = {
        param1: 1,
        // param2: 2
    };

    // 作为参数 不能有任何多余的属性
    let b = function (param: AInterface) {
        param.param1
    };

    // 传入一个对象 可以有额外参数
    const params = {
        param1: 1,
        param2: 2
    };
    b(params);

    // 作为参数 字面量 不允许额外参数
    b({
        param1: 1,
        // param2: 2
    });

    // 类接口 可以有额外属性 但是不能是私有 private 的
    class C implements AInterface {
        param1: number;
        private param2: number;
        method() {

        }
    }

}

{
    /**
     * 可选属性
     * */
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
        let newSquare = {color: "white", area: 100};
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }

    let mySquare = createSquare({color: "black"});

}
{
    /**
     * 只读属性
     * 做为变量使用的话用 const，
     * 若做为属性则使用   readonly。
     * */
    interface Point {
        readonly x: number;
        readonly y: number;
    }

    let p1: Point = {x: 10, y: 20};
    // p1.x = 5; // error!
}
{
    /** 只读数组 */
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    // ro[0] = 12; // error!
    // ro.push(5); // error!
    // ro.length = 100; // error!
    // a = ro; // error! 不可将只读的数组 赋值给 普通的数组
}
{
    /**
     * 额外的属性检查
     * */
    interface SquareConfig1 {
        color?: string;
        width?: number;
    }

    function createSquare1(config: SquareConfig1): void {
        // ...
    }

    /**
     * 对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。
     * 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误
     * */
    // let mySquare1 = createSquare1({colour: "red", width: 100}); // Error

    /** 不推荐 使用类型断言 让ts 认为 as 之前的类型 就是 as 之后的类型 */
    let mySquare2 = createSquare(<SquareConfig1>{width: 100, opacity: 0.5});
    let mySquare3 = createSquare({width: 100, opacity: 0.5} as SquareConfig1);
}
{
    /**
     * 额外的属性检查
     * 接口中定义 [propName: string]: any; 避开额外属性的检查
     * */
    interface SquareConfig2 {
        color?: string;
        width?: number;

        [propName: string]: any;
    }

    let squareOptions = {colour: "red", width: 100, width1: 100};
    let mySquare = createSquare(squareOptions);


}