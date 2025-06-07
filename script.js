function add(){

  let name = document.getElementById('name').value;
  let date = document.getElementById('date').value;
  let distance = document.getElementById('distance').value;
  let description = document.getElementById('description').value;
  let price = document.getElementById('price').value;
  let link = document.getElementById('link').value;

  let event =
    {
      name:name,
      date:date,
      distance:distance,
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

}
 function render(){
   let events = JSON.parse(localStorage.getItem ("events"))
   let eventDiv = document.getElementById("eventblock");
   eventDiv.innerHTML = ''

   if (events){
    for (let i = 0; i < events.length; i++){
      let event = events[i]; 
      let eventName = document.createElement("h3")
      let eventDate = document.createElement ("div")
      eventName.innerText = event.name
      eventDate.innerText = event.date
      eventDiv.appendChild(eventName)
      eventDiv.appendChild(eventDate)

    
    }
   }
 }

 window.onload = function() {
  render();
};

