const obj1 = {
    name:"aaquib",
    lastName:"anzar"
}
const obj2 = {
    name:"mahin",
    lastName:"anzar"
}
function fun(city,state){
    console.log(this.name+" "+this.lastName+" lives in "+city+" "+state)
}

fun.call(obj2,"masuri","uttarpradesh")
fun.call(obj2,"masuri","uttarpradesh")

fun.apply(obj1,["ghaziabad","uttarpradesh"])
fun.apply(obj2,["masuri","uttarpradesh"])

const fun1 = fun.bind(obj1,"ghaziabad","uttarpradesh")
fun1()
const fun2 = fun.bind(obj2,"masuri","uttarpradesh")
fun2()