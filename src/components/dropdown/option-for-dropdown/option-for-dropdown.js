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
  
  let valueSumOptionsDropdown = 0

  checkoutOptionsDropdown(dropdown)

  dropdown.querySelector(".dropdown__btn-span").innerHTML = creatingResultString()
  
  
  // формирует окончательную строку с правильным склонением исходя из значения переменной valueSumOptionsDropdown
  function creatingResultString() {

    let strValue = String(valueSumOptionsDropdown)

    if (strValue.substr(strValue.length-1, 1) == "1" && strValue.substr(strValue.length-2, 2) != "11") {

      return strValue + " гость"
      
    } else if ((strValue.substr(strValue.length-1, 1) == "2" && strValue.substr(strValue.length-2, 2) != "12") || 
              (strValue.substr(strValue.length-1, 1) == "3" && strValue.substr(strValue.length-2, 2) != "13") ||
              (strValue.substr(strValue.length-1, 1) == "4" && strValue.substr(strValue.length-2, 2) != "14") ) {
      
      return strValue + " гостя"

    } else if (strValue == "0") {
      
      return "Сколько гостей"

    } else {
      
      return strValue + " гостей"

    }
  }
  
  // собирает значения с опций dropdown и суммирует их в переменную valueSumOptionsDropdown
  function checkoutOptionsDropdown (dropdown) {

    let optionsForDropdown = dropdown.querySelectorAll(".option-for-dropdown")

    optionsForDropdown.forEach(element => {
      valueSumOptionsDropdown += +element.querySelector(".option-for-dropdown__value").innerText
    });

  }
}