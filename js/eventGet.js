let currentPage = 1
const form = document.querySelector(".event-header__form")
const eventList = document.querySelector(".event__list")
const button1 = document.querySelector(".event-pagination__event")
const button2 = document.querySelector(".event-pagination__button2")
const modal = document.querySelector(".hidden")
const button = document.querySelector(".event-modal__button")
const modalBox = document.querySelector(".event-modal__box")
button.addEventListener("click", (event) => {
  event.preventDefault()
  modal.classList.add("hidden")
})
eventList.addEventListener("click", (event) => {
  event.preventDefault()
  if (event.target.nodeName === "LI") {
    getFetch().then((data) => {
      const eventGet = data._embedded.events.map((mapEvent) => {
        console.log(mapEvent)
        const modalHTML = `                      <img src="./img/symbol-defs.svg" alt="event">
        <img src=${mapEvent} alt="ok">
        <h3>INFO</h3>
        <p>${mapEvent[listIndex]}</p>
        <h3>WHEN</h3>
        <p></p>
        <h3>WHERE</h3>
        <p></p>
        <h3>WHO</h3>
        <p></p>
        <h3>PRICES</h3>
        <svg>
          <use href="./img/"></use>
        </svg>
        <p></p>
        <button></button>
        <svg>
          <use href="./img/"></use>
        </svg>
        <p></p>
        <button></button>`
      })
    })
    const listIndex = Array.from(list.children).indexOf(event.target)
    console.log(modal.classList.toggle("hidden"))
    listIndex.addEventListener("click", (event) => {
      event.preventDefault()
      modal.classList.remove(".hidden")
    })
    button.addEventListener("click", (event) => {
      event.preventDefault()
      modal.classList.add("hidden")
    })
  }
})

button1.addEventListener("click", (event) => {
  currentPage === 2
  getFetch().then((data) => {
    const eventGet = data._embedded.events.map((mapEvent) => {
      console.log(mapEvent)
      const htmlEvent = `        <li name="eventLI" class="event__item">
      <img class="event__img" src="${mapEvent.images[0].url}">
      <h3 name="eventH3" class="event__titles">${mapEvent.name}</h3>
      <p class="event__data">${mapEvent.dates.start.localDate}</p>
      <p class="event__place">${mapEvent.dates.timezone}</p>
    </li>`
      return htmlEvent
    })
    eventList.innerHTML = eventGet.join('')
  })
})

button2.addEventListener("click", (event) => {
  getFetch().then((data) => {
    event.preventDefault()
    currentPage === 3
    const eventGet = data._embedded.events.map((mapEvent) => {
      console.log(mapEvent)
      const htmlEvent = `        <li class="event__item">
      <img class="event__img" src="${mapEvent.images[0].url}">
      <h3 name="eventH3" class="event__titles">${mapEvent.name}</h3>
      <p class="event__data">${mapEvent.dates.start.localDate}</p>
      <p class="event__place">${mapEvent.dates.timezone}</p>
    </li>`
      return htmlEvent
    })
    eventList.innerHTML = eventGet.join('')
  })
})

const getFetch = async () => {
  const fetchEvent = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=acn5aDAbwFCQvMEArN1InWY6JC6GY6lS&page=${currentPage}&?limit=18`).then((data) => data.json())
  return fetchEvent
}
getFetch().then((data) => {
  const eventGet = data._embedded.events.map((mapEvent) => {
    console.log(mapEvent)
    const htmlEvent = `        <li name="eventLI" class="event__item">
    <img class="event__img" src="${mapEvent.images[0].url}">
    <h3 name="eventH3" class="event__titles">${mapEvent.name}</h3>
    <p class="event__data">${mapEvent.dates.start.localDate}</p>
    <p class="event__place">${mapEvent.dates.timezone}</p>
  </li>`
    return htmlEvent
  })
  eventList.innerHTML = eventGet.join('');
})