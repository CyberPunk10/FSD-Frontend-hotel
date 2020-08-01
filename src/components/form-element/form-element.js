let formElemsCollapseExpand = document.querySelectorAll(".form-element_collapse-expand")

console.log(formElemsCollapseExpand)

formElemsCollapseExpand.forEach(el => {
  el.addEventListener("click", collapseExpandFormElem)
})

function collapseExpandFormElem() {

  let formElement = this.children

  for (var i = 0; i < formElement.length; i++) {

    if (formElement[i].matches(".form-element__title")) {
      
      // Collapse/Expand content
      formElement[i].nextElementSibling.classList.toggle("form-element__content_hide")
      
      // rotate icon
      for (var j = 0; j < formElement[i].children.length; j++) {
        
        if (formElement[i].children[j].matches(".form-element__icon")) {
          
          formElement[i].children[j].classList.toggle("form-element__icon_rotate")
        
        }
      }

    }
  }
}
