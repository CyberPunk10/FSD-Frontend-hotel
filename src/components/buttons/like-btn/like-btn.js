let likeBtns = document.querySelectorAll(".like-btn")

likeBtns.forEach(el => {
  el.addEventListener('click', function () {
    this.classList.toggle("like-btn_active")
    if (this.classList.contains("like-btn_active")) {
      this.querySelector(".like-btn__icon").innerText = "favorite"
      this.querySelector(".like-btn__title").innerText = ++this.querySelector(".like-btn__title").innerText
    } else {
      this.querySelector(".like-btn__icon").innerText = "favorite_border"
      this.querySelector(".like-btn__title").innerText = --this.querySelector(".like-btn__title").innerText
    }
  })
});