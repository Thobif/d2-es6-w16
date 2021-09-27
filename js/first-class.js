//1.Assigned
const sayAssign = function (){
    return ('Hello');
}

function greeting(sayHi,name){
    console.log(sayHi(),name);
}


greeting(sayAssign,"Mark");

