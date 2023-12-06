//if
const isUserLoggedIn = true
if(isUserLoggedIn){

}
//switch
const month = 3

switch (month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feburary")
        break;
    case 3:
        console.log("March")
        break;
    default:
        break;
}

//falsy value
//false,0,-0,BigInt,NaN,"",null,undefined,0n

//truthy value
//"0",,'false'," ",[],{},function()

const user = []
if(user.length === 0){
    console.log("Array is Empty")
}

const obj = {}

if(Object.keys(obj).length === 0){
    console.log("Object is Empty")
}

//Nullish Coalescing Operator(??):null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
val1 = null ?? 10 ?? 20
console.log(val1)

//terniary Operator

//condition ? true : false

const latte = 10
latte >= 10 ? console.log("bring it") : console.log("leave it")