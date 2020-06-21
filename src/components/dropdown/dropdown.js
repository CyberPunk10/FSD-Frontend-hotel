let dropdown__btns = document.querySelectorAll(".dropdown__btn")
let dropdowns = document.querySelectorAll(".dropdown__content")


// Навешиваем на все dropdowns функцию по клику
dropdown__btns.forEach(element => {
  element.addEventListener('click', openDropdown);
});


/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function openDropdown() {
  event.target.nextElementSibling.classList.toggle("show")
  event.target.classList.toggle("dropdown__btn_expanded")
}


// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
  if (!event.target.matches('.dropdown__btn')) {
    for (let i = 0; i < dropdown__btns.length; i++) {
      if (dropdown__btns[i].classList.contains('dropdown__btn_expanded')) {
        dropdown__btns[i].classList.remove('dropdown__btn_expanded');
      }
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
  } else {

    let drop_id = event.target.nextElementSibling.id  // id dropdown, по которому произошёл клик

    for (let i = 0; i < dropdown__btns.length; i++) {
      
      if (dropdowns[i].id != drop_id) {
  
        if (dropdown__btns[i].classList.contains('dropdown__btn_expanded')) {
          dropdown__btns[i].classList.remove('dropdown__btn_expanded');
        }
        if (dropdowns[i].classList.contains('show')) {
          dropdowns[i].classList.remove('show');
        }
  
      }

    }
  }
}