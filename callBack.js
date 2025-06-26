
hello(goodBye);

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodBye(){
    console.log("Bye!");
}


let fruit =["apple","banna","oragne","cherry"];



fruit.forEach(capital);
fruit.forEach(display);


function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}

function capital(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(callbacks){
    console.log(callbacks)
}