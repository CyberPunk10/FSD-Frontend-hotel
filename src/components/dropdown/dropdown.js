let dropdowns = document.querySelectorAll(".dropdown")
let dropdown__btns = document.querySelectorAll(".dropdown__btn")
// let dropdown__btnsIcon = document.querySelectorAll(".dropdown__btn-icon")
// let dropdowns = document.querySelectorAll(".dropdown__content")


// Навешиваем на все dropdowns функцию по клику
dropdowns.forEach(element => {
  element.addEventListener('click', handlerDropdown);
});

// // Навешиваем на все dropdowns функцию по клику
// dropdown__btns.forEach(element => {
//   element.addEventListener('click', toggleDropdown);
// });


function handlerDropdown() {

  // если клик по dropdown__btn или dropdown__btn-icon
  if (event.target.matches('.dropdown__btn') || event.target.matches('.dropdown__btn-icon')) {
    
    for (var i = 0; i < this.children.length; i++) {

      this.children[i].matches('.dropdown__btn')     ? this.children[i].classList.toggle("dropdown__btn_expanded") : false
      this.children[i].matches('.dropdown__content') ? this.children[i].classList.toggle("dropdown__content_show") : false
    
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

// /* Когда пользователь нажимает на кнопку,
// переключение между скрытием и отображением раскрывающегося содержимого */
// function toggleDropdown() {
//   // if (event.target.matches('.dropdown__btn')) {
//   //   event.target.nextElementSibling.classList.toggle("dropdown__content_show")
//   //   event.target.classList.toggle("dropdown__btn_expanded")
//   // }
//   // if (event.target.matches('.dropdown__btn-icon')) {
//   //   event.target.parentElement.nextElementSibling.classList.toggle("dropdown__content_show")
//   //   event.target.parentElement.classList.toggle("dropdown__btn_expanded")
//   // }
//   this.nextElementSibling.classList.toggle("dropdown__content_show")
//   this.classList.toggle("dropdown__btn_expanded")
//   this.childNodes[1].classList.toggle("dropdown__btn-icon-rotate")
  
//   let lastFocusElement = () => {

//     if (this === document.activeElement) {
//       console.log(this.parentElement)

//       for (let i = 0; i < dropdown__btns.length; i++) {
        
//           dropdown__btns[i].parentElement.classList.remove("dropdown_active")
        
//       }
      
//       this.parentElement.classList.add("dropdown_active")

//     }
    
//   }

//   lastFocusElement()

// }


document.addEventListener('click', function (e) {

  const target = e.target
  let clickOnDropdown = false
  // Закрываем выпадающее меню, если пользователь щелкает за его пределами
  dropdowns.forEach(elem => {
    if (elem.contains(target)) {
      console.log("WARNING! Yes, contains", elem.contains(target))
      clickOnDropdown = true
    } else {
      console.log("NO, contains", elem.contains(target))
    }
  });
  console.log(clickOnDropdown)
  if (!clickOnDropdown) {
    clearActiveDropdown()
    console.log("clear")
  }
  clickOnDropdown = false

//   // Закрываем выпадающее меню, если пользователь щелкает за его пределами
//   if (!event.target.matches('.dropdown')) {    // Метод matches позволяет проверить, удовлетворяет ли элемент указанному CSS селектору
// console.log('yf ytv')
//     clearActiveDropdown()
// //     for (let i = 0; i < dropdown__btns.length; i++) {

// //       // если атрибут 'show-always' НЕ содeржит 'true', то dropdown сворачиваем. иначе оставляем несвернутым
// //       if (!dropdown__btns[i].dataset.showAlways) {

// //         if (dropdown__btns[i].classList.contains('dropdown__btn_expanded')) {   // Метод contains позволяет проверить, содержит ли один элемент внутри себя другой. 
// //           dropdown__btns[i].classList.remove('dropdown__btn_expanded');
// //         }

// //         if (dropdowns[i].classList.contains('dropdown__content_show')) {
// //           dropdowns[i].classList.remove('dropdown__content_show');
// //         }

// //       }

// //       // убираем тень при потере фокуса с dropdown
// //       dropdown__btns[i].parentElement.classList.remove("dropdown_active")

// //     }

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