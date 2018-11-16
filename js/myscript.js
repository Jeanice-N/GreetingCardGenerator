
$(document).on("pagebeforeshow", "#jsonCard", function() {
	$.getJSON("cardJSON.json", function (data) {
		console.log(data);
		// Load Startup Data on Main page
		$("#cardType").html(data.startup.supType);
		$("#cardPic").html("<img src='images/" +
			data.startup.supPic + 
			"' class='mainImg'>");
		$("#ta").html(data.startup.supMsg);
		
		// Load up Options in changeType panel
		$("#cType").html("<option disabled selected></option>");
		for(x = 0; x < data.types.typeChoices.length; x++){
			$("#cType").append(
				"<option>" + data.types.typeChoices[x].txt + "</option>"
				);
		}

		// Load up Images in changePic panel
		$("#picList").html("");
		for(x = 0 ; x < data.pics.picChoices.length; x++){
			$("#picList").append(
				"<label>" + 
				"<input type='radio' name='imgList' value='" +
				data.pics.picChoices[x].pic + "'>" + 
				"<img src='images/" +
				data.pics.picChoices[x].pic + "' width='25%'>" +
				"</label>"
				);
		}

		$("input[type='radio']").checkboxradio();
		
	});
});

// function updateType()
function updateType(){
	$("#cardType").html($("#cType option:selected").text());

	//bold flipswitch
	if($("#flipBold").prop("checked")){
		$("#cardType").css("font-weight", "bold");
	}
	else{
		$("#cardType").css("font-weight", "normal");
	}

	//italic flipswitch
	if($("#flipItalic").prop("checked")){
		$("#cardType").css("font-style", "italic");
	}
	else{
		$("#cardType").css("font-style", "normal");
	}

	$("[data-role='panel']").panel("close"); //closes all panels 
	return false; //allows us to stay on client side and update page and not go to server
}

// function updatePic()
function updatePic(){
	//works for radio and checkbox
	$("input[name='imgList']:checked").each(function(){
		$("#cardPic").html("<img src='images/" +
			$(this).attr("value") + //have no .text; have to use .attr 
			"' class='mainImg'>");
	});

	$("[data-role='panel']").panel("close"); //closes all panels 
	return false;
}	

	
