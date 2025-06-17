let selectedDistance = [];
function selectDistance(distance, buttonSelected) {
  let indexDistance = selectedDistance.indexOf(distance);
  if (indexDistance === -1) {
    selectedDistance.push(distance);
    buttonSelected.classList.add("selected-btn")
  }
  else {
    selectedDistance.splice(indexDistance, 1)
    buttonSelected.classList.remove("selected-btn")

  }
}

function add() {

  let name = document.getElementById('name').value;
  let date = document.getElementById('date').value;
  let price = document.getElementById('price').value;
  let description = document.getElementById('description').value;
  let link = document.getElementById('link').value;


  let event =
  {
    name: name,
    date: date,
    distance: selectedDistance,
    description: description,
    price: price,
    link: link
  };

  let events = localStorage.getItem("events")

  if (events) {
    events = JSON.parse(events);
  } else {
    events = [];
  }

  events.push(event);
  localStorage.setItem("events", JSON.stringify(events));

  document.getElementById('name').value = '';
  document.getElementById('date').value = '';
  document.getElementById('price').value = '';
  document.getElementById('description').value = '';
  document.getElementById('link').value = '';
  selectedDistance = [];
  window.location.href = "index.html"


}

let activeDistanceFilter = null;

function handleDistanceFilterClick(distance, button) {
  let allButtons = document.querySelectorAll('.distance-filter-btn');

  if (activeDistanceFilter === distance) {
    activeDistanceFilter = null;
    button.classList.remove('selected-btn');
    render();
  } else {
    activeDistanceFilter = distance;
    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].classList.remove('selected-btn');
    }
    button.classList.add('selected-btn');
    let filtered = filterDistance(distance);
    render(filtered);
  }
}


function filterDistance(distance) {
  let allEvents = JSON.parse(localStorage.getItem("events")) || [];
  return allEvents.filter(function (event) {
    return event.distance.includes(distance);
  });
}



function render(eventsToRender) {
  let events = eventsToRender || JSON.parse(localStorage.getItem("events")) || [];
  let eventDiv = document.getElementById("eventblock");
  eventDiv.innerHTML = '';

  if (events.length > 0) {
    events.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });

    for (let i = 0; i < events.length; i++) {
      let event = events[i];

      let eventWrapper = document.createElement("div")
      eventWrapper.classList.add("event-row", "row",)
      let nameDateDistanceCol = document.createElement("div")
      nameDateDistanceCol.classList.add("col-md-4")
      let descriptionCol = document.createElement("div")
      descriptionCol.classList.add("col-md-4")
      let priceLinkCol = document.createElement("div")
      priceLinkCol.classList.add("col-md-4", "ms-auto", "text-end")

      let eventName = document.createElement("h3")
      eventName.classList.add("name-style")
      let eventDate = document.createElement("p")
      let eventDescription = document.createElement("p")
      let eventPrice = document.createElement("p")
      let eventLink = document.createElement("a")
      eventName.innerText = event.name
      eventDate.innerText = event.date
      eventDescription.innerText = event.description
      eventPrice.innerText = `${event.price} Euro`
      eventLink.innerText = "link for event>";
      eventLink.href = event.link;
      eventLink.classList.add("link-style")

      eventDiv.appendChild(eventWrapper)
      eventWrapper.appendChild(nameDateDistanceCol)
      eventWrapper.appendChild(descriptionCol)
      eventWrapper.appendChild(priceLinkCol)
      nameDateDistanceCol.appendChild(eventName)
      nameDateDistanceCol.appendChild(eventDate)
      descriptionCol.appendChild(eventDescription)
      priceLinkCol.appendChild(eventPrice)
      priceLinkCol.appendChild(eventLink)

      for (let i = 0; i < event.distance.length; i++) {
        let typeofDistance = event.distance[i]
        let eventDistance = document.createElement("button")
        eventDistance.innerText = typeofDistance
        if (typeofDistance == "5K") {
          typeofDistance = "5K"
          eventDistance.classList.add("five", "btn-css", "btn-space")
        }
        else if (typeofDistance == "10K") {
          typeofDistance = "10K"
          eventDistance.classList.add("ten", "btn-css", "btn-space")
        }
        else if (typeofDistance == "Half Marathon") {
          typeofDistance = "Half Marathon"
          eventDistance.classList.add("half", "btn-css", "btn-space")
        }
        else {
          typeofDistance = "Marathon"
          eventDistance.classList.add("marathon", "btn-css", "btn-space")
        }

        nameDateDistanceCol.appendChild(eventDistance)
      }

    }
  }
}

window.onload = function () {

  render();
};

