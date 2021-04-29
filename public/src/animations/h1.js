
const WINDOW_WIDTH = window.innerWidth
const TABLET_BREAKPOINT = 1200
const MOBILE_BREAKPOINT = 600

const transform = (deg, x, y) => `rotate(${deg}deg) translateX(${x}px) translateY(${y}px)`

export const animateH1 = h1 =>{
    h1.style.transition =  "transform 750ms ease-in-out 1000ms"
    if(WINDOW_WIDTH > TABLET_BREAKPOINT) h1.style.transform = transform(90,0,-178)
    if(WINDOW_WIDTH <= TABLET_BREAKPOINT && WINDOW_WIDTH > MOBILE_BREAKPOINT) h1.style.transform = transform(90,0,-148)
    if(WINDOW_WIDTH <= MOBILE_BREAKPOINT) h1.style.transform = transform(90,0,-118)
}

export const deanimateH1 = h1 =>{
    h1.style.transition =  "transform 750ms ease-in-out 0ms"
    if(WINDOW_WIDTH > TABLET_BREAKPOINT) h1.style.transform = transform(90,640,-178)
    if(WINDOW_WIDTH <= TABLET_BREAKPOINT && WINDOW_WIDTH > MOBILE_BREAKPOINT) h1.style.transform = transform(90,640,-148)
    if(WINDOW_WIDTH <= MOBILE_BREAKPOINT) h1.style.transform = transform(90,640,-118)
}

