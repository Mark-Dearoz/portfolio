import {animateH1, deanimateH1} from './h1.js'

const [h1] = document.getElementsByClassName("works-h1")
const laptopImg = document.getElementsByClassName("laptop-img")
const title = document.getElementsByClassName("work-title")
const description = document.getElementsByClassName("work-description")
const links = document.getElementsByClassName("work-links")

export const animateCard = index =>{
    animateDescription(index)
    animateTitle(index)
    animateLinks(index)
}

export const deanimateCard = index =>{
    deanimateDescription(index)
    deanimateTitle(index)
    deanimateLinks(index)
}

export const animateWorks = index => {
    animateCard(index)
    animateH1(h1)
}

export const deanimateWorks = index => {
    deanimateCard(index)
    deanimateH1(h1)
}

function animateTitle(index){
    title[index].style.transition =  "transform 750ms ease-in-out 1000ms"
    title[index].style.transform = "translateX(0px)"
}
function animateDescription(index){
    description[index].style.transition =  "transform 500ms ease-in-out 1250ms"
    description[index].style.transform = "translateX(0px)"
}
function animateLinks(index){
    links[index].style.transition =  "transform 250ms ease-in-out 1500ms"
    links[index].style.transform = "translateX(0px)"
}


function deanimateTitle(index){
    title[index].style.transition =  "transform 750ms ease-in-out 0ms"
    title[index].style.transform = "translateX(900px)"
}
function deanimateDescription(index){
    description[index].style.transition =  "transform 500ms ease-in-out 0ms"
    description[index].style.transform = "translateX(900px)"
}
function deanimateLinks(index){
    links[index].style.transition =  "transform 250ms ease-in-out 0ms"
    links[index].style.transform = "translateX(900px)"
}