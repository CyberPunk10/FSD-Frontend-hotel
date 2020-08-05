import './main.sass'
import './components/form-element/form-element.js'
import './components/dropdown/dropdown.js'
import {handlerDropdown} from './components/dropdown/dropdown.js'
import {closeOthersDropdowns} from './components/dropdown/dropdown.js'
import './components/buttons/like-btn/like-btn.js'
import './components/buttons/rate-btn/rate-btn.js'
import './components/range-slider/range-slider.js'

// проверка ES6 синтаксиса
let i = 'проверка ES6 синтаксиса'
let k = value => console.log(value)
k(i)


document.addEventListener('click', function (e) {

  const target = e.target

  // if click on dropdown
  if (target.closest('.dropdown')) {
    handlerDropdown (target.closest('.dropdown'))
  } else {
    closeOthersDropdowns(target)
  }

})
