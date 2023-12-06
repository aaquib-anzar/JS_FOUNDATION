let a = 200
if(true){
    var b = 10
    let a = 20
    const c = 30

    //console.log(b)
    //console.log(a)
    //console.log(c)
}
//console.log(b)
//console.log(a)

function one(){
    const userName = "Aaquib"

    function two(){
        const website = "youtube"
        //console.log(userName)
    }
    //console.log(website)
    //two()
}
//one()

console.log(addOne(5)) // this will not give any error
function addOne(num){
    return num+1
}

//console.log(addone(5)) this will give error
const res = function addone(num){
    return num+1
}