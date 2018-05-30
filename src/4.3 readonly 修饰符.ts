{
    /**
     * 你可以使用 readonly关键字将属性设置为只读的。
     * 只读属性必须在声明时或构造函数里被初始化。
     * 当然可以和其他修饰符 连用
     * */
    class Octopus {
        readonly name: string;
        public readonly a: string;
        protected readonly b: string;
        private readonly c: number = 8;

        constructor(theName: string) {
            this.name = theName;
        }
    }

    let dad = new Octopus("Man with the 8 legs");
    // dad.name = "Man with 3-piece suit" // Error
}