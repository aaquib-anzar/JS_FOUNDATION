//array
const myArr = [1,2,3,"Aaquib",'@']
const myArr1 = new Array(1,2,3,6) 
//myArr1.push(17)// add element at the end
//console.log(myArr1)
//myArr1.pop()
//console.log(myArr1)
//myArr1.unshift(17) // add element at the front
//console.log(myArr1)
//myArr1.shift() // delete element from front
//console.log(myArr1)
//console.log("A",myArr1)
const myArr2 = myArr1.slice(1,4)//no change in the oroginal array
//console.log(myArr1)
//console.log("B",myArr2)
//console.log("C",myArr1)
//const myArr2 = myArr1.splice(1,4)//changes the oroginal array
//console.log(myArr1)
//console.log("D",myArr2)

//merge 2 arrays using concat  
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
//const ARR = arr1.concat(arr2)

const ARR = [...arr1,...arr2] //spread operator
//console.log(ARR)

const another_array = [1,2,3,,[4,5],[6,[7,8]],9]
const new_another_array = another_array.flat(Infinity)
//console.log(new_another_array)

//console.log(Array.isArray("Aaquib"))
//console.log(Array.from("Aaquib"))//to get an array
//console.log(Array.from({name:"Aaquib"}))//returns an empty array

let score1 = 100
let score2 = 200
let score3 = 3000
console.log(Array.of(score1,score2,score3))//returns an array
