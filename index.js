var express = function (a, b){
    if (a > b){
        console.log(a + " > " + b);
    }
    else if (a == 5 && b == 5){
        console.log(a + " і " + b + " = 5");
    }
    else console.log(a + " < " + b);
    
}
function declara(a, b){
    if (a != b){
        console.log(a + " != " + b);
    }
    else if (a === 5 || c === 5){
        console.log("a або b" + " = 5");
    }
    console.log(arguments[0] + "; " + arguments[1])
}

express(2, 5);
declara(2, 5);