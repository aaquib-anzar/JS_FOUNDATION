const myNums = [1,2,3]
/*const myTotal = myNums.reduce( function(accumulator,currVal) {
    console.log(`acc: ${accumulator} and current: ${currVal}`)
    return accumulator + currVal
},3)*/
const myTotal = myNums.reduce ((acc,curr) => acc+curr,0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName:"jsCourse",
        price:299
    },
    {
        itemName:"WebDev",
        price:999
    },
    {
        itemName:"AppDev",
        price:1999
    },
    {
        itemName:"DataAnalytics",
        price:5299
    },

]
const rpicetoPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(rpicetoPay)



const expenses = [1254,3652,9852,26547]

const tval = expenses.reduce((acc,expenses) => acc+expenses,0)
console.log(tval)