$(".mIcon .divButton").on("click", function(){
	var check = $("#divMenu").css("visibility");
	if(check === "visible"){
		$("#divMenu").css("visibility","hidden");
	}
    else{
    	$("#divMenu").css("visibility","visible");
    }
});