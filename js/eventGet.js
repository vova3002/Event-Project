let currentPage = 1
const form = document.querySelector(".event-header__form")
const eventList = document.querySelector(".event__list")
const button = document.querySelector(".event-pagination__event")
button.addEventListener("click", (event) => {
  currentPage += 1
  getFetch().then((data) => {
    const eventGet = data._embedded.events.map((mapEvent) => {
      console.log(mapEvent)
      const htmlEvent = `        <li class="event__item">
      <img class="event__img" src="${mapEvent.images[3].url}">
      <h3 name="eventH3" class="event__titles">${mapEvent.name}</h3>
      <p class="event__data">${mapEvent.dates.start.localDate}</p>
      <p class="event__place">${mapEvent.promoter.description}</p>
    </li>`
    return htmlEvent
    })
    eventList.innerHTML = eventGet
  })
})
const getFetch = async () => {
  const fetchEvent = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=acn5aDAbwFCQvMEArN1InWY6JC6GY6lS&page=${currentPage}`).then((data) => data.json())
  return fetchEvent
}
getFetch().then((data) => {
  const eventGet = data._embedded.events.map((mapEvent) => {
    // console.log(mapEvent)
    const htmlEvent = `        <li class="event__item">
    <img class="event__img" src="${mapEvent.images[0].url}">
    <h3 name="eventH3" class="event__titles">${mapEvent.name}</h3>
    <p class="event__data">${mapEvent.dates.start.localDate}</p>
    <p class="event__place">${mapEvent.dates.timezone}</p>
  </li>`
  return htmlEvent
  })
  eventList.innerHTML = eventGet
})