// constructor function for survey results objects
var SurveyResults = function(name, photo) {
  this.scores = [];
  this.name = name;
  this.photo = photo;
  this.addScores = function(scores) {
      scores.forEach(element => {
          this.scores.push(element);
      });
  }
};
var mySurveyResults = require("../data/friends");

// var mySurveyResults = [
//         {
//         "scores": [
//         "1",
//         "4",
//         "1",
//         "5",
//         "1",
//         "3",
//         "1",
//         "2",
//         "1",
//         "4"
//         ],
//         "name": "Barker Troublemaker",
//         "photo": "https://images.pexels.com/photos/2016550/pexels-photo-2016550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         },
//         {
//         "scores": [
//         "5",
//         "3",
//         "2",
//         "5",
//         "5",
//         "1",
//         "1",
//         "1",
//         "3",
//         "3"
//         ],
//         "name": "Quincy Peacemaker",
//         "photo": "https://images.pexels.com/photos/2035236/pexels-photo-2035236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         },
//         {
//         "scores": [
//         "2",
//         "1",
//         "3",
//         "3",
//         "4",
//         "1",
//         "3",
//         "1",
//         "1",
//         "5"
//         ],
//         "name": "Penelope Flowers",
//         "photo": "https://images.pexels.com/photos/1937394/pexels-photo-1937394.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         },
//         {
//         "scores": [
//         "4",
//         "1",
//         "5",
//         "1",
//         "1",
//         "3",
//         "3",
//         "3",
//         "3",
//         "3"
//         ],
//         "name": "Frenchy Maximizer",
//         "photo": "https://images.pexels.com/photos/2036650/pexels-photo-2036650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         },
//         {
//           "scores": [
//           "1",
//           "1",
//           "2",
//           "2",
//           "3",
//           "2",
//           "1",
//           "5",
//           "2",
//           "1"
//           ],
//           "name": "Johnson Millbucker",
//           "photo": "https://images.pexels.com/photos/2031702/pexels-photo-2031702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//           },
//           {
//             "scores": [
//             "5",
//             "1",
//             "5",
//             "2",
//             "5",
//             "1",
//             "1",
//             "2",
//             "5",
//             "5"
//             ],
//             "name": "Gina Hathaway",
//             "photo": "https://images.pexels.com/photos/2035215/pexels-photo-2035215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//             },
//             {
//               "scores": [
//               "5",
//               "5",
//               "1",
//               "1",
//               "5",
//               "3",
//               "1",
//               "1",
//               "5",
//               "5"
//               ],
//               "name": "Winston Canterberry",
//               "photo": "https://images.pexels.com/photos/2007192/pexels-photo-2007192.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//               }
//         ];

function getSum(total, num) {
  return total + num;
}
// Routes
// =============================================================
module.exports = function(app) {
  console.log('Getting all friends...');
  app.get("/api/friends", function(req, res) {

    // Finding a list of all possible friends
    
    res.json(mySurveyResults);
  });

  // Handle incoming survey results
  app.post("/api/friends", function(req, res) {
    console.log("Submit survey:");
    var currentSurvey = new SurveyResults(req.body.name, req.body.photo);
    currentSurvey.addScores(req.body.scores);

    // Add current user to the array of user objects
    mySurveyResults.push(currentSurvey);

    // console.log(mySurveyResults);
    // Calculate differences between current user and all other users
    var currentUserScores = [];
    var matchedUser = {
      minDifference: 1000,
      matchedIndex: -1
    }
    // convert current user survey question scores to numbers
    for (i=0;i<currentSurvey.scores.length;i++) {
      currentUserScores.push(Number(currentSurvey.scores[i]));
    }
    console.log(currentUserScores);
    console.log(mySurveyResults.length);
    for (i=0;i<mySurveyResults.length-1;i++) {
      var delta = [];
      for (j=0;j<mySurveyResults[i].scores.length;j++) {
        delta.push(Math.abs(currentUserScores[j] - Number(mySurveyResults[i].scores[j])));
      }
      console.log("Delta="+delta);
      // Sum up the differences
      var difference = delta.reduce(getSum);
      console.log("difference for " + mySurveyResults[i].name + "="+difference);

      if (difference < matchedUser.minDifference) {
        // Save the index and difference of the matched user up to this point
        matchedUser.matchedIndex = i;
        matchedUser.minDifference = difference;
      }
    }
    // Let's send back the match
    if (matchedUser.matchedIndex != -1) {
      console.log("Matched user=" + mySurveyResults[matchedUser.matchedIndex]);
      res.json(mySurveyResults[matchedUser.matchedIndex]);
    }
  });
};
