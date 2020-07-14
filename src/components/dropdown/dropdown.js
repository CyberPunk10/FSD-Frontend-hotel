let dropdown__btns = document.querySelectorAll(".dropdown__btn")
let dropdowns = document.querySelectorAll(".dropdown__content")


// Навешиваем на все dropdowns функцию по клику
dropdown__btns.forEach(element => {
  element.addEventListener('click', toggleDropdown);
});


/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function toggleDropdown() {
  event.target.nextElementSibling.classList.toggle("dropdown__content_show")
  event.target.classList.toggle("dropdown__btn_expanded")
}


window.onclick = function (event) {

  // Закрываем выпадающее меню, если пользователь щелкает за его пределами
  if (!event.target.matches('.dropdown__btn')) {    // Метод matches позволяет проверить, удовлетворяет ли элемент указанному CSS селектору

    for (let i = 0; i < dropdown__btns.length; i++) {

      // если атрибут 'show-always' НЕ содeржит 'true', то dropdown сворачиваем. иначе оставляем несвернутым
      if (!dropdown__btns[i].dataset.showAlways) {

        if (dropdown__btns[i].classList.contains('dropdown__btn_expanded')) {
          dropdown__btns[i].classList.remove('dropdown__btn_expanded');
        }

        if (dropdowns[i].classList.contains('dropdown__content_show')) {
          dropdowns[i].classList.remove('dropdown__content_show');
        }

      }
    }

  } else {    // Иначе обрабатываем клик по dropdown

    let drop_id = event.target.nextElementSibling.id  // id dropdown, по которому произошёл клик

    for (let i = 0; i < dropdown__btns.length; i++) {

      if (dropdowns[i].id != drop_id) {

        // если атрибут 'show-always' НЕ содeржит 'true', то dropdown сворачиваем. иначе оставляем несвернутым
        if (!dropdown__btns[i].dataset.showAlways) {

          if (dropdown__btns[i].classList.contains('dropdown__btn_expanded')) {
            dropdown__btns[i].classList.remove('dropdown__btn_expanded');
          }
          if (dropdowns[i].classList.contains('dropdown__content_show')) {
            dropdowns[i].classList.remove('dropdown__content_show');
          }

        }
      }
    }
  }
}