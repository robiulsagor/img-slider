const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")

let slideNumber = 1
const length = images.length

for (let i = 0; i < length; i++) {
    const btns = document.createElement("div")
    btns.className = "btn"
    bottom.appendChild(btns)
}
const btns = document.querySelectorAll(".btn")
btns[0].style.background = "#333"

const removeBg = () => {
    btns.forEach(btn => {
        btn.style.background = "transparent"
    })
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        removeBg()
        slider.style.transform = `translateX(-${i * 800}px)`
        btn.style.background = "#333"
        slideNumber = i + 1
        console.log("slider ", slideNumber);
        console.log("btn no. ", i);
    })
})


const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`
    slideNumber++
}

const firstSlide = () => {
    slider.style.transform = `translateX(-0px)`
    slideNumber = 1
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`
    slideNumber--
}

const lastSlide = () => {
    slider.style.transform = `translateX(-${(length - 2) * 800}px)`
    slideNumber = length
}

right.addEventListener("click", () => {
    console.log("clicled");
    slideNumber < length ? nextSlide() : firstSlide()
    removeBg()
    btns[slideNumber - 1].style.background = "#333"
})

left.addEventListener("click", () => {
    console.log("clicled");
    slideNumber > 1 ? prevSlide() : lastSlide()
    removeBg()
    btns[slideNumber - 1].style.background = "#333"
})