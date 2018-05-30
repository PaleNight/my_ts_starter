{
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    let mySearch: SearchFunc;
    mySearch = function (source: string, subString: string) {
        let result = source.search(subString);
        return result > -1;
    }
}


{
    interface hasLength{
        length:number
    }
    function loggingIdentity<T extends hasLength>(arg: T): T {
        console.log(arg.length);  // Error: T doesn't have .length
        return arg;
    }
}