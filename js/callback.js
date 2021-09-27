//1.Regulation Function
function print(){
    console.log("Regulation Function")
}

function inputFunction(message = null){
    console.log(message);
}
//2.call function
print();
//3.pass argument as a function
inputFunction("Hi");

//2.1 callback function
function greeting(){
    console.log("Function");
}
function hello(){
    console.log("Hello World");
}
function inputMessage (){
    let text = prompt ("Please enter: ")
    console.log(text)
}
// 2.2 CallBack function
function inputUser(callback = null, callback2 = null, message = null,inputMessage = null  ){
    let name = "Mark";
    callback();
    callback2();
    inputMessage();
    console.log(message,name);
}

//2.3 Pass argument as a function
inputUser (greeting, hello, inputMessage,"Hi");