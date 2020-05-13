console.log("this is loaded");
$(".submit").on("click", function(event) {
    event.preventDefault();

    // Here we grab the form elements
    var newFriend = {
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

    console.log(newFriend);
    
<<<<<<< HEAD
    $.post("/api/friends", newFriend,
=======
    $.post("/api/friends", newReservation,
>>>>>>> 2cf2fe7e0848bf9888c85565c4956065f2f03f11
      function(friendsData) {
          console.log(friendsData);
          var sum = 0
        for (var i = 0; i < friendsData.length; i++){
            sum += parseInt(friendsData[i].scoreArray)
        }
        var average = sum / friendsData.length;

        // Clear the form when submitting
        $("#name").val("");
        $("#image").val("");

      });

    
        function collectInputs(){
      
          // Make new friend object
          var newFriend = {
            name: $('#formName').val().trim(),
            photo: $('#formImage').val().trim(),
            scores: []
          };
      
          // Loop through Questions to get scores
          var scoresArray = [];
          $('.chosen-select').each(function(){
            scoresArray.push( parseInt( $(this).val() ) ); // Parse Input Value as integer
          })
           // This counters the async behavior of $.each()
          .promise().done(function(){
            
            // Push the array of scores to the new friend object
            newFriend.scores = scoresArray;
      
            // POST the newFriend to the friends.js file and get back the best match
            var currentURL = window.location.origin;
            $.post(currentURL + "/api/friends", newFriend, function(data){
      
              // Add Best Match attributes to Modal
              $('#matchName').text(data.name);
              $('#matchImg').attr('src', data.photo);
      
              // Show the modal with the best match 
              $("#resultsModal").modal('toggle');
      
            }); // end AJAX POST
      
          });
      
        }
      



  });
