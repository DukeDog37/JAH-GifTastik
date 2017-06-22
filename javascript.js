function fnNewTopicBtn(){
      //When use enters new topic and clicks insert
      var UserTopic = $("#userInput").val().trim();
 
      var TopicBtn = $("<button>");
        //clear out the existing gifs
        //$("#gifs-appear-here").empty();
        //$("#gifs-appear-here2").empty();
        fnClearGifs();
        TopicBtn.addClass("topic-button topic topic-button-color");

       
        TopicBtn.attr("data-topic", UserTopic);
        
        
        TopicBtn.text(UserTopic);

        console.log(TopicBtn);
        $("#buttons").append(TopicBtn);

    }

function fnClearGifs(){
	//clears out the gifs that are already in the div
	$("#gifs-appear-here").empty();
  $("#gifs-appear-here2").empty();
    }
