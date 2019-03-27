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

// Routes
// =============================================================
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
  
      // Finding a list of all possible friends
        res.json(results);
    });
  
    // Handle incoming survey results
    app.post("/api/friends", function(req, res) {
      console.log("Submit survey:");
      console.log(req.body);
      var currentSurvey = new SurveyResults(req.body.name, req.body.photo);
      currentSurvey.addScores(req.body.scores);
      mySurveyResults.push(currentSurvey);
    });
  };