/*const myNumbers = [1,2,3,4,5,6,7,8,9]

const newNums = myNumbers.map( (num) => num+10 )//using map
console.log(newNums)

const ans = []//using forEach
myNumbers.forEach( (num) => {
    const val = num+10
    ans.push(val)
})
console.log(ans)*/


//chaining
const myNumbers = [1,2,3,4,5,6,7,8,9]

const newNums = myNumbers
    .map( (num) => num * 10 )
        .map( (num) => num+1)
            .filter( (num) => num>40)
console.log(newNums)
console.log(typeof(myNumbers.filter((num) => !(num & 1))))
console.log(typeof(myNumbers.map((num) => num*10)))


