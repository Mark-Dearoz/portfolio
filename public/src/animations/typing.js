
let interval
let elementsIndex 
let wordsIndex
let letterIndex

let lastWordsIndex
let lastWordIndex
let directionForward

const typeLastWords = (element, words) => {
    if(words[lastWordsIndex].length === lastWordIndex - 1) directionForward = false
    if(lastWordIndex === 0){
        directionForward = true
        if(lastWordsIndex === words.length-1) lastWordsIndex = 0
        if(lastWordsIndex !== words.length -1) lastWordsIndex++
    }
    element.innerHTML = words[lastWordsIndex].substring(0,lastWordIndex)
    if(directionForward) lastWordIndex++
    if(!directionForward) lastWordIndex--

}

const typeWord = (elements, words, animationDelay) => {
    if(words[elementsIndex] === undefined) return clearInterval(interval)

    if(Array.isArray(words[wordsIndex])) {
        clearInterval(interval)
        lastWordsIndex = 0
        lastWordIndex = 1
        directionForward = true
        interval = setInterval(() => typeLastWords(elements[elementsIndex], words[wordsIndex]),animationDelay)
    }else{
        elements[elementsIndex].innerHTML = words[wordsIndex].substring(0,letterIndex) 
    }

    
    if(letterIndex === words[wordsIndex].length){
        elementsIndex++
        wordsIndex++
        letterIndex = 0
    }
    
    letterIndex++
    
}

export const animateTyping = (elements, words, startDelay=0, animationDelay=0) => {
    elementsIndex = 0
    wordsIndex = 0
    letterIndex = 1
    clearInterval(interval)
    setTimeout(() =>{
        interval = setInterval(() => typeWord(elements, words, animationDelay),animationDelay)
    }, startDelay)
    
}


const eraseWord = (elements, words) => {
    
    if(Array.isArray(words[words.length - 1])){
        elements[elementsIndex].innerHTML = words[words.length-1][lastWordsIndex].substring(0, lastWordIndex)
        lastWordIndex--
        if(lastWordIndex == 0) {
            elementsIndex--
            letterIndex = words[words.length - 2]
            wordsIndex = words.length - 2
        }
    }else{
        if(words[wordsIndex] === undefined) return clearInterval(interval)
        elements[elementsIndex].innerHTML = words[wordsIndex].substring(0, letterIndex)
        if(letterIndex === 0){
            elementsIndex--
            wordsIndex--
            if(wordsIndex >=0) letterIndex = words[wordsIndex].length
        }
        letterIndex--
        
    }
    
}
export const deanimateTyping = (elements, words, animationDelay) => {
    elementsIndex = elements.length - 1
    wordsIndex--
    letterIndex = words[wordsIndex].length - 1
    clearInterval(interval)
    interval = setInterval(() => eraseWord(elements, words), animationDelay)
}

export const stopAnimation = () =>{
    clearInterval(interval)
}
