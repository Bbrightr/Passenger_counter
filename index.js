// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
let clear = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    newState = count + "-"
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.innerText = newState + count
    // newState = newState * 0
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}

function clearState(){
    clear = count*0
    countEl.innerText = clear
}


