let currentPage = 1
const form = document.querySelector(".event-header__form")
const eventList = document.querySelector(".event__list")
const button1 = document.querySelector(".event-pagination__event")
const button2 = document.querySelector(".event-pagination__button2")
const modal = document.querySelector(".event__modal")
const button = document.querySelector(".event-modal__button")
const modalBox = document.querySelector(".event-modal__box")

// 
// //
// //
// //
// 

eventList.addEventListener("click", (event) => {
  event.preventDefault()
  if (event.target.nodeName === "IMG") {
    getFetch().then((data) => {
      const eventGet = data._embedded.events.map((mapEvent) => {
        console.log(mapEvent.images[0])
        const modalHTML = `                      <img class="event-modal__pfp" src=${mapEvent.images[0].url} alt="event">
        <img class="event-modal__picture" src=${mapEvent.images[0].url}>
        <ul class="event-modal__listInfo">
        <li>
        <h3 class="event-modal__title">INFO</h3>
        <p class="event-modal__text">${mapEvent.info}</p>
        </li>
        <li>
        <h3 class="event-modal__title">WHEN</h3>
        <p class="event-modal__text">${mapEvent.dates.start.localDate}</p>
        </li>
        <li>
        <p class="event-modal__text">${mapEvent.dates.start.localTime}</p>
        <h3 class="event-modal__title">WHERE</h3>
        </li>
        <li>
        <p class="event-modal__text">${mapEvent.dates.timezone}</p>
        <h3 class="event-modal__title">WHO</h3>
        </li>
        <li>
        <p class="event-modal__text">${mapEvent.name}</p>
        <h3 class="event-modal__titleprices">PRICES</h3>
        </li>
        </ul>
        <ul class="event-modal__listPRICES">
        <li class="event-modal__itemPRICES">
        <svg class="event-modal__svgPRICES">
        <use href="./img/symbol-defs.svg/#icon-ticket/"></use>
      </svg>
      <p>${mapEvent.priceRanges[0].type} ${mapEvent.priceRanges[0].min} - ${mapEvent.priceRanges[0].max} ${mapEvent.priceRanges[0].currency} </p>
      <button type="button" class="event-modal__PRICES">BUY TICKETS</button>
        </li>
        <li class="event-modal__itemPRICES">
        <svg class="event-modal__svgPRICES">
        <use href="./img/symbol-defs.svg/#icon-ticket"></use>
      </svg>
      <p class="event-modal__textPRICES"> VIP${mapEvent.priceRanges[0].min} - ${mapEvent.priceRanges[0].max} ${mapEvent.priceRanges[0].currency}</p>
      <button class="event-modal__PRICES">BUY TICKETS</button>
        </li>
        </ul>`
        return modalHTML
      })
      modalBox.innerHTML = eventGet.join('')
    })
    const listIndex = Array.from(eventList.children).indexOf(event.target)
    eventList.addEventListener("click", (event) => {
      event.preventDefault()
      modal.classList.remove("hidden")
    })
  }
})

button.addEventListener("click", (event) => {
  modal.classList.add("hidden")
  console.log("close")
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
    // console.log(mapEvent)
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