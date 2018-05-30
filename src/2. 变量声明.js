{
    /**
     * 参数 ?: 可选参数
     * */
    function keepWholeObject(wholeObject) {
        let { a, b = 1001 } = wholeObject;
    }
    keepWholeObject({ a: "2" });
    function keepWholeObject1(wholeObject) {
        let { a, b = 1001 } = wholeObject;
    }
    keepWholeObject1();
}
{
    function f({ a, b }) {
        // ...
    }
}
{
    class C {
        constructor() {
            this.p = 12;
        }
        m() {
        }
    }
    let c = new C();
    let clone = Object.assign({}, c);
    clone.p; // ok
    // 方法都在prototype 上
    // clone.m(); // error!
}
