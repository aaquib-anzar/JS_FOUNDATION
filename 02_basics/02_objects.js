//singleton
//object literals
const mySym = Symbol("key1")
const jsUser = {
    name:"Aaquib",
    "full name":"Aaquib Anzar",
    [mySym]:"myKey1",
    age:18,
    location:"ghaziabad",
    email:"aaquib@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}
jsUser.email = "aaquib.anzar17@gmail.com"
//Object.freeze(jsUser)//to restrict any changes
jsUser.email = "aaquib.anzar17@gamil.com"
//console.log(jsUser)
//console.log(jsUser.name)
//console.log(jsUser["name"])
//console.log(jsUser["full name"])
//console.log(jsUser[mySym])

/*jsUser.greeting = function(){
    console.log("Hello! js User")
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`)
}
console.log(jsUser.greeting)
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())*/


const tinderUser = {}
tinderUser.id = "5865476"
tinderUser.name = "Sam_Bahadur"
tinderUser.isLoggedIn = false

//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser))
//console.log(tinderUser)

const regularUser = {
    email:"sam@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Aaquib",
            lastName :"Anzar"
        }
    }
}

//console.log(regularUser.fullname.userFullName.lastName)//accesssing nested objects

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 :"d",
    4 :"e"
}

//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2} // spread operator
//console.log(obj3)

const course = {
    courseName : "JS in Hindi",
    price : "899",
    cousreInstructor : "Hitesh"
}
//console.log(course.cousreInstructor)
const {cousreInstructor} = course // also a method of accessing values from objects
//console.log(cousreInstructor)
const {cousreInstructor:Instructor} = course // this is known as destructuring in JS
//console.log(Instructor)