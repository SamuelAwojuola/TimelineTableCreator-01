$(document).ready(function () {

	//TO CREATE A NAVIGATION FOR THE TIMELINE TABLE FROM VALUES OF THE <TR>s WITH CLASS OF 'tdsubhead' 

	var ArrayOfAllTDsubhead = document.getElementsByClassName("tdsubhead");
	var arrayTDsub = ArrayOfAllTDsubhead.length;

	for (var i = 0; i < arrayTDsub; i++) {

		var varTDsubheadValue = ArrayOfAllTDsubhead[i].getAttribute("value");
		var tdText = ArrayOfAllTDsubhead[i].cells[0].textContent;

		$('#tablemenuOL').append('<li><input type="checkbox" class="tablemenu" id=' + varTDsubheadValue + ' value=' + varTDsubheadValue + '><label for=' + varTDsubheadValue + '>' + tdText + '</label></li>');

	}

	//TO SHOW ONE ROW AT A TIME ON BUTTON CLICK
	var rowClassToFilter = varTDsubheadValue;
	var iRow = 0;
	var jRow = iRow;

	$("#nextrow").click(function () {
		if (iRow == arrayTDsub) {
			iRow = 0;
		}
		for (var i = 0; i < arrayTDsub; i++) {
			var varTDsubheadValue = ArrayOfAllTDsubhead[i].getAttribute("value");
			$("." + varTDsubheadValue).hide();
		}
		//SHOW NEXT TDSUBHEAD ROW
		var varTDsubheadValue = ArrayOfAllTDsubhead[iRow].getAttribute("value");
		$("." + varTDsubheadValue).first().show();

		jRow = iRow;
		iRow = iRow + 1;
	});

	$("#prevrow").click(function () {
		if (jRow == 0) {
			jRow = arrayTDsub;
		}

		iRow = jRow;
		jRow = jRow - 1;
		//		if (iRow == -1) {
		//			iRow = arrayTDsub;
		//		}
		for (var i = 0; i < arrayTDsub; i++) {
			var varTDsubheadValue = ArrayOfAllTDsubhead[i].getAttribute("value");
			$("." + varTDsubheadValue).hide();
		}
		//SHOW PREVIOUS TDSUBHEAD ROW
		var varTDsubheadValue = ArrayOfAllTDsubhead[jRow].getAttribute("value");
		$("." + varTDsubheadValue).first().show();

	})

	$(".resetBtn").click(function () {
		iRow = 0;
		jRow = iRow;
	});
});
