/**
 * 类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。
 * 比较两个类类型的对象时，只有实例的成员会被比较。
 * 静态成员和构造函数不在比较的范围内。
 * */
{
    class Animal {
        constructor(name, numFeet) {
        }
    }
    Animal.b = " some text"; // 不参与类型比较
    class Size {
        constructor(numFeet) {
        }
    }
    Size.a = 1; // 不参与类型比较
    let a;
    let s;
    a = s; //OK
    s = a; //OK
}
{
    /**
     * public 方法 可以兼容
     * */
    class Animal {
        constructor(name, numFeet) {
        }
        a() {
        }
    }
    class Size {
        constructor(numFeet) {
        }
        a() {
        }
    }
    let a;
    let s;
    a = s; //OK
    s = a; //OK
}
{
    /**
     * 无继承关系 private 方法 只要有就绝对不能兼容
     * 私有成员会影响兼容性判断。 当类的实例用来检查兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自同一个类的这个私有成员。
     * 这允许子类赋值给父类，但是不能赋值给其它有同样类型的类。
     * */
    class Animal {
        constructor(name, numFeet) {
        }
        a() {
        }
    }
    class Size {
        constructor(numFeet) {
        }
        a() {
        }
    }
    let a;
    let s;
    // a = s;  // Error
    // s = a;  // Error
}
{
    /**
     * 无继承关系 protected 方法 只要有就绝对不能兼容
     * */
    class Animal {
        constructor(name, numFeet) {
        }
        a() {
        }
    }
    class Size {
        constructor(numFeet) {
        }
        a() {
        }
    }
    let a;
    let s;
    // a = s;  // Error
    // s = a;  // Error
}
{
    /**
     * 继承
     * */
    class Animal {
        constructor(name, numFeet) {
        }
        a() {
        }
        b() {
        }
    }
    class BlackPanther extends Animal {
        constructor(name, numFeet, other) {
            super(name, numFeet);
        }
        a() {
        }
    }
    let a;
    let s;
    a = s; // 父类可以兼容子类
    // s = a;  // 子类不能兼容父类
}
