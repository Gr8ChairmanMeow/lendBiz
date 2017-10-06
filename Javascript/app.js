var user = {};

var nextForm = "Loan Amount:<br>"+
	"<input type='text' name='loanAmt'>"+
	"<br>"+
	"Type of Business:<br>"+
	"<input type='text' name='typeBiz'>"+
	"<br>"+
	"Years in Business:<br>"+
	"<input type='text' name='yrsBiz'>"+
	"<br>"+
	"What do you need a loan for:<br>"+
	"<input type='text' name='loanFor'>"+
	"<br>"+
	"Amount of Cash Reserves:<br>"+
	"<input type='text' name='cashReserve'>"+
	"<br>"+
	"<div class='divButton' id='submitBtn'><strong>Submit</strong></div>"+
	"<br>***We do not guantee that a loan will be underwritten.";

var completeForm = "<div id='box'>Based on your selection you qualify for a business loan from the following underwriters:</div"

$(".mIcon .divButton").on("click", function(){
	var check = $("#divMenu").css("visibility");
	if(check === "visible"){
		$("#divMenu").css("visibility","hidden");
	}
    else{
    	$("#divMenu").css("visibility","visible");
    }
});

$("#nextBtn").on("click", function(){
	var check = true;
	var input = document.getElementById("myForm").elements;

	for (var i = 0; i < input.length; i++) {
		if(input[i].value === ""){
			check = false;
		}
		else{
			user[input[i].name] = input[i].value;
		}
	}

	if(check){
		document.getElementById("myForm").reset();
		$("#myForm").html(nextForm);
	}
	else{
		alert("Please complete form.");
	}
});

$(document).on("click","#submitBtn", function(){
	var check = true;
	var input = document.getElementById("myForm").elements;

	for (var i = 0; i < input.length; i++) {
		if(input[i].value === ""){
			check = false;
		}
		else{
			user[input[i].name] = input[i].value;
		}
	}

	if(check){
		document.getElementById("myForm").reset();
		console.log(user);
		$("#applyForm").html(completeForm);
	}
	else{
		alert("Please complete form.");
	}	
});

/*<div class="divButton" id="submitBtn"><strong>Submit</strong></div>*/
