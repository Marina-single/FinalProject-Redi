let selectedDistance = [];

function selectDistance(distance, buttonSelected){
  if (!selectedDistance.includes(distance)) {
    selectedDistance.push(distance);
    buttonSelected.classList.add("selected-btn")
  } 
  else {
    selectedDistance = selectedDistance.filter(d => d !== distance);
    buttonSelected.classList.remove("selected-btn")

  }
}

function add(){

  let name = document.getElementById('name').value;
  let date = document.getElementById('date').value;
  let price = document.getElementById('price').value;
  let description = document.getElementById('description').value;
  let link = document.getElementById('link').value;
 

  let event =
    {
      name:name,
      date:date,
      distance:selectedDistance,
      description:description,
      price:price,
      link:link
    };

let events = localStorage.getItem("events")

if (events) {
  events = JSON.parse(events);  
} else {
  events = [];
}

  events.push (event);
  localStorage.setItem("events", JSON.stringify(events));

  document.getElementById('name').value = '';
  document.getElementById('date').value = '';
  document.getElementById('price').value = '';
  document.getElementById('description').value = '';
  document.getElementById('link').value = '';
  selectedDistance = [];


}

 function render(){
   let events = JSON.parse(localStorage.getItem ("events"))
   let eventDiv = document.getElementById("eventblock");
   eventDiv.innerHTML = ''

   if (events){
    for (let i = 0; i < events.length; i++){
      let event = events[i]; 
      let eventWrapper = document.createElement("div")
      eventWrapper.classList.add("event-row", "row")
      let nameDateDistanceCol = document.createElement("div")
      nameDateDistanceCol.classList.add("col-md-4", "left-col")
      let descriptionCol = document.createElement("div")
      descriptionCol.classList.add("col-md-4", "left-col")
      let priceLinkCol = document.createElement("div")
      priceLinkCol.classList.add("col-md-4", "left-col")

      let eventName = document.createElement("h3")
      let eventDate = document.createElement ("p")
      let eventDistance = document.createElement("button")

      let eventDescription = document.createElement("p")
      let eventPrice = document.createElement("p")
      let eventLink = document.createElement ("a")

      eventName.innerText = event.name
      eventDate.innerText = event.date
      eventDistance.innerText = event.distance;
      eventDescription.innerText = event.description
      eventPrice.innerText = event.price
      eventLink.innerText = "Buy";
      eventLink.href = event.link;
      eventLink.classList.add("btn", "btn-primary")

  
      eventDiv.appendChild(eventWrapper)
      eventWrapper.appendChild(nameDateDistanceCol)
      eventWrapper.appendChild(descriptionCol)
      eventWrapper.appendChild(priceLinkCol)

      nameDateDistanceCol.appendChild(eventName)
      nameDateDistanceCol.appendChild(eventDate)
      nameDateDistanceCol.appendChild(eventDistance)
      descriptionCol.appendChild(eventDescription)

      priceLinkCol.appendChild (eventPrice)
      priceLinkCol.appendChild(eventLink)

    
    }
   }
 }

 window.onload = function() {
  render();
};

