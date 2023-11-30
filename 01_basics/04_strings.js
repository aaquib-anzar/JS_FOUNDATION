const name = "Aaquib"
const repoCount = 3

//console.log(name+repoCount) //Avoid using this
//console.log(`hello my name is ${name} & my repo count is ${repoCount} `) //prefer this

const newName = new String("Aaquib-3")
const newString = newName.substring(0,4) //cannot used negative indexing
const anotherString = newName.slice(-7,4) //can used negative indexes
const another1String = "         AAQUIB       "
//console.log(newName)
//console.log(newName.length)
//console.log(newName.charAt(2))
//console.log(newName.indexOf('u'))
//console.log(newName.at(2))
console.log(newString)
console.log(anotherString)
console.log(another1String.trim())//remove white spaces

