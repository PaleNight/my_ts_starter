/**
 * C#要求必须明确地使用 public指定成员是可见的。 在TypeScript里，成员都默认为 public。
 *
 * TS 类中默认都是public 对其他类的成员可见
 * */
{
    class Animal1 {
        constructor(theName) {
            this.name = theName;
        }
        move(distanceInMeters) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }
    // 等同于
    class Animal2 {
        constructor(theName) {
            this.name = theName;
        }
        move(distanceInMeters) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }
}
{
    /**
     * 当成员被标记成 private时，它就不能在声明它的类的外部访问。
     * 包括他的派生类
     * */
    class Animal {
        constructor(theName) {
            this.name = theName;
        }
    }
    // new Animal('Cat').name  // Error
}
{
    class Animal {
        constructor(theName) {
            this.name = theName;
        }
    }
    class Rhino extends Animal {
        constructor() {
            super("Rhino");
        }
        eat() {
        }
    }
    class Employee {
        constructor(theName) {
            this.name = theName;
        }
    }
    /**
     * 只要一个变量被赋值为一个有类型的声明的内容
     * 本身默认就会被声明为 同样的类型
     * */
    let animal = new Animal("Goat");
    let animal1 = new Animal("Goat");
    /** 如果 Rhino 类没有 任何的方法和属性 就可以算作和Animal 一样的类型 */
    // let animal2:Rhino = new Animal("Goat"); // Error
    let rhino = new Rhino();
    let employee = new Employee("Bob");
    /**
     * Rhino 使用了 继承来自 Animal 中 私有Name 所以是兼容的
     * */
    animal = rhino;
    /** 虽然属性名相容 但是并不是Animal 中的那个 所以不兼容 */
    // animal = exployee; // Error
}
{
    /**
     * protected 修饰符与 private修饰符的行为很相似，
     * 但有一点不同， protected成员在派生类中仍然可以访问
     * */
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
        getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }
    let howard = new Employee("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    // console.log(howard.name) // Error
}
{
    /**
     * 构造函数也可以被标记成 protected。
     * 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
     * */
    class Person {
        constructor(theName) { this.name = theName; }
    }
    // Employee 能够继承 Person
    class Employee extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
        getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }
    let howard = new Employee("Howard", "Sales");
    // let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
}
