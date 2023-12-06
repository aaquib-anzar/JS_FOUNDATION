const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}

for(const key in myObject){
    console.log(key)
}

//foreach
const coding = ["js","python","java","ruby","cpp"]

coding.forEach( function (val){
    //console.log(val)
})

coding.forEach( (val) => {
    //console.log(val)
})

function printMe(item){
    //console.log(item)
}
coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    //console.log(item,index,arr)
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "ruby",
        languageFileName : "rb"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName)
})