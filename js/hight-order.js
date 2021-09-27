
function calculate(a=20, b=50, operator){
    return operator(a,b);
}

function add(x, y){
    return  x + y;
}
function sub(x,y){
    return x - y;
}


console.log(calculate(5,10,add));
console.log(calculate(20,15,sub));
