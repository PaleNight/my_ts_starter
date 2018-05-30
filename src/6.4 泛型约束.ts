/**
 * 约束泛型的 类型必须有哪些属性
 * */
{

    interface Lengthwise {
        length: number;
    }

    /**
     * 现在 T 代表的泛型 依然需要符合 接口LengthWise 的类型
     * */
    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);
        return arg;
    }

    // loggingIdentity(3); // Error 没有length方法
    loggingIdentity({length: 10, value: 3})
}

/**
 * 在泛型约束中使用类型参数
 * */
{

    /**
     * 此处 中文官网的部分不正确 需要参考英文官网的部分
     * */
    function getProperty<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }

    let x = {a: 1, b: 2, c: 3, d: 4};

    getProperty(x, "a"); // okay
    // getProperty(x, "m"); // Error 报错
}

/**
 * 在泛型里使用类类型
 * 在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，
 * */

{
    function create<T>(c: { new(): T }): T {
        return new c();
    }
}
{
    class BeeKeeper {
        hasMask: boolean
    }

    class zooKeeper {
        nametag: string
    }

    class Animal {
        numLegs: number
    }

    class Bee extends Animal {
        keeper: BeeKeeper
    }

    class Lion extends Animal {
        keeper: zooKeeper
    }

    function createInstance<A extends Animal>(animal: new () => A): A {
        return new animal()
    }

    createInstance(Lion).keeper.nametag = "name";
    createInstance(Lion).numLegs = 4;
    createInstance(Bee).keeper.hasMask = true;


}