'use strict'

export function handlerOptionDropdown(target, dropdown) {
  
  // если клик по option-for-dropdown__plus
  if (target.classList.contains('option-for-dropdown__plus')) {
    
    ++target.parentElement.querySelector('.option-for-dropdown__value').innerHTML
    
    changeStringDropdown(dropdown)
    
  }
  
  // если клик по option-for-dropdown__minus
  if (target.classList.contains('option-for-dropdown__minus')) {
    
    if (target.parentElement.querySelector('.option-for-dropdown__value').innerHTML != 0) {
      
      --target.parentElement.querySelector('.option-for-dropdown__value').innerHTML
      
      changeStringDropdown(dropdown)
      
    }
  }  
}


// used in func handlerOptionDropdown
function changeStringDropdown(dropdown) {

  let optionsForDropdown = dropdown.querySelectorAll('.option-for-dropdown')

  dropdown.querySelector('.dropdown__btn-span').innerHTML = resultString()

  function resultString() {

    // если клик по dropdown с гостями
    if (dropdown.dataset.typeDrop == 'guests') {
      
      let strValue = ''
      let totalsOnlyGuests = 0   // сумма всех гостей за исключением младенцев
      
      const wordsGuest = ['гость','гостя','гостей','Сколько гостей']
      const wordsBaby = ['младенец','младенца','младенцов']
    
      // суммирует всех не младенцев
      optionsForDropdown.forEach(element => {

        let optionTitle = element.querySelector('.option-for-dropdown__title').innerText.toLowerCase() 
        let optionValue = element.querySelector('.option-for-dropdown__value').innerText                  

        if (optionTitle != 'младенцы') totalsOnlyGuests += +optionValue

      }); 
      
      // склоняет слово 'гость' в зависисмость от числа гостей и записывает значение в итоговую строку strValue
      strValue = formingTheEndOfALine(totalsOnlyGuests, wordsGuest)

      // дозаписывает в итоговую строку количество младенцев, если они есть
      optionsForDropdown.forEach(element => {

        let optionTitle = element.querySelector('.option-for-dropdown__title').innerText.toLowerCase() 
        let optionValue = element.querySelector('.option-for-dropdown__value').innerText                  
        
        if (optionTitle == 'младенцы' && optionValue != '0') {
          
          if (strValue != '') strValue += ', '
          
          strValue += optionValue // дозаписать значение даже если strValue == ''

          strValue = formingTheEndOfALine (strValue, wordsBaby)

        }
      }); 

      // общая функция. формирует строку с правильным окончанием
      function formingTheEndOfALine (str, arrWords) {
  
        str = String(str)

        let oneLastCharacter = str.substr(str.length-1, 1)
        let twoLastCharacter = str.substr(str.length-2, 2)
        
        if (oneLastCharacter == '1' && twoLastCharacter != '11') {

          return str + ' ' + arrWords[0] // 1 гость
          
        } else if ((oneLastCharacter == '2' && twoLastCharacter != '12') || 
        (oneLastCharacter == '3' && twoLastCharacter != '13') ||
        (oneLastCharacter == '4' && twoLastCharacter != '14') ) {
          
          return str + ' ' + arrWords[1] // 2 гостя
          
        } else if (str == '0') {

          return str = ''                // пустая строка

        } else {
          
          return str + ' ' + arrWords[2] // 5 гостей
          
        }
      }     
      
      if (strValue == '') strValue = 'Сколько гостей' //- вариант по-умолчанию, если нет значения
      
      return strValue
    }



    // если клик по dropdown с удобствами в номере
    else if (dropdown.dataset.typeDrop == 'room-amenities') {
    
      let strValue = ''

      // перебор опций dropdown с последующей записью в строку
      optionsForDropdown.forEach(element => {
        
        let optionValue = element.querySelector('.option-for-dropdown__value').innerText
        let optionTitle = element.querySelector('.option-for-dropdown__title').innerText.toLowerCase()

        function formingTheEndOfALineModify() {

          let oneLastCharacter = optionValue.substr(optionValue.length-1, 1)
          let twoLastCharacter = optionValue.substr(optionValue.length-2, 2)
          
          if (optionValue != '0') {
  
            if (strValue != '') strValue += ', '
  
            strValue += optionValue
  
          }
  
          if (oneLastCharacter == '1' && twoLastCharacter != '11') {
  
            if (optionTitle == 'кровати') { strValue += ' кровать' } 
            else if (optionTitle == 'спальни') { strValue += ' спальня' } 
            else if (optionTitle == 'ванные комнаты') { strValue += ' ванная комната' } 
  
          } else if ((oneLastCharacter == '2' && twoLastCharacter != '12') || 
                     (oneLastCharacter == '3' && twoLastCharacter != '13') ||
                     (oneLastCharacter == '4' && twoLastCharacter != '14') ) {
    
            strValue += ' ' + optionTitle
  
          } else if (optionValue != '0') {
            
            if (optionTitle == 'кровати') { strValue += ' кроватей' } 
            else if (optionTitle == 'спальни') { strValue += ' спален' } 
            else if (optionTitle == 'ванные комнаты') { strValue += ' ванных комнат' } 
  
          }
        }

        formingTheEndOfALineModify()

      });

      if (strValue == '') strValue = 'Ничего не выбрано'

      // функция обрезки строки
      function kitcut(text, limit) {
        text = text.trim()
        if( text.length <= limit) return text
      
        text = text.slice(0, limit).trim()
        
        if (text.substr(-1, 1) == ',') return text.replace(/.$/, '...')

        return text + '...'
      }

      return kitcut(strValue, 22)
    }
  }
}