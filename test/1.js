{
    let mySearch;
    mySearch = function (source, subString) {
        let result = source.search(subString);
        return result > -1;
    };
}
{
    function loggingIdentity(arg) {
        console.log(arg.length); // Error: T doesn't have .length
        return arg;
    }
}
