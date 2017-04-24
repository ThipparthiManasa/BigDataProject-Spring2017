/**
 * Created by Manasa
 */
$(document).ready(function(){
	$("#hintlocationDiv").hide();
});
var count=0;
function findImageType(abc){
	 $('#txt_area').hide();
	 var imageUrl = abc.src.split("/")[abc.src.split("/").length-2]+"/"+abc.src.split("/")[abc.src.split("/").length-1];
	 $.ajax({
		 url : 'ClarifaiExample',
		data : {"action":imageUrl},
		type : 'GET',
		success : function(data) {
			count = count + 20;
	    	var scoreresult ="Score : "+count;
	    	$('#score').text(scoreresult);
	    	var output = JSON.parse(data)[0];
	    	for(var result in output){
	        if(result == "watermelon"){
	        	$("#img1").css("border","2px solid #4195fc");
	        	$("#img1").css("-webkit-border-radius","4px");
	        	$("#img1").css("-moz-border-radius","4px");
	        	$("#img1").css("border-radius","4px");
	        	$("#img1").css("-webkit-box-shadow","0px 0px 4px #4195fc");
	        	$("#img1").css("-moz-box-shadow","0px 0px 4px #4195fc");
	        	$("#img1").css("box-shadow","0px 0px 4px #4195fc");
	        	$("#button1").css("background","#b4ddb4");
	        	$("#button1").css("background","-moz-linear-gradient(top, #b4ddb4 0%, #83c783 17%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%)");
	        	$("#button1").css("background","-webkit-linear-gradient(top, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        	$("#button1").css("background","linear-gradient(to bottom, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        }	
	        else if(result == "cherry"){
	        	$("#img2").css("border","2px solid #4195fc");
	        	$("#img2").css("-webkit-border-radius","4px");
	        	$("#img2").css("-moz-border-radius","4px");
	        	$("#img2").css("border-radius","4px");
	        	$("#img2").css("-webkit-box-shadow","0px 0px 4px #4195fc");
	        	$("#img2").css("-moz-box-shadow","0px 0px 4px #4195fc");
	        	$("#img2").css("box-shadow","0px 0px 4px #4195fc");
	        	$("#button2").css("background","#b4ddb4");
	        	$("#button2").css("background","-moz-linear-gradient(top, #b4ddb4 0%, #83c783 17%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%)");
	        	$("#button2").css("background","-webkit-linear-gradient(top, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        	$("#button2").css("background","linear-gradient(to bottom, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        }
	        else if(result == "grape"){
	        	$("#img3").css("border","2px solid #4195fc");
	        	$("#img3").css("-webkit-border-radius","4px");
	        	$("#img3").css("-moz-border-radius","4px");
	        	$("#img3").css("border-radius","4px");
	        	$("#img3").css("-webkit-box-shadow","0px 0px 4px #4195fc");
	        	$("#img3").css("-moz-box-shadow","0px 0px 4px #4195fc");
	        	$("#img3").css("box-shadow","0px 0px 4px #4195fc");
	        	$("#button3").css("background","#b4ddb4");
	        	$("#button3").css("background","-moz-linear-gradient(top, #b4ddb4 0%, #83c783 17%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%)");
	        	$("#button3").css("background","-webkit-linear-gradient(top, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        	$("#button3").css("background","linear-gradient(to bottom, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        }
	        else if(result == "mango"){
	        	$("#img4").css("border","2px solid #4195fc");
	        	$("#img4").css("-webkit-border-radius","4px");
	        	$("#img4").css("-moz-border-radius","4px");
	        	$("#img4").css("border-radius","4px");
	        	$("#img4").css("-webkit-box-shadow","0px 0px 4px #4195fc");
	        	$("#img4").css("-moz-box-shadow","0px 0px 4px #4195fc");
	        	$("#img4").css("box-shadow","0px 0px 4px #4195fc");
	        	$("#button4").css("background","#b4ddb4");
	        	$("#button4").css("background","-moz-linear-gradient(top, #b4ddb4 0%, #83c783 17%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%)");
	        	$("#button4").css("background","-webkit-linear-gradient(top, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        	$("#button4").css("background","linear-gradient(to bottom, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        }
	        else if(result == "orange"){
	        	$("#img5").css("border","2px solid #4195fc");
	        	$("#img5").css("-webkit-border-radius","4px");
	        	$("#img5").css("-moz-border-radius","4px");
	        	$("#img5").css("border-radius","4px");
	        	$("#img5").css("-webkit-box-shadow","0px 0px 4px #4195fc");
	        	$("#img5").css("-moz-box-shadow","0px 0px 4px #4195fc");
	        	$("#img5").css("box-shadow","0px 0px 4px #4195fc");
	        	$("#button5").css("background","#b4ddb4");
	        	$("#button5").css("background","-moz-linear-gradient(top, #b4ddb4 0%, #83c783 17%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%)");
	        	$("#button5").css("background","-webkit-linear-gradient(top, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        	$("#button5").css("background","linear-gradient(to bottom, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        }
	        else if(result == "papaya"){
	        	$("#img6").css("border","2px solid #4195fc");
	        	$("#img6").css("-webkit-border-radius","4px");
	        	$("#img6").css("-moz-border-radius","4px");
	        	$("#img6").css("border-radius","4px");
	        	$("#img6").css("-webkit-box-shadow","0px 0px 4px #4195fc");
	        	$("#img6").css("-moz-box-shadow","0px 0px 4px #4195fc");
	        	$("#img6").css("box-shadow","0px 0px 4px #4195fc");
	        	$("#button6").css("background","#b4ddb4");
	        	$("#button6").css("background","-moz-linear-gradient(top, #b4ddb4 0%, #83c783 17%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%)");
	        	$("#button6").css("background","-webkit-linear-gradient(top, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        	$("#button6").css("background","linear-gradient(to bottom, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        }
	        else if(result == "pineapple"){
	        	$("#img7").css("border","2px solid #4195fc");
	        	$("#img7").css("-webkit-border-radius","4px");
	        	$("#img7").css("-moz-border-radius","4px");
	        	$("#img7").css("border-radius","4px");
	        	$("#img7").css("-webkit-box-shadow","0px 0px 4px #4195fc");
	        	$("#img7").css("-moz-box-shadow","0px 0px 4px #4195fc");
	        	$("#img7").css("box-shadow","0px 0px 4px #4195fc");
	        	$("#button7").css("background","#b4ddb4");
	        	$("#button7").css("background","-moz-linear-gradient(top, #b4ddb4 0%, #83c783 17%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%)");
	        	$("#button7").css("background","-webkit-linear-gradient(top, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        	$("#button7").css("background","linear-gradient(to bottom, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        }
	        else if(result == "strawberry"){
	        	$("#img8").css("border","2px solid #4195fc");
	        	$("#img8").css("-webkit-border-radius","4px");
	        	$("#img8").css("-moz-border-radius","4px");
	        	$("#img8").css("border-radius","4px");
	        	$("#img8").css("-webkit-box-shadow","0px 0px 4px #4195fc");
	        	$("#img8").css("-moz-box-shadow","0px 0px 4px #4195fc");
	        	$("#img8").css("box-shadow","0px 0px 4px #4195fc");
	        	$("#button8").css("background","#b4ddb4");
	        	$("#button8").css("background","-moz-linear-gradient(top, #b4ddb4 0%, #83c783 17%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%)");
	        	$("#button8").css("background","-webkit-linear-gradient(top, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        	$("#button8").css("background","linear-gradient(to bottom, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)");
	        }
	        }
		},
	});
}

// Generating Hints
 
$(document).ready(function(){
	$("#hints").click(function(){
		$("#img8").css("border","2px solid #4195fc");
	});
});