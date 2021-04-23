import {animateAbout, deanimateAbout} from './animations/about.js'
import {animateSkills, deanimateSkills} from './animations/skills.js'
import {animateWorks, deanimateWorks} from './animations/works.js'
import {animateCard, deanimateCard} from './animations/works.js'
import {animateContact, deanimateContact} from './animations/contact.js'

const HEIGHT = 640;
const navCircles = document.getElementsByClassName("nav-circle")
const sectionContainer = document.getElementsByClassName("section-container")
const worksNavCircles = document.getElementsByClassName("works-nav-circle")
const worksImg = document.getElementsByClassName("laptop-img")
const worksContent = document.getElementsByClassName("works-content")
const form = document.getElementById("contact-form")

let currCard = 0;

animateAbout()
const navCircleClickHandler = index => {
    sectionContainer[0].style.transitionDelay = "1000ms"
    sectionContainer[0].style.transform = `translateY(-${index * HEIGHT}px)`
    for(let i = 0; i < navCircles.length; i++){
        if(i === index) navCircles[i].classList.add("active")
        if(i !== index) navCircles[i].classList.remove("active")
    }
    if(index === 0){
        deanimateSkills()
        deanimateWorks(currCard)
        deanimateContact()
        animateAbout()
    }
    if(index === 1){
        deanimateAbout()
        deanimateWorks(currCard)
        deanimateContact()
        animateSkills()
    }
    if(index === 2){
        deanimateAbout()
        deanimateSkills()
        deanimateContact()
        animateWorks(currCard)
    }
    if(index === 3){
        deanimateAbout()
        deanimateSkills()
        deanimateWorks(currCard)
        animateContact()
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
        
    for(let i = 0; i < worksNavCircles.length; i++){
        if(index === i){
            worksImg[i].style.opacity = "100%"
            worksNavCircles[i].classList.add("active")
        }else{
            worksImg[i].style.opacity = "0%"
            worksNavCircles[i].classList.remove("active")
        }
    }
}

function formSubmitHandler(event){
    event.preventDefault()
}
for(let i = 0; i < navCircles.length; i++) {
    navCircles[i].addEventListener("click",() =>  navCircleClickHandler(i))
}

for(let i = 0; i < worksNavCircles.length; i++){
    worksNavCircles[i].addEventListener("click", () => worksNavCircleClickHandler(i))
}

//form.addEventListener('submit', formSubmitHandler)