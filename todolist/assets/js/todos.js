//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() { //listen to the lis once they are clicked from the ul
	$(this).toggleClass("completed")
})

//Clear All Todos
$('.clear').click(function(){
	$('li').fadeOut(450, function() {
		$(this).remove()
	})
})
// Click On X to delete Todo  //note: once the click event listener on the span is triggered,
 // the event listener is boobled up to parent listeners. so we pass an e(or event) argument to the anonymous function
 // and use it to stop the parent event listeners from triggering 
$("ul").on("click", "span", function(e) {  // listen to the span inside the ul once they are clicked
	$(this).parent().fadeOut(450, function() {
		$(this).remove() //jQuery gives us an easy way of removing an entire parent element using the .parent() method
	})  
	e.stopPropagation();
})

$("input").keypress(function(event) {
	if (event.which === 13) {
	// grapping value from input
		var inputText = $(this).val()
		$(this).val("")

		//create new li and add it to the ul (we use the .append() method which takes a string of elements and adds them to the parent element)
		$("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + inputText + "</li>")
	}
});
$(".fa-plus").click(function() {
	$("input").fadeToggle()
})