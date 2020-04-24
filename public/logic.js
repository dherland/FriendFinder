$(".submit").on("click", function(event) {
    event.preventDefault();

    // Here we grab the form elements
    var newReservation = {
      friendName: $("#name").val().trim(),
      friendImage: $("#image").val().trim(),
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
    
    $.post("/api/tables", newReservation,
      function(friendsData) {
          console.log(friendsData);
          var sum = 0
        for (var i = 0; i < friendsData.scoreArray.length; i++){
            sum += parseInt(friendsData.scoreArray[i])
        }
        var average = sum / friendsData.scoreArray.length;

        // Clear the form when submitting
        $("#name").val("");
        $("#image").val("");

      });

  });
