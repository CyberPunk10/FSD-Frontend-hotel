'use strict'

const getTemplate = (options) => {  
  // for text-field
  let className = "text-field"
  const width = options.width ? `${className}_width-${options.width}` : ''   //- "sm"
  const marginBottom = options.marginBottom ? ` text-field_margin-bottom-${options.marginBottom}` : ''   //- "5"
  className += ` ${width} ${marginBottom}`
  
  // for text-field__input
  const placeholder = options.placeholder ? `placeholder="${options.placeholder}"` : ''
  const autofocus = options.autofocus ? 'autofocus' : ''
  const value = options.value ? `value="${options.value}"` : ''
  const type = options.type ? `type="${options.type}"` : 'type="text"'
  const meta = `${type} ${value} ${autofocus} ${placeholder}`
  
  const icon = options.icon ? '<i class="text-field__icon material-icons">arrow_forward</i>' : ''

  return `
    <div ${className}>
      <input class="text-field__input" ${meta}>
      ${icon}
    </div>
  `
}

export class TextField {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.options = options

    this.#render()
  }

  #render() {
    this.$el.insertAdjacentHTML('beforeend', getTemplate(this.options))
  }

  destroy() {
    this.$el.innerHTML = ''
  }
}

// const textField = new TextField('#text-field-test', {
//   placeholder: 'Тестовый text-filed',
//   value: 'this text-field created only on JS'
// })