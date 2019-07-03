// SIMPPLE TODO LIST 
var todos = []
var input = prompt("What would you like to do?")

while(input !== "quit") {
	if (input === "list") {
	   listTodos();
	} else if(input === "new") {
		addTodo();
	} else if(input === "edit") {
		editTodo();
	} else if(input === "delete") {
		deleteTodo();
	} else if(input === "clear") {
		deleteAllTodos();
	} 
	input = prompt("What would you like to do?")
}

console.log("OK!! You Quit the App!")

function listTodos(){
		console.log("***********")
		todos.forEach(function(todo, i){
			console.log(i + " : " + todo)
		})
		console.log("***********")
}
function addTodo() {
	var newTodo = prompt("Enter new Todo")
		todos.push(newTodo)
		console.log(newTodo + " Added to list")
}
 function deleteTodo() {
 	var index = prompt("Enter index to delete :")
		todos.splice(index, 1)
		console.log("item deleted!")
 }
 function deleteAllTodos(){
 	todos.forEach(function(todo, i) {
			todos.splice(i, todos.length)
		})
		console.log("List Cleaned")
 }
function editTodo() {
 	var edit = prompt("Enter Index to Edit")
 	edit = todos[edit]
 	var update = prompt("What will you want to replace item at " + edit + " with?")
 	todos.splice(edit, 1)
 	if (edit === "0") {
 		todos.unshift(update)
 	} else if(edit === todos.length - 1){
 	    todos.push(update)
   } else {
   		todos.push(update)
   }
   console.log("Item Updated")
 }
