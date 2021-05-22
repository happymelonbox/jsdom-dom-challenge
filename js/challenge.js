document.addEventListener('DOMContentLoaded', function(){
//Interval counter to start when clicked and reset when clicked again

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
        clicked = 'false'
    }})

//

let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let heart = document.getElementById('heart')
let pause = document.getElementById('pause')

//Decrement counter
minus.addEventListener('click', function(){
    count = count - 1
    display.innerHTML = count
    console.log(count)
})

})