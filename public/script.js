window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  let element = document.querySelector('#padding')
  if(scroll > 100){
    element.classList.remove('p-3')
    element.classList.remove('ps-4')
  } else {
    element.classList.add('p-3')
    element.classList.add('ps-4')
  }
})