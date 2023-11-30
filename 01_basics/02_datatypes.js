//"use strict"; //treat all js code as newer version.

//alert()

/* 
Primitive
int
bigint
boolean
string
null -> standalone value  type = object
undefined type = undefined
symbol -> uniqueness */

/* reference(Non-Primitive)
Array
object*/

console.log(typeof("Aaquib"));

/* ************************ Memory
Stack => primitive datatype stack me copy bnti h aur usme change hota h
Heap => Non-primitive datatype  heap me original ka refence hota h aur usme hi change hota h
*/

let userName = "Aaquib"
let anotherName = userName
anotherName = "Anzar"

console.log(userName)
console.log(anotherName)

let userOne = {
    email:"aaquib@gmail.com",
    upi:"aaquib@ybl"
}
let userTwo = userOne
userTwo.email = "anzar@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

