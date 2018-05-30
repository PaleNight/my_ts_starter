{
    /**
     * class 不能继承 有new 的接口
     * */
    // class Clock implements ClockConstructor {
    //     currentTime: Date;
    //     constructor(h: number, m: number) { }
    // }
}
{
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    class DigitalClock {
        constructor(h, m) {
        }
        tick() {
            console.log("beep beep");
        }
    }
    class AnalogClock {
        constructor(h, m) {
        }
        tick() {
            console.log("tick tock");
        }
    }
    let digital = createClock(DigitalClock, 12, 17);
    let analog = createClock(AnalogClock, 7, 32);
}
