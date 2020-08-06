const getTemplate = () => {
  return `
    <div class="select__input">
      <span class="dropdown__btn-span">Title</span>
      <i class="material-icons">expand_more</i>
    </div>
    <div class="select__dropdown">
      <ul class="select__list">
        <li class="select__item">item 1</li>
        <li class="select__item">item 2</li>
        <li class="select__item">item 3</li>
      </ul>
    </div>
  `
}

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)

    // this.#render()

  }

  // #render() {
  //   this.$el.innerHTML = getTemplate()
  // }


  open() {
    this.$el.classList.add('open')
  }

  close() {
    this.$el.classList.remove('open')
  }




}


