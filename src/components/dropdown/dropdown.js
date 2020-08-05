import './option-for-dropdown/option-for-dropdown.js'
import {handlerOptionDropdown} from './option-for-dropdown/option-for-dropdown.js'
export {handlerDropdown}
export {closeOthersDropdowns}

let dropdowns = document.querySelectorAll(".dropdown")
let dropdown__btns = document.querySelectorAll(".dropdown__btn")

// переменная-флаг. Если true, то ПРЕДЫДУЩИЙ клик произошел по dropdown
let previousClickOnDropdown = false



function handlerDropdown(dropdown) {

  clearActiveDropdown()

  dropdown.classList.add("dropdown_active")

  previousClickOnDropdown = true
  

  // надо допилить так, чтобы при открытии другого дропдауна, другие закрывались (которые должны закрываться по умолчанию)


  // если клик по dropdown__btn, dropdown__btn-span или dropdown__btn-icon
  if (event.target.matches('.dropdown__btn') || event.target.matches('.dropdown__btn-span') || event.target.matches('.dropdown__btn-icon')) {
    closeCurrentDropdown(dropdown)
  }

  // если клик по .option-for-dropdown__plus || .option-for-dropdown__minus
  if (event.target.matches('.option-for-dropdown__plus') || event.target.matches('.option-for-dropdown__minus')) {
    handlerOptionDropdown(event.target, dropdown)
  }

  // if click on btn 'применить'
  if (event.target.matches('.btn') && event.target.innerText.toLowerCase() == 'применить') {
    closeCurrentDropdown(dropdown)
  }

}


function clearActiveDropdown() {
  for (let i = 0; i < dropdown__btns.length; i++) {
    dropdowns[i].classList.remove("dropdown_active")    
  }
}

function closeCurrentDropdown (target) {
  target.classList.toggle('dropdown_expanded')
}


// Закрываем выпадающее меню, если пользователь щелкает за его пределами
function closeOthersDropdowns (target) {

  clearActiveDropdown()


  // если клик произошёл по dropdown, то запомним это для того, чтобы при новом клике
  // очищать все dropdown от класса 'dropdown_active' только когда это необходимо (а не при каждом клике)
  // clickOnDropdown ? previousClickOnDropdown = true : previousClickOnDropdown = false

  
  // Закрываем выпадающее меню, если пользователь щелкает за его пределами    
  for (let i = 0; i < dropdowns.length; i++) {
    
    // если атрибут 'show-always' НЕ содeржит 'true', то dropdown сворачиваем. иначе оставляем несвернутым
    if (!dropdowns[i].dataset.showAlways && dropdowns[i].classList.contains('dropdown_expanded')) {
      
      dropdowns[i].classList.remove('dropdown_expanded')
      
    }
  }
  
}


// ТЕНЬ отображается не во всех dropdowns полностью по периметру, в некоторых тень только вокруг dropdown__btn