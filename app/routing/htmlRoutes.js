// Routes
// =============================================================
path = require('path');
module.exports = function(app) {
    app.get("/", function(req, res) {
        console.log('sending home page');
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/survey", function(req, res) {
        console.log('sending survey page');
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}