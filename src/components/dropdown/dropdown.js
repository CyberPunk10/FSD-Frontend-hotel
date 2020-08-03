import './option-for-dropdown/option-for-dropdown.js'
import {handlerOptionDropdown} from './option-for-dropdown/option-for-dropdown.js'

let dropdowns = document.querySelectorAll(".dropdown")
let dropdown__btns = document.querySelectorAll(".dropdown__btn")

// переменная-флаг. Если true, то клик произошел по dropdown
let clickOnDropdown = false

// переменная-флаг. Если true, то ПРЕДЫДУЩИЙ клик произошел по dropdown
let previousClickOnDropdown = false


// Навешиваем на все dropdowns функцию сворачивания/разворачивания по клику
dropdowns.forEach(element => {
  element.addEventListener('click', function () {
    handlerDropdown (element)
  });
});


function handlerDropdown(dropdown) {

  // если клик по dropdown__btn, dropdown__btn-span или dropdown__btn-icon
  if (event.target.matches('.dropdown__btn') || event.target.matches('.dropdown__btn-span') || event.target.matches('.dropdown__btn-icon')) {
    
    dropdown.classList.toggle('dropdown_expanded')

  }

  clearActiveDropdown()

  dropdown.classList.add("dropdown_active")

  if (event.target.matches('.option-for-dropdown__plus') || event.target.matches('.option-for-dropdown__minus')) {
    handlerOptionDropdown(event.target, dropdown)
  }

}

function clearActiveDropdown() {
  for (let i = 0; i < dropdown__btns.length; i++) {
    dropdowns[i].classList.remove("dropdown_active")    
  }
}


document.addEventListener('click', function (e) {

  const target = e.target
  
  // ------------------- dropdown ----------------------- //
  // Закрываем выпадающее меню,
  // если пользователь щелкает за его пределами
  
  // пербирая все dropdowns, смотрим произошел ли клик по одному из них. если да, то меняем значение переменной 'clickOnDropdown'
  dropdowns.forEach( elem => elem.contains(target) ? clickOnDropdown = true : false );

  // если текущий клик произошел вне dropdowns, а предыдущий клик был по dropdown,
  // то очищаем все dropdown от класса 'dropdown_active'
  (!clickOnDropdown && previousClickOnDropdown) ? clearActiveDropdown() : false
  
  // если клик произошёл по dropdown, то запомним это для того, чтобы при новом клике
  // очищать все dropdown от класса 'dropdown_active' только когда это необходимо (а не при каждом клике)
  clickOnDropdown ? previousClickOnDropdown = true : previousClickOnDropdown = false

  
  // Закрываем выпадающее меню, если пользователь щелкает за его пределами
  // надо допилить так, чтобы при открытии другого дропдауна, другие закрывались (которые должны закрываться по умолчанию)
  if (!clickOnDropdown) {
    
    for (let i = 0; i < dropdowns.length; i++) {
      
      // если атрибут 'show-always' НЕ содeржит 'true', то dropdown сворачиваем. иначе оставляем несвернутым
      if (!dropdowns[i].dataset.showAlways && dropdowns[i].classList.contains('dropdown_expanded')) {
        
        dropdowns[i].classList.remove('dropdown_expanded')
        
      }
    }
  }
  
  // вовращаем значение по умолчанию
  clickOnDropdown = false

})




// ТЕНЬ отображается не во всех dropdowns полностью по периметру, в некоторых тень только вокруг dropdown__btn