{
    class Greeter {
        constructor(message) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }
    let greeter;
    greeter = new Greeter("world");
    console.log(greeter.greet());
}
{
    class Greeter {
        greet() {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter.standardGreeting;
            }
        }
    }
    Greeter.standardGreeting = "Hello, there";
    let greeter1;
    greeter1 = new Greeter();
    console.log(greeter1.greet());
    /**
     * 相当于将Greeter类赋值给一个 变量
     * 在变量上面可以修改静态属性
     * */
    let greeterMaker = Greeter;
    greeterMaker.standardGreeting = "Hey there!";
    console.log("standardGreeting", greeterMaker.standardGreeting);
    console.log("standardGreeting", Greeter.standardGreeting);
    let greeter2 = new greeterMaker();
    console.log(greeter2.greet());
}
