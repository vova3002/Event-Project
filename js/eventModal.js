const modal = document.querySelector(".hidden")
const button = document.querySelector(".event-modal__button")
const list = document.querySelector(".event__list")
list.addEventListener("click", (event) => {
  event.preventDefault()
  modal.classList.remove("hidden")
})
button.addEventListener("click", (event) => {
  event.preventDefault()
  modal.classList.add("hidden")
})
