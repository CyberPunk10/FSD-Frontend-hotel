let dropdowns = document.querySelectorAll(".dropdown")
let dropdown__btns = document.querySelectorAll(".dropdown__btn")

// переменная-флаг. Если true, то клик произошел по dropdown
let clickOnDropdown = false

// переменная-флаг. Если true, то ПРЕДЫДУЩИЙ клик произошел по dropdown
let previousClickOnDropdown = false


// Навешиваем на все dropdowns функцию сворачивания/разворачивания по клику
dropdowns.forEach(element => {
  element.addEventListener('click', handlerDropdown);
});


function handlerDropdown() {

  // если клик по dropdown__btn или dropdown__btn-icon
  if (event.target.matches('.dropdown__btn') || event.target.matches('.dropdown__btn-icon')) {
    
    // разворачиваем/сворачиваем список
    for (var i = 0; i < this.children.length; i++) {
      
      // показываем контент списка
      this.children[i].matches('.dropdown__content') ? this.children[i].classList.toggle("dropdown__content_show") : false

      if (this.children[i].matches('.dropdown__btn')) {

        // меняем закругление при разворачивании/сворачивании
        this.children[i].classList.toggle("dropdown__btn_expanded")

        // поворачиваем icon при разворачивании/сворачивании
        for (var j = 0; j < this.children[i].children.length; j++) {
          this.children[i].children[j].matches('.dropdown__btn-icon') ? this.children[i].children[j].classList.toggle("dropdown__btn-icon-rotate") : false
        }

      }
    }
  }

  clearActiveDropdown()

  this.classList.add("dropdown_active")

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
    
    for (let i = 0; i < dropdown__btns.length; i++) {
      console.log( dropdown__btns[i].dataset.showAlways )
      
      // если атрибут 'show-always' НЕ содeржит 'true', то dropdown сворачиваем. иначе оставляем несвернутым
      if (!dropdown__btns[i].dataset.showAlways) {
        
        if (dropdown__btns[i].classList.contains('dropdown__btn_expanded')) {   // Метод contains позволяет проверить, содержит ли один элемент внутри себя другой. 
          dropdown__btns[i].classList.remove('dropdown__btn_expanded');
        }
        
        if (dropdown__btns[i].nextElementSibling.classList.contains('dropdown__content_show')) {
          dropdown__btns[i].nextElementSibling.classList.remove('dropdown__content_show');
        }
        
      }
    }
  }
  
  // вовращаем значение по умолчанию
  clickOnDropdown = false



//   if (!event.target.matches('.dropdown')) {    // Метод matches позволяет проверить, удовлетворяет ли элемент указанному CSS селектору


//   } else {    // Иначе обрабатываем клик по dropdown

// //     // let drop_id = event.target.nextElementSibling.id  // id dropdown, по которому произошёл клик

// //     // for (let i = 0; i < dropdown__btns.length; i++) {

// //     //   if (dropdowns[i].id != drop_id) {

// //     //     // если атрибут 'show-always' НЕ содeржит 'true', то dropdown сворачиваем. иначе оставляем несвернутым
// //     //     if (!dropdown__btns[i].dataset.showAlways) {

// //     //       if (dropdown__btns[i].classList.contains('dropdown__btn_expanded')) {
// //     //         dropdown__btns[i].classList.remove('dropdown__btn_expanded');
// //     //       }
// //     //       if (dropdowns[i].classList.contains('dropdown__content_show')) {
// //     //         dropdowns[i].classList.remove('dropdown__content_show');
// //     //       }

// //     //     }
// //     //   }
// //     // }
//   }
})









// ТЕНЬ отображается не во всех dropdowns полностью по периметру, в некоторых тень только вокруг dropdown__btn