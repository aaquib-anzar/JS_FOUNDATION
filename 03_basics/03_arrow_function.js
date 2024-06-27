const user = {
    username : "Aaquib",
    price : 999,

    welcomeMessage : function(){
        //console.log(`${this.username},welcome to the website`)
        //console.log(this)
    }
}
//user.welcomeMessage()
//user.username = "Anzar"
//user.welcomeMessage()

//console.log(this)

//const chai = function (){
//    let username = "Aaquib"
//    console.log(this.username)
//}

const chai = () => {
    let username = "Aaquib"
    console.log(this.username)
}
//chai()

// ARROW FUNCTION
const addTwo = (num1,num2) => {
    return num1+num2
}
//console.log(addTwo(3,4))

//const addtwo = (num1,num2) => (num1+num2)//implicit return

const addthree = () => ({username:"Aaquib"})
console.log(addthree())



