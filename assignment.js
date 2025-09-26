const prompt = require('prompt-sync')();

// Functions
function removegreg(){
people.splice(0,1) // To remove Greg
}
function removejames(){
people.splice(2,1) // To remove James
}
function addmatt(){
    people.unshift(`Matt`) // To add Matt to front
}
function addconner(){
    people.push(`Conner`) // To add me to back
}

// Main

let people = [`Greg`, `Mary`, `Devon`, `James`]


for(let i = 0; i < people.length; i++){
    console.log(people[i])
    }
removegreg()
removejames()
addmatt()
addconner()

let people2 = people.slice(2)// Making copy with slice
console.log(`\n`, people2)

let findMary = people.indexOf("Mary") // indexOf Mary
let findFoo = people.indexOf("Foo") // indexOf Foo

let peopleagain = [`Greg`, `Mary`, `Devon`, `James`] // Redefine variable
peopleagain.splice(2,1, "Elizabeth", "Artie") // Remove Devon and add Elizabeth and Artie

let withBob = peopleagain.concat("Bob") // Create withBob and concatenate "Bob"


