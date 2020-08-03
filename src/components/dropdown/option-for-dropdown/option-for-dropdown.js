'use strict'

export function handlerOptionDropdown(target, dropdown) {
  
  // если клик по option-for-dropdown__plus
  if (target.classList.contains("option-for-dropdown__plus")) {
    
    ++target.parentElement.querySelector(".option-for-dropdown__value").innerHTML
    
    changeStringDropdown(dropdown)
    
  }
  
  // если клик по option-for-dropdown__minus
  if (target.classList.contains("option-for-dropdown__minus")) {
    
    if (target.parentElement.querySelector(".option-for-dropdown__value").innerHTML != 0) {
      
      --target.parentElement.querySelector(".option-for-dropdown__value").innerHTML
      
      changeStringDropdown(dropdown)
      
    }
    
  }  
}



function changeStringDropdown(dropdown) {

  let optionsForDropdown = dropdown.querySelectorAll(".option-for-dropdown")


  // если клик по dropdown с гостями
  if (dropdown.dataset.typeDrop == "guests") {
    
    let valueSumOptionsDropdown = 0
  
    // собирает значения с опций dropdown и суммирует их в переменную valueSumOptionsDropdown
    optionsForDropdown.forEach(element => {
      valueSumOptionsDropdown += +element.querySelector(".option-for-dropdown__value").innerText
    });
    
    dropdown.querySelector(".dropdown__btn-span").innerHTML = creatingResultString()
    
    // формирует окончательную строку с правильным склонением исходя из значения переменной valueSumOptionsDropdown
    function creatingResultString() {
  
      let sumValues = String(valueSumOptionsDropdown)
  
      if (sumValues.substr(sumValues.length-1, 1) == "1" && sumValues.substr(sumValues.length-2, 2) != "11") {
  
        return sumValues + " гость"
        
      } else if ((sumValues.substr(sumValues.length-1, 1) == "2" && sumValues.substr(sumValues.length-2, 2) != "12") || 
                (sumValues.substr(sumValues.length-1, 1) == "3" && sumValues.substr(sumValues.length-2, 2) != "13") ||
                (sumValues.substr(sumValues.length-1, 1) == "4" && sumValues.substr(sumValues.length-2, 2) != "14") ) {
        
        return sumValues + " гостя"
  
      } else if (sumValues == "0") {
        
        return "Сколько гостей"
  
      } else {
        
        return sumValues + " гостей"
  
      }
    }  

  }


  // если клик по dropdown с удобствами в номере
  else if (dropdown.dataset.typeDrop == "room-amenities") {

    dropdown.querySelector(".dropdown__btn-span").innerHTML = creatingResultString()

    // собирает значения с опций dropdown и формирует строку
    function creatingResultString () {
   
      let strValue = ""

      // перебор опций dropdown с последующей записью в строку
      optionsForDropdown.forEach(element => {
        
        let optionValue = element.querySelector(".option-for-dropdown__value").innerText
        let optionTitle = element.querySelector(".option-for-dropdown__title").innerText.toLowerCase()

        if (optionValue != "0") {

          if (strValue != "") strValue += ", "

          strValue += optionValue

        }

        if (optionValue.substr(optionValue.length-1, 1) == "1" && optionValue.substr(optionValue.length-2, 2) != "11") {

          if (optionTitle == "кровати") { strValue += " кровать" } 
          else if (optionTitle == "спальни") { strValue += " спальня" } 
          else if (optionTitle == "ванные комнаты") { strValue += " ванная комната" } 

        } else if ((optionValue.substr(optionValue.length-1, 1) == "2" && optionValue.substr(optionValue.length-2, 2) != "12") || 
                     (optionValue.substr(optionValue.length-1, 1) == "3" && optionValue.substr(optionValue.length-2, 2) != "13") ||
                     (optionValue.substr(optionValue.length-1, 1) == "4" && optionValue.substr(optionValue.length-2, 2) != "14") ) {
  
          strValue += " " + optionTitle

        } else if (optionValue == "0") {
          
          //- ничего не делаем

        } else {
          
          if (optionTitle == "кровати") { strValue += " кроватей" } 
          else if (optionTitle == "спальни") { strValue += " спален" } 
          else if (optionTitle == "ванные комнаты") { strValue += " ванных комнат" } 

        }
       
      });

      if (strValue == "") strValue = "Ничего не выбрано"  

      return kitcut(strValue, 22)

      // функция обрезки строки
      function kitcut(text, limit) {
        text = text.trim()
        if( text.length <= limit) return text
      
        text = text.slice(0, limit).trim()
        
        if (text.substr(-1, 1) == ",") return text.replace(/.$/, "...")

        return text + "..."
      }
    }
  }

  
}