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
})
//Increment counter
plus.addEventListener('click', function(){
    count = count + 1
    display.innerHTML = count
})

//Like counter - adds the likes under the heart
heart.addEventListener('click', function(){
    let like = count
    let hearts = heart.innerHTML
    heart.insertAdjacentHTML('beforeend', `<p>${like}</p>`)
    console.log(hearts)
})

//Pause buttom - must be a cleaner way to do this.
pause.addEventListener('click', function(){
    if (pause.innerHTML === ' pause '){
        pause.innerHTML = ' resume '
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        clearInterval(ex)
        return ex
    } else {
        pause.innerHTML = ' pause '
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        let setting = setInterval(function(){++count
            display.innerHTML = count}, 1000)
        return ex = setting
}})

let commentForm = document.getElementById('comment-form')
let commentValue = document.getElementById('comment-input')
let comments = document.getElementById('list')

commentForm.addEventListener('submit', function(event){
    comments.appendChild(document.createElement('ul'))
    let li = comments.appendChild(document.createElement('li'))
    let texty = li.appendChild(document.createTextNode(commentValue.value))
    commentValue.value = ''
    event.preventDefault()
})

})