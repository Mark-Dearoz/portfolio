import {animateH1, deanimateH1} from './h1.js'

const title = document.getElementById("skills-title")
const circleBars = document.getElementsByClassName("circle-bar")
const circleProgressBars = document.getElementsByClassName("circle-progress")
const circleTitles = document.getElementsByClassName("circle-title")

const PERCENT = [90, 90, 75, 75, 65, 85]


export const animateSkills = () =>{
    animateCircleProgressBars()
    animateCircleTitles()
    animateCircleBars()
    animateH1(title)
}

export const deanimateSkills = () => {
    deanimateCircleProgressBars()
    deanimateCircleTitles()
    deanimateCircleBars()
    deanimateH1(title)
}


function animateCircleBars(){
    for(let i = 0; i < circleBars.length; i++){
        circleBars[i].style.transition = "opacity 200ms ease-in-out 100ms"
        circleBars[i].style.opacity = "100%"
    }
}
function animateCircleTitles(){
    for(let i = 0; i < circleTitles.length; i++){
        const DELAY = (i+1) * 125 + 1000
        circleTitles[i].style.transition = `opacity 500ms ease-in-out ${DELAY}ms`
        circleTitles[i].style.opacity = "100%"
    }
}
function animateCircleProgressBars(){
    const RADIUS = 100
    const CIRCUMFERENCE = RADIUS * 2 * 3.14
    for(let i = 0; i < circleProgressBars.length; i++){
        const DELAY = (i+1) * 125 + 1000
        const OFFSET = CIRCUMFERENCE - (PERCENT[i]/100 * CIRCUMFERENCE)
        circleProgressBars[i].style.transition = `stroke-dashoffset 200ms ease-in-out ${DELAY}ms`
        circleProgressBars[i].style.strokeDashoffset = OFFSET
        
    }
}

function deanimateCircleBars(){
    for(let i = 0; i < circleBars.length; i++){
        circleBars[i].style.transition = "opacity 200ms ease-in-out 375ms"
        circleBars[i].style.opacity = "0%"
    }
}
function deanimateCircleTitles(){
    for(let i = 0; i < circleTitles.length; i++){
        const DELAY = (i+1) * 100
        circleTitles[i].style.transition = `opacity 175ms ease-in-out ${DELAY}ms`   
        circleTitles[i].style.opacity = "0%"
    }
}
function deanimateCircleProgressBars(){
    const RADIUS = 100
    const CIRCUMFERENCE = RADIUS * 2 * 3.14
    for(let i = 0; i < circleProgressBars.length; i++){
        const DELAY = (i+1) * 100
        circleProgressBars[i].style.transition = `stroke-dashoffset 200ms ease-in-out ${DELAY}ms`
        circleProgressBars[i].style.strokeDashoffset = CIRCUMFERENCE
    }
}