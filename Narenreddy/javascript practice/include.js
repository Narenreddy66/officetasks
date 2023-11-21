




let string = "welcome"


let vowelsting = ((string) => {
    let arr = ["a", "e", "i", "o", "u"];
    let newarr = [];
    for (let i of string) {
        if (arr.includes(i))
            newarr.push(i);
    }
    console.log(newarr);
})
vowelsting(string);
