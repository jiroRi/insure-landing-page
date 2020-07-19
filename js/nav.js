let navMobileBtn = document.querySelector('.nav--mobile__button')
let navMobileBtnBG = document.querySelector('.nav--mobile__button > div');
let navMobile = document.querySelector('.nav--mobile')
let indexBody = document.querySelector('body')

let navDisplay = true

let navIsOpen = () => {
    navMobileBtnBG.style.backgroundImage = `url(images/icon-close.svg)`
    navMobileBtnBG.style.animation = `rotateCounterClockWise 400ms 1`
    navMobileBtnBG.style.transition = `background-image 200ms`

    navMobile.style.opacity = 1
    navMobile.style.left = 0
    navMobile.style.zIndex = 100

    indexBody.style.overflowY = `hidden`

    navDisplay = false
}

let navIsClose = () => {
    navMobileBtnBG.style.backgroundImage = `url(images/icon-hamburger.svg)`
    navMobileBtnBG.style.animation = `rotateClockWise 400ms 1`
    navMobileBtnBG.style.transition = `background-image 400ms 100ms`

    navMobile.style.opacity = 0
    navMobile.style.left = `100%`

    setTimeout(() => {
        navMobile.style.zIndex = -9999
    }, 600) 

    indexBody.style.overflowY = `visible`

    navDisplay = true
}

navMobileBtn.addEventListener("click", () => {
    (navDisplay ? navIsOpen() : navIsClose())
})
