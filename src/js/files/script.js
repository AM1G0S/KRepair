// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// import { electron } from "webpack"
// import { removeClasses } from "./functions"

const menuButton = document.querySelector(`.icon-menu`)
const menuBody = document.querySelector(`.menu__body`)

menuButton.addEventListener(`click`, function (e) {
  menuBody.classList.toggle(`_active`)
})


//ебаный пиздец что здесь творится, прошу не даже не дышать рядом с этим кодом, иначе все развалится.
let input = document.querySelectorAll('.addfile__input')
let inputButtons = document.querySelectorAll('.addfile__button')
let addFileBoxs = document.querySelectorAll('.addfile__box')
let inputParent

document.body.addEventListener('click', inputClick)
document.body.addEventListener('input', inputFile)

function inputClick(e) {
  const item = e.target
  if (item.closest('.addfile__button')) {
    inputParent = item.nextElementSibling
  }
}


function inputFile(e) {
  input.forEach(item => {
    if (item.value != "") {
      let val = item.value
      let valIndex = val.indexOf('.')
      let div = document.createElement('div')
      div.className = 'addfile__format'
      div.innerHTML = val.slice(valIndex + 1, val.length)
      inputParent.prepend(div)
      item.value = ""
    } else {
      return
    }
  })
}

document.addEventListener("click", addFileVisible)

function addFileVisible(e) {
  const targetElement = e.target;
  if (targetElement.closest('.addfile__button')) {
    targetElement.nextElementSibling.classList.toggle(`_active`)
  }
}



// =========================
// Вывод сегоднешней даты в блок с отзывом
const reviewTime = document.querySelectorAll(`.review__time`)
let timeItems = Object.values(reviewTime)

let date = new Date().toLocaleDateString();

timeItems.forEach((function (e) {
  e.innerHTML = date
}))
// =========================
