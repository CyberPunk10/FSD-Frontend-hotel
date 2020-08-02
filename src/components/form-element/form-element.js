let formElemsCollapseExpand = document.querySelectorAll(".form-element_collapse-expand")

formElemsCollapseExpand.forEach(el => {
  el.querySelector(".form-element__title").addEventListener("click", collapseExpandFormElem)
})

function collapseExpandFormElem() {

  // Collapse/Expand content
  this.nextElementSibling.classList.toggle("form-element__content_hide")
    
  // rotate icon
  for (var j = 0; j < this.children.length; j++) {
    
    if (this.children[j].matches(".form-element__icon")) {
      
      this.children[j].classList.toggle("form-element__icon_rotate")
    
    }
  }
}
