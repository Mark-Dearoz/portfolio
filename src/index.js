import {animateSkills, deanimateSkills} from './animations/skills.js'
import {animateAbout, deanimateAbout} from './animations/about.js'

const HEIGHT = 640;
const navCircles = document.getElementsByClassName("nav-circle")
const sectionContainer = document.getElementsByClassName("section-container")

navCircles[0].style.opacity = "100%"

const navCircleClickHandler = index => {
    sectionContainer[0].style.transitionDelay = "1000ms"
    sectionContainer[0].style.transform = `translateY(-${index * HEIGHT}px)`
    for(let i = 0; i < navCircles.length; i++){
        if(i === index) navCircles[i].style.opacity = "100%"
        if(i !== index) navCircles[i].style.opacity = "50%"

    }
    if(index === 0){
        deanimateSkills()
        animateAbout()
    }
    if(index === 1){
        deanimateAbout()
        animateSkills()
    }
    if(index === 2){
        deanimateAbout()
        deanimateSkills()
    }
    if(index === 3){
        deanimateAbout()
        deanimateSkills()
    }
}

for(let i = 0; i < navCircles.length; i++) {
    navCircles[i].addEventListener("click",() =>  navCircleClickHandler(i))
}
