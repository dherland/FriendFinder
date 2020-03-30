$(".submit").on("click", function(event) {
    event.preventDefault();

    // Here we grab the form elements
    var newReservation = {
      customerName: $("#reserve-name").val().trim(),
      phoneNumber: $("#reserve-phone").val().trim(),
      scoreArray:[ 
        $("#Q1").val().trim(),
      $("#Q2").val().trim(),
      $("#Q3").val().trim(),
      $("#Q4").val().trim(),
      $("#Q5").val().trim(),
      $("#Q6").val().trim(),
      $("#Q7").val().trim(),
      $("#Q8").val().trim(),
      $("#Q9").val().trim(),
      $("#Q10").val().trim(),
        
    ]
    };

    console.log(newReservation);

    // This line is the magic. It"s very similar to the standard ajax function we used.
    // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // depending on if a tables is available or not.

    $.post("/api/tables", newReservation,
      function(friendsData) {
          console.log(friendsData);
          var sum = 0
        for (var i = 0; i < friendsData.scoreArray.length; i++){
            sum += parseInt(friendsData.scoreArray[i])
        }
        var average = sum / friendsData.scoreArray.length;

        // Clear the form when submitting
        $("#reserve-name").val("");
        $("#reserve-phone").val("");
        $("#reserve-email").val("");
        $("#reserve-unique-id").val("");

      });

  });
