{
    /**
     * 参数 ?: 可选参数
     * */
    function keepWholeObject(wholeObject: { a: string, b?: number }) {
        let {a, b = 1001} = wholeObject;
    }
    keepWholeObject({a: "2"});

    function keepWholeObject1(wholeObject: { a?: string, b?: number } = {}) {
        let {a, b = 1001} = wholeObject;
    }
    keepWholeObject1()
}
{
    /** 函数参数解构 */
    type C = { a: string, b?: number }
    function f1({ a, b }: C): void {
        // ...
    }
}
{
    class C {
        p = 12;
        m() {
        }
    }
    let c = new C();
    let clone = { ...c };
    clone.p; // ok
    // 方法都在prototype 上
    // clone.m(); // error!
}