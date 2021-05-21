

let display = document.getElementById('counter')

let clicked = 'false'
let count = 0

display.addEventListener('click',
function(){
    if (clicked === 'false'){
    let setting = setInterval(function(){++count
    display.innerHTML = count}, 1000)
    clicked = 'true'
    return ex = setting
    }
    else if(clicked === 'true'){
        clearInterval(ex)
        count = 0
        display.innerHTML = count
        clicked = 'false'}})





