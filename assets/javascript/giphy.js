//Initial variables

var initialArray = ["Ladybug", "Bumblebee", "Dragonfly", "Butterfly", "Caterpillar", "Spider", "Beetle", "Grasshopper"];
var userEntry;


//Makes initial buttons from array

function makeButtons() {
  for (var i = 0; i <initialArray.length; i++) {
    $("#buttons-live-here").append($("<button>" + initialArray).text(initialArray[i]));
  }
};

makeButtons();

//User search creates a new button

$("#search-button").click(function(e){
  e.preventDefault();
  userEntry = $("#user-search").val();
  $("#buttons-live-here").append($("<button>").text(userEntry));
  $("#user-search").val(" ");
});


//GIPHY API fun

$("button").on("click", function() {
      var bug = $(this).attr("data-bug");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        bug + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })

        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var bugImage = $("<img>" + "data-still");
           
            bugImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.prepend(p);
            gifDiv.prepend(bugImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });

//Animate GIFS (hopefully)

$("#bug-pictures").on("click", ".gif", function(){

})
