const windowWidth = window.innerWidth
const h1 = document.getElementsByClassName("works-h1")
const laptopImg = document.getElementsByClassName("laptop-img")
const title = document.getElementsByClassName("work-title")
const description = document.getElementsByClassName("work-description")
const links = document.getElementsByClassName("work-links")

export const animateCard = index =>{
    title[index].style.transition =  "transform 750ms ease-in-out 1000ms"
    title[index].style.transform = "translateX(0px)"
    description[index].style.transition =  "transform 500ms ease-in-out 1250ms"
    description[index].style.transform = "translateX(0px)"
    links[index].style.transition =  "transform 250ms ease-in-out 1500ms"
    links[index].style.transform = "translateX(0px)"
}

export const deanimateCard = index =>{
    title[index].style.transition =  "transform 750ms ease-in-out 0ms"
    title[index].style.transform = "translateX(900px)"
    description[index].style.transition =  "transform 500ms ease-in-out 0ms"
    description[index].style.transform = "translateX(900px)"
    links[index].style.transition =  "transform 250ms ease-in-out 0ms"
    links[index].style.transform = "translateX(900px)"
}
export const animateWorks = index => {
    animateCard(index)
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

export const deanimateWorks = index => {
    deanimateCard(index)
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
