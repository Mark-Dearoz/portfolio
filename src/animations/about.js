
const windowWidth = window.innerWidth
const h1 = document.getElementsByClassName("about-h1")
const p = document.getElementsByClassName("about-p")
const buttonContainer = document.getElementsByClassName("button-container")
const circle = document.getElementsByClassName("about-circle")
const img = document.getElementsByClassName("about-img")

export const animateAbout = () => {
    buttonContainer[0].style.transition = "transform 750ms ease-in-out 1000ms"
    buttonContainer[0].style.transform = "translateX(0px)"
    p[0].style.transition = "transform 750ms ease-in-out 1000ms"
    p[0].style.transform = "translateX(0px)"
    circle[0].style.transition = "opacity 750ms ease-in-out 1000ms"
    circle[0].style.opacity = "100%"
    img[0].style.transition = "opacity 500ms ease-in-out 1250ms"
    img[0].style.opacity = "100%"
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

export const deanimateAbout = () => {
    buttonContainer[0].style.transition = "transform 750ms ease-in-out 0ms"
    buttonContainer[0].style.transform = "translateX(300px)"
    p[0].style.transition = "transform 750ms ease-in-out 0ms"
    p[0].style.transform = "translateX(960px)"
    circle[0].style.transition = "opacity 750ms ease-in-out 0ms"
    circle[0].style.opacity = "0%"
    img[0].style.transition = "opacity 500ms ease-in-out 250ms"
    img[0].style.opacity = "0%"
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
