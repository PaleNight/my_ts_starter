{
    class GenericNumber {
    }
    let myGenericNumber = new GenericNumber();
    /**
     * 设置了 number 类型后
     * zeroValue属性 和 add 的 参数 x y 都是 number 类型
     * */
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
        return x + y;
    };
    let stringNumeric = new GenericNumber();
    stringNumeric.zeroValue = "";
    stringNumeric.add = function (x, y) { return x + y; };
    console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
}
