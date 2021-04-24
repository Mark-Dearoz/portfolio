

const header1 = document.getElementById("header-1")
const header2 = document.getElementById("header-2")

let index
let wordIndex
let wordsIndex
let forward
let interval

const typeSecondWord = words => {

    if(words[wordsIndex].length === wordIndex - 1) forward = false
    if(wordIndex === 0){
        forward = true
        if(wordsIndex === words.length-1) wordsIndex = 0
        if(wordsIndex !== words.length -1) wordsIndex++
    }
    header2.innerHTML = words[wordsIndex].substring(0,wordIndex)
    if(forward) wordIndex++
    if(!forward) wordIndex--

}

const typeFirstWord = (word1, words) => {

    if(index === word1.length + 1) {
        clearInterval(interval)
        interval = setInterval(() => typeSecondWord(words),200)
    }
    header1.innerHTML = word1.substring(0,index)
    index++
}

export const animateTyping = (word1, words) => {
    index = 1
    wordIndex = 1
    wordsIndex = 0
    forward = true
    setTimeout(() =>{
        interval = setInterval(() => typeFirstWord(word1, words),200)
    }, 1000)
    
}

export const deanimateTyping = () => {
    header1.innerHTML = ""
    header2.innerHTML = ""
    clearInterval(interval)
}

