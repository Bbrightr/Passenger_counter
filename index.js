let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
let newState = 0
let clear = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let newState = count + " - "
    saveEl.textContent += newState
    count = 0
    countEl.textContent = 0
}

function clearState(){
    count = 0
    countEl.innerText = 0
    saveEl.innerText = 0
    saveEl.innerText = "Previous entires: "

}


