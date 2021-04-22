import {animateAbout, deanimateAbout} from './animations/about.js'
import {animateSkills, deanimateSkills} from './animations/skills.js'
import {animateWorks, deanimateWorks} from './animations/works.js'
import {animateCard, deanimateCard} from './animations/works.js'

const HEIGHT = 640;
const navCircles = document.getElementsByClassName("nav-circle")
const sectionContainer = document.getElementsByClassName("section-container")
const worksNavCircles = document.getElementsByClassName("works-nav-circle")
const worksImg = document.getElementsByClassName("laptop-img")
const worksContent = document.getElementsByClassName("works-content")


let currCard = 0
navCircles[0].style.opacity = "100%"
worksImg[1].style.opacity = "0%"
worksNavCircles[0].style.opacity = "100%"
animateAbout()

const navCircleClickHandler = index => {
    sectionContainer[0].style.transitionDelay = "1000ms"
    sectionContainer[0].style.transform = `translateY(-${index * HEIGHT}px)`
    for(let i = 0; i < navCircles.length; i++){
        if(i === index) navCircles[i].style.opacity = "100%"
        if(i !== index) navCircles[i].style.opacity = "50%"
    }
    if(index === 0){
        deanimateSkills()
        deanimateWorks(currCard)
        animateAbout()
    }
    if(index === 1){
        deanimateAbout()
        deanimateWorks(currCard)
        animateSkills()
    }
    if(index === 2){
        deanimateAbout()
        deanimateSkills()
        animateWorks(currCard)
    }
    if(index === 3){
        deanimateAbout()
        deanimateSkills()
        deanimateWorks(currCard)
    }
}

const worksNavCircleClickHandler = index => {
    
     worksContent[0].style.transform = `translateY(-${index * HEIGHT}px)`

    if(index === 0){
        currCard = 0
        deanimateCard(1)
        animateCard(0)
    }
    if(index === 1){
        currCard = 1
        deanimateCard(0)
        animateCard(1)
    }
        
    for(let i = 0; i < 2; i++){
        if(index === i){
            worksImg[i].style.opacity = "100%"
            worksNavCircles[i].style.opacity = "100%"
        }else{
            worksImg[i].style.opacity = "0%"
            worksNavCircles[i].style.opacity = "50%"
        }
    }
}

for(let i = 0; i < navCircles.length; i++) {
    navCircles[i].addEventListener("click",() =>  navCircleClickHandler(i))
}

for(let i = 0; i < worksNavCircles.length; i++){
    worksNavCircles[i].addEventListener("click", () => worksNavCircleClickHandler(i))
}
