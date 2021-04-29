import {animateH1, deanimateH1} from './h1.js'

const title = document.getElementById("contact-title")
const inputField = document.getElementsByClassName("input-field")
const button = document.getElementById("submit")


export const animateContact = () => {
    animateInputField()
    animateButton()
    animateH1(title)
}
export const deanimateContact = () => {
    deanimateInputField()
    deanimateButton()
    deanimateH1(title)
}


function animateInputField(){
    for(let i = 0; i < inputField.length; i++){
        const DELAY = (i * 250) + 1000
        inputField[i].style.transition = `transform 500ms ease-in-out ${DELAY}ms`
        inputField[i].style.transform = "translateX(0px)"
    }
}
function animateButton(){
    const DELAY = (inputField.length * 250) + 1000
    button.style.transition = `transform 500ms ease-in-out ${DELAY}ms`
    button.style.transform = "translateX(0px)"
}


function deanimateInputField(){
    const DURATION = 750/(inputField.length + 1)
    for(let i = 0; i < inputField.length; i++){
        const DELAY = 375/(inputField.length + 1) * i
        inputField[i].style.transition = `transform ${DURATION}ms ease-in-out ${DELAY}ms`
        inputField[i].style.transform = "translateX(550px)"
    }
}
function deanimateButton(){
    const DURATION = 750/(inputField.length + 1)
    const DELAY = 375/(inputField.length + 1) * inputField.length
    button.style.transition = `transform ${DURATION}ms ease-in-out ${DELAY}ms`
    button.style.transform = "translateX(550px)"
}