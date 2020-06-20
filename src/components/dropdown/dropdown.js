let dropbtns = document.querySelectorAll(".dropbtn")
let dropdowns = document.querySelectorAll(".dropdown-content")


// Навешиваем на все dropdowns функцию по клику
dropbtns.forEach(element => {
  element.addEventListener('click', openDropdown);
});


/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function openDropdown() {
  event.target.nextElementSibling.classList.toggle("show")
  event.target.classList.toggle("dropbtn_expanded")
}


// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    for (let i = 0; i < dropbtns.length; i++) {
      if (dropbtns[i].classList.contains('dropbtn_expanded')) {
        dropbtns[i].classList.remove('dropbtn_expanded');
      }
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
  } else {

    let drop_id = event.target.nextElementSibling.id  // id dropdown, по которому произошёл клик

    for (let i = 0; i < dropbtns.length; i++) {
      
      if (dropdowns[i].id != drop_id) {
  
        if (dropbtns[i].classList.contains('dropbtn_expanded')) {
          dropbtns[i].classList.remove('dropbtn_expanded');
        }
        if (dropdowns[i].classList.contains('show')) {
          dropdowns[i].classList.remove('show');
        }
  
      }

    }
  }
}