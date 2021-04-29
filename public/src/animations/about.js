import {animateH1, deanimateH1} from './h1.js'
import {animateTyping, stopAnimation} from './typing.js'


const title = document.getElementById("about-title")
const [p] = document.getElementsByClassName("about-p")
const [buttonContainer] = document.getElementsByClassName("button-container")
const [circle] = document.getElementsByClassName("about-circle")
const [img] = document.getElementsByClassName("about-img")
const headers = document.getElementsByClassName("header")
const line = document.getElementById("line")

const WORDS =["I am", ["creative", "intelligent", "hardworker"]]
const START_DELAY = 1000
const ANIMATION_DELAY = 150

export const animateAbout = () => {
    animateButtonContainer()
    animateCircle()
    animateH1(title)
    showHeader()
    animateImg()
    animateP()
}

export const deanimateAbout = () => {
    deanimateButtonContainer()
    deanimateH1(title)
    deanimateCircle()
    deanimateImg()
    hideHeaders()
    deanimateP()
}

function animateButtonContainer(){
    buttonContainer.style.transition = "transform 750ms ease-in-out 1000ms"
    buttonContainer.style.transform = "translateX(0px)"
}
function animateP(){
    p.style.transition = `transform 750ms ease-in-out 1000ms`
    p.style.transform = "translateX(0px)"
}
function animateCircle(){
    circle.style.transition = `opacity 750ms ease-in-out 1000ms`
    circle.style.opacity = "100%"
}
function animateImg(){
    img.style.transition =`opacity 500ms ease-in-out 1250ms`
    img.style.opacity = "100%"
}
function showHeader(){
    for(const header of headers){
        header.style.transition = "opacity 200ms ease-in-out 1000ms"
        header.style.opacity = "100%"
    } 
    line.style.transition = "opacity 200ms ease-in-out 1000ms"
    line.style.opacity = "100%"
    setTimeout(() => {
        animateTyping(headers, WORDS, START_DELAY, ANIMATION_DELAY)
    }, 1000)
    
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
function hideHeaders(){
    for(const header of headers){
        header.style.transition = "opacity 750ms ease-in-out 0ms"
        header.style.opacity = "0%"
    } 
    line.style.transition = "opacity 750ms ease-in-out 0ms"
    line.style.opacity = "0%"
    setTimeout(() => {
        for(const header of headers) header.innerHTML = ""      
        stopAnimation()
    }, 1000)
    
}