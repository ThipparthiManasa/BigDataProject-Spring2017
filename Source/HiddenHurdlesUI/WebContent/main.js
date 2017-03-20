/**
 * 
 */

$(document).ready(function(){
    $("#level1").click(function(){
    	window.location.href = "Level1.html";
    });
});

$(document).ready(function(){
    $("#level2").click(function(){
    	window.location.href = "Level2.html";
    });
});

function findImageType(abc){
	 $('#txt_area').hide();
    var tmp_img = document.createElement("img");
    tmp_img.src = abc.src;
	var base64 = getBase64Image(tmp_img);
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/get_custom",
      data: base64,
      success: function (result) {
        $('#txt_area').text(result);
        $('#txt_area').show();
      }
    });
}

  // sorce: http://stackoverflow.com/a/22172860
  function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

 
