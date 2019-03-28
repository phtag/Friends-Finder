
    $("#load-survey-page").on("click", function(event) {
        event.preventDefault();
        $.get("/survey", function(data) {
          event.preventDefault();
          console.log(data);         
      });
    });
