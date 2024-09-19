const list = document.querySelector(".event__list")
const title = list.querySelector(".event__titles")
const form = document.querySelector(".event-header__form")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const search = event.target.elements.eventSearch.value
  if(search === title){
    console.log("Correct!")
  }else {
    console.log("Error...")
  }})