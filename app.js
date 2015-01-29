$(document).ready(function(){

	$("form").on("submit", function(e){
		e.preventDefault();
		// prevents window default


		//var user = event.target.username.value;

		var searchTitle = $("#movie-search").val();
		$.getJSON("http://www.omdbapi.com/?s=" + searchTitle, function (data) {
	      	console.log(data);

	      	// Adds the movie search results to the DOM using .append
	  		//     	function addIt() {
	  		//     		$(".movie-search-list").append("<li>" + searchTitle + "</li>");
	  		//     		console.log("append function");
			// } // close append function

			data.Title.forEach(addIt);

			// --- How do you call object, object? Or even all items? OR use selectors.

	      	// Removes the search results after submit click
	      	// $("ol").on("click", "submit", function() {
	      	// 	$(this).parent().remove();
	      	// });


	      	// var photo = $("<img>").attr("src", avatar_url);
	      	// $("#photo-holder").html(photo);
    	

    	}); // closes .getJSON

    	$("#username").val(""); // clears the input value after submit


	}); // closes the event listener for .on submit

}); // closes the document ready method



//query string: ?param=value&another_param=value  ?t=" + 