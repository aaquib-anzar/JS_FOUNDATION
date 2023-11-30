const score = 100
console.log(score)

const newScore = new Number(100)
console.log(newScore)

console.log(newScore.toString())
console.log(newScore.toFixed(2)); //two decimal places
console.log();

//**************Maths****
console.log(Math)
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.random()) //values between 0 & 1
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min)