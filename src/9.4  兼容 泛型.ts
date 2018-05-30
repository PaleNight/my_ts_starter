/**
 * TypeScript是结构性的类型系统，类型参数只影响使用其做为类型一部分的结果类型
 * 必须是泛型不影响 实例的数据的类型 才能够兼容(基本不太可能的样子)
 * */
{
    interface Empty<T> {
    }

    let x: Empty<number>;
    let y: Empty<string>;

    x = y; // 可以兼容
}
{
    interface NotEmpty<T> {
        data: T
    }
    let x:NotEmpty<number>;
    let y:NotEmpty<string>;

    // x = y; // 不兼容 同时data 的类型不相同
}

{
    interface NotEmpty<T> {
        data(a:T);
    }
    let x:NotEmpty<number>;
    let y:NotEmpty<string>;

    interface z extends NotEmpty<number>{

    }
    // x = y; // 不兼容 同时data 的类型不相同
}
{
    /**
     * 对于没指定泛型类型的泛型参数时，会把所有泛型参数当成any比较。
     * */
    let identity = function<T>(x: T): T {
       return x
    };

    let reverse = function<U>(y: U): U {
        return y
    };
    identity = reverse;  // Okay because (x: any)=>any matches (y: any)=>any

}