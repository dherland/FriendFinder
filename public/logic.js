// console.log("this is loaded");
// $(".submit").on("click", function(event) {
//     event.preventDefault();

//     // Here we grab the form elements
//     var newFriend = {
//       friendName: $("#name").val().trim(),
//       friendImage: $("#image").val().trim(),
//       scoreArray:[ 
//         $("#Q1").val().trim(),
//       $("#Q2").val().trim(),
//       $("#Q3").val().trim(),
//       $("#Q4").val().trim(),
//       $("#Q5").val().trim(),
//       $("#Q6").val().trim(),
//       $("#Q7").val().trim(),
//       $("#Q8").val().trim(),
//       $("#Q9").val().trim(),
//       $("#Q10").val().trim(),
        
//     ]
//     };

//     console.log(newFriend);
    
//     $.post("/api/friends", newFriend,
//       function(friendsData) {
//           console.log(friendsData);
//           var sum = 0
//         for (var i = 0; i < friendsData.length; i++){
//             sum += parseInt(friendsData[i].scoreArray)
//         }
//                // Parse new friend inputs
//                var newFriend = {
//                 name: req.body.name,
//                 photo: req.body.photo,
//                 scores: []
//             };
//             var scoresArray = [];
//             for (var i = 0; i < req.body.scores.length; i++) {
//                 scoresArray.push(parseInt(req.body.scores[i]))
//             }
//             newFriend.scores = scoresArray;
    
    
//             // check the new friend entry
//             var scoreComparisionArray = [];
//             for (var i = 0; i < friendsData.length; i++) {
    
//                 // Check scores and sum diff
//                 var currentComparison = 0;
//                 for (var j = 0; j < newFriend.scores.length; j++) {
//                     currentComparison += Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
//                 }
    
//                 // Push to array
//                 scoreComparisionArray.push(currentComparison);
//             }
    
//             // find best match using the postion of friendsData array
//             var bestMatchPosition = 0; 
//             for (var i = 1; i < scoreComparisionArray.length; i++) {
    
//                 // round number
//                 if (scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]) {
//                     bestMatchPosition = i;
//                 }
    
//             }
    
//             // select most recent entry
//             var bestFriendMatch = friendsData[bestMatchPosition];
            
//             res.json(bestFriendMatch);
    
//             // Push the new friend to the friends data array for storage
//             friendsData.push(newFriend);
    
//         });

//         var average = sum / friendsData.length;

//         // Clear the form when submitting
//         $("#name").val("");
//         $("#image").val("");

//       });

    
//         function collectInputs(){
      
//           // Make new friend object
//           var newFriend = {
//             name: $('#formName').val().trim(),
//             photo: $('#formImage').val().trim(),
//             scores: []
//           };
      
//           // Loop through Questions to get scores
//           var scoresArray = [];
//           $('.chosen-select').each(function(){
//             scoresArray.push( parseInt( $(this).val() ) ); // Parse Input Value as integer
//           })
//            // This counters the async behavior of $.each()
//           .promise().done(function(){
            
//             // Push the array of scores to the new friend object
//             newFriend.scores = scoresArray;
      
//             // POST the newFriend to the friends.js file and get back the best match
//             var currentURL = window.location.origin;
//             $.post(currentURL + "/api/friends", newFriend, function(data){
      
//               // Add Best Match attributes to Modal
//               $('#matchName').text(data.name);
//               $('#matchImg').attr('src', data.photo);
      
//               // Show the modal with the best match 
//               $("#resultsModal").modal('toggle');
      
//             }); // end AJAX POST
      
//           });
      
//         }