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
var mySurveyResults = [];

function getSum(total, num) {
  return total + num;
}
// Routes
// =============================================================
module.exports = function(app) {
    app.get("/api/friends", function(req, results) {
  
      // Finding a list of all possible friends
        res.json(results);
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
        console.log("difference="+difference);

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

 