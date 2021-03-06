/** TypeScript里的类型兼容性是基于结构子类型的。 */
{
    /**
     * 结构类型是一种只使用其成员来描述类型的方式。 它正好与名义（nominal）类型形成对比。
     * 在基于名义类型的类型系统中，数据类型的兼容性或等价性是通过明确的声明和/或类型的名称来决定的。
     * 这与结构性类型系统不同，它是**基于类型的组成结构**，且不要求明确地声明。
     * */

    interface Named {
        name: string;
    }

    class Person {
        name: string;
    }

    let p: Named;
    // OK, because of structural typing
    p = new Person();

    /**
     * 在使用基于名义类型的语言，比如C#或Java中，这段代码会报错，因为Person类没有明确说明其实现了Named接口。
     * TypeScript的结构性子类型是根据JavaScript代码的典型写法来设计的。
     * 因为JavaScript里广泛地使用匿名对象，例如函数表达式和对象字面量，所以使用结构类型系统来描述这些类型比使用名义类型系统更好。
     * */
}
{
    /**
     * TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y **至少 >= ** 具有与x相同的属性。
     * */
    interface Named {
        name: string;
    }

    let x: Named;
    // y's inferred type is { name: string; location: string; }
    let y = {name: 'Alice', location: 'Seattle'};
    x = y; // warning 但不报错 提示可能不符合
    /**
     * 这里要检查y是否能赋值给x，编译器检查x中的每个属性，看是否能在y中也找到对应属性。
     * 在这个例子中， y必须包含名字是name的string类型成员。y满足条件，因此赋值正确。
     * */
    console.log(x, y);

    function greet(n: Named) {
        alert('Hello, ' + n.name);
        // alert(n.location) // Error 就只能使用Named 中的属性 name
    }

    greet(y); // OK

}


