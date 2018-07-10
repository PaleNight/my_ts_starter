let isDone: boolean = false;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

/**
 * 注意ts 中不能直接在最外城的作用域 定义 name 的变量 或者是 常量
 * */
let _name: string = "bob";
_name = "smith";
{
    let _name: string = "bob";
}

{
    let name: string = `Gene`;
    let age: number = 37;
    let sentence1: string = `Hello, my name is ${ name }.
    I'll be ${ age + 1 } years old next month.`;
    let sentence2: string = "Hello, my name is " + name + ".\n\n" +
        "I'll be " + (age + 1) + " years old next month.";
}

{
    let list1: number[] = [1, 2, 3];
    list1.push(2);
    let list2: Array<number> = [1, 2, 3];
}


{
    /** 元祖 */
    // Declare a tuple type
    let x: [string, number];
    // Initialize it
    x = ['hello', 10]; // OK
    console.log(x[0].substr(1)); // OK
    // console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
    {
        let x: [string | number];
        // Initialize it
        x = ['hello']; // OK
        // 类型断言 x[0]是一个string
        console.log((<string>x[0]).substr(1)); // OK
        // console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
    }
}
{
    /** 枚举 */
    enum Color {Red, Green, Blue}

    let c: Color = Color.Green;
    {
        /** 手动赋值 */
        enum Color {Red = 1, Green = 2, Blue = 4}

        let c: Color = Color.Green;
    }
    {
        enum Color {Red = 1, Green, Blue}

        let colorName: string = Color[2];
        alert(colorName);  // 显示'Green'因为上面代码里它的值是2
    }


}

{
    /** Any */
    {
        let notSure: any = 4;
        notSure = "maybe a string instead";
        notSure = false; // okay, definitely a boolean
    }
    {
        let notSure: any = 4;
        notSure.ifItExists(); // okay, ifItExists might exist at runtime
        notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

        let prettySure: Object = 4;
        // prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
    }
    {
        let list: any[] = [1, true, "free"];
        list[1] = 100;
    }
}

{
    /** Void */
    function warnUser(): void {
        alert("This is my warning message");
    }

    let unusable: void = undefined;
    // Not much else we can assign to these variables!
    let u: undefined = undefined;
    let n: null = null;
}

{
    /** Never */
    // 返回never的函数必须存在无法达到的终点(执行到底)
    function error(message: string): never {
        throw new Error(message);
    }

    // 推断的返回值类型为never
    function fail() {
        return error("Something failed");
    }

    // 返回never的函数必须存在无法达到的终点
    function infiniteLoop(): never {
        while (true) {
        }
    }

}

{
    /** 类型断言 */
    let someValue: any = "this is a string";

    let strLength: number = (<string>someValue).length;

    let someValue1: any = "this is a string";

    let strLength1: number = (someValue as string).length;
}