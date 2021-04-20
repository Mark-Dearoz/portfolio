
const PERCENT = [90, 90, 75, 75, 65, 85]
const windowWidth = window.innerWidth
const h1 = document.getElementsByClassName("skills-h1")
const circleBars = document.getElementsByClassName("circle-bar")
const circleProgressBars = document.getElementsByClassName("circle-progress")
const circleTitles = document.getElementsByClassName("circle-title")


export const animateSkills = () =>{
    for(let i = 0; i < circleBars.length; i++){
        circleBars[i].style.transition = "opacity 200ms ease-in-out 100ms"
        circleTitles[i].style.transition = "opacity 500ms ease-in-out"
        circleTitles[i].style.transitionDelay = `${((i+1) * 125) + 1000}ms`
        circleBars[i].style.opacity = "100%"
        circleTitles[i].style.opacity = "100%"
    }
    for(let i = 0; i < circleProgressBars.length; i++){
        circleProgressBars[i].style.transition = "stroke-dashoffset 200ms ease-in-out"
        circleProgressBars[i].style.transitionDelay = `${((i+1) * 125) + 1000}ms`
        circleProgressBars[i].style.strokeDashoffset = (100 * 2 * 3.14 - (PERCENT[i] / 100 * 100 * 2 * 3.14))
        
    }

    h1[0].style.transition =  "transform 750ms ease-in-out 1000ms"
    if(windowWidth > 1200){
        h1[0].style.transform = "rotate(90deg) translateY(-178px) translateX(0px)"
    }
    if(windowWidth <= 1200 && windowWidth > 600){
        h1[0].style.transform = "rotate(90deg) translateY(-148px) translateX(0px)"
    } 
    if(windowWidth <= 600){
        h1[0].style.transform = "rotate(90deg) translateY(-118px) translateX(0px)"
    }
}

export const deanimateSkills = () => {
    for(let i = 0; i < circleBars.length; i++){
        circleBars[i].style.transition = "opacity 200ms ease-in-out 375ms"
        circleTitles[i].style.transition = "opacity 175ms ease-in-out"
        circleTitles[i].style.transitionDelay = `${((i+1) * 100)}ms`
        circleBars[i].style.opacity = "0%"
        circleTitles[i].style.opacity = "0%"
    }
    for(let i = 0; i < circleProgressBars.length; i++){
        circleProgressBars[i].style.transition = "stroke-dashoffset 200ms ease-in-out"
        circleProgressBars[i].style.transitionDelay = `${((i+1) * 100)}ms`
        circleProgressBars[i].style.strokeDashoffset = (100 * 2 * 3.14 - (0 / 100 * 100 * 2 * 3.14))
    }
    h1[0].style.transition =  "transform 750ms ease-in-out 0ms"
    if(windowWidth > 1200){
        h1[0].style.transform = "rotate(90deg) translateY(-178px) translateX(640px)"
    }
    if(windowWidth <= 1200 && windowWidth > 600){
        h1[0].style.transform = "rotate(90deg) translateY(-148px) translateX(640px)"
    } 
    if(windowWidth <= 600){
        h1[0].style.transform = "rotate(90deg) translateY(-118px) translateX(640px)"
    }
}