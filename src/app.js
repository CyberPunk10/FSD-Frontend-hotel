import './main.sass'
import './components/form-element/form-element.js'
import './components/dropdown/dropdown.js'
import { handlerDropdown } from './components/dropdown/dropdown.js'
import { closeOthersDropdowns } from './components/dropdown/dropdown.js'
import { Select } from './components/select/select.js'
import './components/buttons/like-btn/like-btn.js'
import './components/buttons/rate-btn/rate-btn.js'
import './components/range-slider/range-slider.js'

// проверка ES6 синтаксиса
let i = 'проверка ES6 синтаксиса'
let k = value => console.log(value)
k(i)

const select = new Select('#select', {
  data: [
    { id: '1', value: 'React' },
    { id: '2', value: 'Vue' },
    { id: '3', value: 'React Native' },
    { id: '4', value: 'Next' },
    { id: '5', value: 'Nest' },
    { id: '6', value: 'Angular' }
  ],
  selectedId: '2',
  placeholder: "Выберите пожалуйста элемент",
  onSelect(item) {
    console.log('Selected item: ', item)
  }
})

window.select = select

document.addEventListener('click', function (e) {

  const target = e.target

  // if click on dropdown
  if (target.closest('.dropdown')) {
    handlerDropdown(target.closest('.dropdown'))
  } else {
    closeOthersDropdowns(target)
  }

})
