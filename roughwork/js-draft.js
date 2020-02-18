var function1 = function () {

	var r = $.Deferred();

	// Do your whiz bang jQuery stuff here
	$('#showall').click(function () {
		$('tr:not(:first-child)').each(function (i) {
			var elm = $(this);
			console.log(elm);
			setTimeout(function () {
				console.log("removing" + 1);
				elm.show(1000);
			}, i * 250);
		});
	});

	return r;

};

var function2 = function () {

	// Do your whiz bang jQuery stuff here
	$('#showall').hide();
	$('#showmain').show();

};

// Now call the functions one after the other using the done method
function1().done(function2());





var functionOne = function () {

	var r = $.Deferred();

	// Do your whiz bang jQuery stuff here
	$('#showmain').click(function () {
		$('tr:not(:first-child)').each(function (i) {
			var elm = $(this);
			console.log(elm);
			setTimeout(function () {
				console.log("removing" + 1);
				elm.hide(1000);
			}, i * 250);
		});
	});

	return r;

};

var functionTwo = function () {

	// Do your whiz bang jQuery stuff here
	$('#showmain').hide();
	$('#showall').show();
};

// Now call the functions one after the other using the done method
functionOne().done(functionTwo());



//TO SHOW/HIDE ALL TABLE-ROWS EXCEPT FOR THE FIRST
$(function () {
	$('#showall').click(function () {
		$('tr:not(:first-child)').each(function (i) {
			var elm = $(this);
			console.log(elm);
			setTimeout(function () {
				console.log("removing" + 1);
				elm.show(1000);
			}, i * 250);
		});
		$('tr:not(:first-child)').promise().done(function () {
			$('#showall').hide();
			$('#showmain').show();
		});
	});

	$('#showmain').click(function () {
		$('tr:not(:first-child)').each(function (i) {
			var elm = $(this);
			console.log(elm);
			setTimeout(function () {
				console.log("removing" + 1);
				elm.hide(1000);
			}, i * 250);
		});
		$('#showmain').hide();
		$('#showall').show();
	});
});




//TO HIDE/SHOW TARGET ON CHECKING/UN-CHECKING CHECKBOX
//$(function () {
//	$("#yahwehcheck").click(function () {
//		if ($(this).is(":checked")) {
//			$(".yahweh").show();
//			//			$("#AddPassport").hide();
//		} else {
//			$(".yahweh").hide();
//			//			$("#AddPassport").show();
//		}
//	});
//});

//$(document).ready(function () {
//	$('.tablemenu').click(function () {
//		var inputValue = $(this).attr("value");
//		$("." + inputValue).toggle();
//	});
//});




//TO HIGHLIGHT COLUMNS
$(document).ready(function () {
	$('#timelineTable').tableHover({
		//		rowClass: 'hoverrow ',
		//		colClass: 'hover',
		//		cellClass: 'hovercell ',
		//		headRows: true,
		//		footRows: true,
		//		headCols: true,
		//		footCols: true,
		//		clickClass: 'click',
		ignoreCols: [1]
	});
});




//TO AUTOMATICALLY CREATE THE TABLE NAVIGATION FROM THE VALUE OF <TR>s WITH TDSUBHEAD CLASS.
$(document).ready(function () {

	var TDsubhead = document.getElementsByClassName("tdsubhead");
	//	var numberoftdsubheads = TDsubhead.length;
	//	var notdsh = numberoftdsubheads;

	for (var i = 0; i < TDsubhead.length; i++) {
		var varTDsubheadValue = TDsubhead[i].getAttribute("value");
		var tdText = TDsubhead[i].cells[0].textContent;

		//		var tablemenuOL = document.getElementById('tablemenuOL');

		$('#tablemenuOL').append('<li><input type="checkbox" class="tablemenu" id=' + varTDsubheadValue + ' value=' + varTDsubheadValue + '><label for=' + varTDsubheadValue + '>' + tdText + '</label></li>');
	}

	//
	//	var varTDsubheadValue = $(".tdsubhead").attr("value");
	//	td.classList.contains("varTDsubheadValue");

	//	var varTDsubheadValue = "yahweh";
	//	$('#tablemenuOL').append('<li><input type="checkbox" class="tablemenu" id=' + varTDsubheadValue + ' value=' + varTDsubheadValue + '><label for=' + varTDsubheadValue + '>Yahweh</label></li>');
});






//TO SHOW ONE ROW AT A TIME ON BUTTON CLICK

//NEXT BUTTON SHOWS NEXT ROW
var nextRow = 0;
var soloTD = customIndex;
$(".nextBtn").click(function () {
	nextRow = nextRow + 1;
	var row2show = ".col-" + nextRow;

	if (nextRow < soloTD) {
		$("td").not("td:first-child").hide();
		$(row2show).show();

	} else if (nextRow == soloTD) {
		$("td").show();
		TableRebuild();
	}
});

//PREV BUTTON SHOWS PREVIOUS COLUMN
$(".prevBtn").click(function () {
	if (nextRow > 1) {
		var prevrow2show = ".col-" + --nextRow;
		$("td").not("td:first-child").hide();
		$(prevrow2show).show();
	}
	if (nextRow == 1) {
		$("td").show();
		TableRebuild();
	}
});
