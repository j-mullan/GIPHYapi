/*
  GIPHYapi.js
*/  
//--------------
//
//
//
// API KEY = 8JPhHa7bGTbUMlGGyaPw0RY8QotrYdaA
//

// Initial Array
var topics = ["westies","ants","frogs","fish","dragonflies","wasps","turtles"];

function displayTopicInfo() {
  var animal = $(this).attr("data-name");
  var queryUrl = "https://giphy.com/?q=&" + animal + "&api-key=8JPhHa7bGTbUMlGGyaPw0RY8QotrYdaA&limit=20&rating=g"
}

$.ajax({
  url: queryURL,
  method: "GET"
})

.then(function(response){
  var results = response.data;
  for (var i = 0; i < reults.length; i++){
    var gifDiv = $("<div class = 'item'>");
    // Only taking action if the photo has an appropriate rating
    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
      // Creating a div with the class "item"
      var gifDiv = $("<div class='item'>");

      // Storing the result item's rating
      var rating = results[i].rating;

      // Creating a paragraph tag with the result item's rating
      var p = $("<p>").text("Rating: " + rating);

      // Creating an image tag
      var personImage = $("<img>");

      // Giving the image tag an src attribute of a proprty pulled off the
      // result item
      personImage.attr("src", results[i].images.fixed_height.url);

      // Appending the paragraph and personImage we created to the "gifDiv" div we created
      gifDiv.append(p);
      gifDiv.append(personImage);

      // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
      $("#gifs-appear-here").prepend(gifDiv);
    }
  }
});


