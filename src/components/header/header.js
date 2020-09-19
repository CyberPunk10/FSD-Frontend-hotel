
const sectionsUiKit = document.querySelectorAll('.section-ui-kit')

window.addEventListener('hashchange', changePageHandler)

function changePageHandler() {
  const page = window.location.hash.slice(1)

  if (page === 'ui-kit') {
    sectionsUiKit.forEach(el => {
      el.classList.remove('display-none')
    })
  } else if (page === 'website') {
    sectionsUiKit.forEach(el => {
      el.classList.add('display-none')
    })
  }
}
