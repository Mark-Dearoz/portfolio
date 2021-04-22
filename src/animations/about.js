import {animateH1, deanimateH1} from './h1.js'

const [h1] = document.getElementsByClassName("about-h1")
const [p] = document.getElementsByClassName("about-p")
const [buttonContainer] = document.getElementsByClassName("button-container")
const [circle] = document.getElementsByClassName("about-circle")
const [img] = document.getElementsByClassName("about-img")

export const animateAbout = () => {
    animateButtonContainer()
    animateCircle()
    animateH1(h1)
    animateImg()
    animateP()
}

export const deanimateAbout = () => {
    deanimateButtonContainer()
    deanimateCircle()
    deanimateH1(h1)
    deanimateImg()
    deanimateP()
}

function animateButtonContainer(){
    buttonContainer.style.transition = "transform 750ms ease-in-out 1000ms"
    buttonContainer.style.transform = "translateX(0px)"
}
function animateP(){
    p.style.transition = "transform 750ms ease-in-out 1000ms"
    p.style.transform = "translateX(0px)"
}
function animateCircle(){
    circle.style.transition = "opacity 750ms ease-in-out 1000ms"
    circle.style.opacity = "100%"
}
function animateImg(){
    img.style.transition = "opacity 500ms ease-in-out 1250ms"
    img.style.opacity = "100%"
}


function deanimateButtonContainer(){
    buttonContainer.style.transition = "transform 750ms ease-in-out 0ms"
    buttonContainer.style.transform = "translateX(300px)"
}
function deanimateP(){
    p.style.transition = "transform 750ms ease-in-out 0ms"
    p.style.transform = "translateX(960px)"
}
function deanimateCircle(){
    circle.style.transition = "opacity 750ms ease-in-out 0ms"
    circle.style.opacity = "0%"
}
function deanimateImg(){
    img.style.transition = "opacity 500ms ease-in-out 250ms"
    img.style.opacity = "0%"
}