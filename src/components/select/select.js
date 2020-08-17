'use strict'

const getTemplate = (data = [], placeholder, selectedId) => {

  let title = placeholder ?? "Placeholder по умолчанию"
  const items = data.map(item => {

    let cls = ''

    if (item.id === selectedId) {
      cls = 'select__item_selected'
      title = item.value
    }

    return `
      <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
    `
  })

  return `
    <div class="select__backselect" data-type="backselect"></div>
    <div class="select__input" data-type="input">
      <span class="dropdown__btn-span" data-type="value">${title}</span>
      <i class="material-icons" data-type="input">expand_more</i>
    </div>
    <div class="select__dropdown">
      <ul class="select__list">
        ${items.join('')}
      </ul>
    </div>
  `
}

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.options = options
    this.selectedId = options.selectedId

    this.#render()
    this.#setup()
  }

  #render() {
    const { placeholder } = this.options
    const { data } = this.options
    this.$el.classList.add('select')
    this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this)
    this.$el.addEventListener('click', this.clickHandler)
    this.$value = this.$el.querySelector('[data-type="value"]')
  }

  clickHandler(event) {
    const { type } = event.target.dataset

    if (type === 'input' || type === 'value') {
      this.toggle()
    } else if (type === 'item') {
      const id = event.target.dataset.id
      this.select(id)
    } else if (type === 'backselect') {
      this.close()
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open')
  }

  get current() {
    // вернет объект из this.options.data с id item-a, который выбран по клику и сохранен в this.selectedId
    return this.options.data.find(item => item.id === this.selectedId)
  }

  select(id) {
    this.selectedId = id
    this.$value.textContent = this.current.value

    this.$el.querySelectorAll(`[data-type="item"]`).forEach(el => {
      el.classList.remove('select__item_selected')
    });

    this.$el.querySelector(`[data-id="${id}"]`).classList.add('select__item_selected')

    this.options.onSelect ? this.options.onSelect(this.current) : null

    this.close()

  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.$el.classList.add('open')
  }

  close() {
    this.$el.classList.remove('open')
  }

  destroy() {
    this.$el.removeEventListener('click', this.clickHandler)
    this.$el.innerHTML = ''
  }


}


