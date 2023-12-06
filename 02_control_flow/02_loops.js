
for(let index = 0;index < 10;index++){
    console.log(index);

}

//do{

//}while(condition)

//for
const array = [1,2,3,4,5]
for(const val of array ){
    console.log(val)
}

//maps contains unique values
const map = new Map()
map.set('IN',"india")
map.set('USA',"United State of America")
map.set('Fr',"France")

//console.log(map)

for(const [key] of map){
    console.log(key)
}
for(const [key,value] of map){
    console.log(key , ':-',value)
}