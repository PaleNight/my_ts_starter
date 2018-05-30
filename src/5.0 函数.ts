/**
 * 为函数定义类型
 * */
{

    function add(x: number, y: number): number {
        return x + y;
    }

    let myAdd = function (x: number, y: number): number {
        /** 推断出结果确实是number 类型 */
        return x + y;
    };

    add(1, 2)
}

/**
 * 书写完整函数类型
 * 变量赋值函数 调用时没法有webstorm 的参数提示
 * */
{

    let myAdd1: (x: number, y: number) => number =
        function (x: number, y: number): number {
            return x + y;
        };
    myAdd1(1, 2);

    let myAdd2: (baseValue: number, increment: number) => number =
        function (x: number, y: number): number {
            return x + y;
        };
    myAdd2(1, 2);

    let myAdd3 = function (x: number, y: number): number {
        return x + y;
    };
    myAdd3(1, 2)


}


/**
 * 类型推断
 * */
{
    // myAdd has the full function type
    let myAdd1 = function(x: number, y: number): number { return x + y; };
    myAdd1(1,2); // 之后方法提示为 number 的方法


    // The parameters `x` and `y` have the type number
    let myAdd2: (baseValue: number, increment: number) => number =
        function(x, y) { return x + y; };

    myAdd2(1,2) // 之后方法提示为 number 的方法
}
