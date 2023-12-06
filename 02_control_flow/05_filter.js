/*const coding = ["js","python","java","ruby","cpp"]


const values  = coding.forEach( (val) => {
    console.log(val)
})
console.log(values)*/

/*const myNums = [1,2,3,4,5,6,,8,9]
const newNums1 = myNums.filter( (num) => {num > 4})//returns an empty array
const newNums3 = myNums.filter( (num) => {
     return num > 4
})
const newNums2 = myNums.filter( (num) => num > 4)//return desired result
console.log(newNums2);
console.log(newNums3);*/

/*const newNums = []
const myNums = [1,2,3,4,5,6,,8,9]
myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums)*/

const Books = [
    {title: "Book One", genre: "History",publish: 2001,edition: 1},
    {title: "Book Two", genre: "Science",publish: 2002,edition: 2},
    {title: "Book Three", genre: "Fiction",publish: 2003,edition: 3},
    {title: "Book Four", genre: "Non-Fiction",publish: 2004,edition: 4},
    {title: "Book Five", genre: "Science",publish: 2005,edition: 5},
    {title: "Book Six", genre: "History",publish: 2006,edition: 6},
    {title: "Book Seven", genre: "Astrology",publish: 2007,edition: 7},
    {title: "Book Eight", genre: "Comic",publish: 2008,edition: 8},
    {title: "Book Nine", genre: "Astronomy",publish: 2009,edition: 9},
    {title: "Book Ten", genre: "Polity",publish: 2001,edition: 10},
]

const userBooks = Books.filter( (bk) => bk.genre === "History")
const userBooks1 = Books.filter( (bk) => bk.publish > 2000)
console.log(userBooks)
console.log(userBooks1)