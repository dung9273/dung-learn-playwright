// declarative 
function helloOne(){
    console.log('hello one!')
}
helloOne()

//anoymus 
var helloTwo = function(){
    console.log('Hello Two!')
}
helloTwo()

//ES6 func or arrow

var helloThree = () => {
 console.log('Hello Two!')
}
helloTwo()


// arguments
function printName( name, lastName){
    console.log(name , lastName)

}
printName('Dung', 'Han')

// return

function math(number){
    var result = number * 3
    return result
}
var myResult = math(5)
console.log(myResult)

// import func
import {printAge} from '../helpers/printHelper.js'
printAge(5)
