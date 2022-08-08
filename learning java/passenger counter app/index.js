let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
function increament() {
count = count + 1 //it is the same as count += 1
countEl.innerText = count
console.log(count)
}

function save() {
    entry = count + "-"
    saveEl.innerText += entry
    countEl.innerText = 0
    count = 0
}




//
let welcomeEl = document.getElementById("welcome-el")

let name = "Opafunso Benjamin"
let greeting = "Hi, welcome back"

welcomeEl.innerText = greeting + name + "emoji"
