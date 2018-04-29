function getCorrectScore(){
	/*
	Variables get inserted, calculates the necessary score,
	and updates
	*/
	var currentGrade = parseInt($('#current').val());
	var desiredGrade = parseInt($('#desired').val());
	var finalWorth = parseInt($('#finalWeight').val());

	if (currentGrade && desiredGrade && finalWorth){
		var result = calculate(currentGrade, desiredGrade, finalWorth);
		$('#result').html('You need at least ' + result.toFixed(2) + '% on the final.');
		//console.log(result);
	}else{
		$('#result').html('Input valid numbers.');
	}
}

function calculate(current, desired, finalWorth){
	/*
	Returns the necessary final grade to get the desired grade
	*/
	var currentGrade = ((100 - finalWorth)/100 * current);
	var necessaryGrade = (desired-currentGrade)/finalWorth * 100;
	//console.log("calculated: " + necessary);
	return necessaryGrade;
}

$(document).ready(function(){
	$("button").on("click", function(){
		//Removes button outline
		$(this).blur();
	});
	
	$('#submit').on("click", function(){
		//Results if user hits Sumbit 
		getCorrectScore();
	});
	
	$('#current').on('keyup', function(event){
		//When current is clicked on
		if (event.which == 13){
			getCorrectScore();
		}
	});
	$('#desired').on('keyup', function(event){
		//Calculates when enter is pressed in desired grade input box
		if (event.which == 13){
			getCorrectScore();
		}
	});
	$('#finalWeight').on('keyup', function(event){
		//Calculates when enter is pressed in final weight input box
		if (event.which == 13){
			getCorrectScore();
		}
	});
});