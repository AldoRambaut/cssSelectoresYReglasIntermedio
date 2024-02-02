'use strict'

// Constantes y variables
const imgList = document.querySelectorAll(`.img`)
const lightbox = document.querySelector(`.lightbox`)
const grande = document.querySelector(`.grande`)
const btnCerrar = document.querySelector(`.btnCerrar`)

// Cuando hago click en las imagenes .lightbox se agrega la clase isActive

imgList.forEach((eachImg, index) => {
    imgList[index].addEventListener(`click`,()=>{
        lightbox.classList.add(`isActive`)
        grande.src = imgList[index].src
    })
    
})

// Cuando hago click en cerrar borro isActive

btnCerrar.addEventListener(`click`, ()=>{
    lightbox.classList.remove(`isActive`)
})