document.querySelector('.menu-open').addEventListener('click', function () {
  document.querySelector('.sidebar-close').style.display = 'flex '
  document.querySelector('.sidebar').style.display = 'none'
})

document.querySelector('.menu-close').addEventListener('click', function () {
  document.querySelector('.sidebar-close').style.display = 'none'
  document.querySelector('.sidebar').style.display = 'block'
})
