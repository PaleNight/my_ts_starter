/**
 * TypeScript是结构性的类型系统，类型参数只影响使用其做为类型一部分的结果类型
 * 必须是泛型不影响 实例的数据的类型 才能够兼容(基本不太可能的样子)
 * */
{
    let x;
    let y;
    x = y; // 可以兼容
}
{
    let x;
    let y;
    // x = y; // 不兼容 同时data 的类型不相同
}
{
    let x;
    let y;
    // x = y; // 不兼容 同时data 的类型不相同
}
{
    /**
     * 对于没指定泛型类型的泛型参数时，会把所有泛型参数当成any比较。
     * */
    let identity = function (x) {
        return x;
    };
    let reverse = function (y) {
        return y;
    };
    identity = reverse; // Okay because (x: any)=>any matches (y: any)=>any
}
