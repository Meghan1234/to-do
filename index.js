// console.log("hi");
var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", toDo)

function toDo() {
var toDo = $('.todo').val();
var day = $('.day').val();
var time = $('.time').val();


  cardContainer.append(`
  <p class="name-card">${toDo} </p> <button class= "delete-toDo" type= "checkbox" ></button>


$('.todo').val("");
$('.day').val("");
$('.time').val("");
}

var deleteTodo = $('.delete-toDo')
var deleteDay = $('.delete-day')
var deleteTime = $('.delete-time')

$('.card-container').on("click", ".delete-toDo", deleteToDo)
$('.card-container').on("click", ".delete-day", deleteToDo)
$('.card-container').on("click", ".delete-time", deleteToDo)

function deleteToDo() {
  event.target.parentNode.remove()
}

//<p class="name-card">${day} </p> <button class= "delete-day" type= "checkbox" ></button>
//<p class="name-card">${time} </p> <button class= "delete-time" type= "checkbox" ></button>`)
