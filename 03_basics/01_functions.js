function addTwoNumber(number1,number2){
    return number1+number2
}

let result = addTwoNumber(8,90)
//console.log(result)

function loginUserMessage(Username){
    if(!Username){
        console.log("Please enter a Username")
        return
    } 
    return `${Username} just logged in`
}
//console.log(loginUserMessage())

function calculateCartPrice(val1,...num)//rest operator
{
    return (val1,num)
}
//console.log(calculateCartPrice(100,200,300))

function calculateCartPrice(val1,val2,...num)//rest operator
{
    return (val1,num)
}
//console.log(calculateCartPrice(100,200,300,400))

const User = {
    userName : "Aaquib",
    price : 29
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}

//handleObject(User)
/*handleObject({
    userName : "Aaquib",
    price : 29
})*/

const myArr = [200,400,100,600]

function handleArr(getArr){
    return getArr[2]
}
//console.log(handleArr(myArr))
//console.log(handleArr([100,200,400,600]));

function num(val1,...nums){
    return nums
}
console.log(num(2,1,24,3))

function add(a,b){
    return a+b

}

const myarr = [1,2]
console.log(add(...myarr))
