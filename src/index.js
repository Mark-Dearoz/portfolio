let currentCard = 0;
const PAPER_WIDTH = 560
const PROJECT_CARD_WIDTH = 512
const paperContainer = document.getElementsByClassName("paper-container")[0]
const projectCardContainer = document.getElementsByClassName("project-card-container")[0]
const percentBars = document.getElementsByClassName("percent-bar")
const circles  = document.getElementsByClassName("circle")
const lines = document.getElementsByClassName("line")
const labels = document.getElementsByClassName("label")
const dots = document.getElementsByClassName("dot")
const raindrops = document.getElementsByClassName("raindrop")
const landingPage = document.getElementsByClassName("landing-page")

circles[0].style.transform = "scale(2,2)"
circles[0].style.opacity = "100%"

labels[0].style.transform = "translateX(-60px)"
labels[2].style.transform = "translateX(44px)"
labels[3].style.transform = "translateX(74px)"

labels[0].style.opacity = "100%"

dots[0].style.opacity = "100%"

for(let i = 0; i < circles.length; i++){
    circles[i].addEventListener("mouseover", () =>{
        labels[i].style.opacity = "100%"
    })
    circles[i].addEventListener("mouseleave", () =>{
        if(currentCard !== i) labels[i].style.opacity = ""
    })
}
const skillsAnimation = () => {
    percentBars[0].style.width = "95%"
    percentBars[0].style.transitionDelay = "200ms"
    percentBars[1].style.width = "95%"
    percentBars[1].style.transitionDelay = "400ms"
    percentBars[2].style.width = "85%"
    percentBars[2].style.transitionDelay = "500ms"
    percentBars[3].style.width = "85%"
    percentBars[3].style.transitionDelay = "600ms"
    percentBars[4].style.width = "70%"
    percentBars[4].style.transitionDelay = "700ms"
    percentBars[5].style.width = "80%"
    percentBars[5].style.transitionDelay = "800ms"
}
const resetSkillsAnimation = () => {
    for(let i = 0; i < percentBars.length; i++){
        percentBars[i].style.width = "0%"
    }
}
const circleClick = num =>{
    paperContainer.style.transform = `translateX(-${PAPER_WIDTH*num}px)`
    currentCard = num

    if(num === 1) skillsAnimation()
    else resetSkillsAnimation()
    for(let i = 0; i < lines.length; i++){
        if(i < num){
            lines[i].style.opacity = "100%"
        }else{
            lines[i].style.opacity = "50%"
        }
    }

    for(let i = 0; i < circles.length; i++){
        if(i <= num){
            circles[i].style.opacity = "100%"
        }else{
            circles[i].style.opacity = "50%"
        }
        if(i === num){
            circles[i].style.transform = "scale(2,2)"
            labels[i].style.opacity = "100%"
        }else{
            circles[i].style.transform = "scale(1,1)"
            labels[i].style.opacity = "0%"
        }
    }
}

const dotClick = num => {
    projectCardContainer.style.transform = `translateX(-${PROJECT_CARD_WIDTH*num}px)`

    for(let i = 0; i < dots.length; i++){
        if(i === num){
            dots[i].style.opacity = "100%"
        }else{
            dots[i].style.opacity = "50%"
        }
    }
}


const mainPageTransition = () =>{
    landingPage[0].style.height = "0%";
    for(let i = 0; i < raindrops.length; i++){
        raindrops[i].style.height = '0vh'
    }

}