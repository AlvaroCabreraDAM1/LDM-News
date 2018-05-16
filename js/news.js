var reloade = 1;
var toggleOn = false;
var theme = 0;

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height() && toggleOn == true) {
        load();
    }
});

function load() {
    if (loaded < 3) {
        $.getJSON("" + loaded + ".json", function (jsonObject) {
            addrow(jsonObject);
        }); loaded++;
    }
};

function addrow(json) {
    $.each(json, function (i, item) {
        $("#loadedNews").append(
		'<div class="row new">' +
            '<div class="newData">' +
				'<div class="well well-sm">' + 
					item.date +
				'</div>' +
				'<img src="' + item.img + '" class="img-rounded" alt="..." />' +
			'</div>' +	
            '<div class="newDescription">' + 
				'<p class="newTitle"><b>' + 
					item.title + 
				'</b></p>' +
				'<p align="justify">' + 
					item.descripcion + 
				'</p>' + 
				'<p>' + 
					'Read more' + 
				'</p>' + 
			'</div>' + 
		'</div>');
    })
};

$(document).ready(function(){
	
	$("#toggleOn").tooltip();
    $("#toggleOff").tooltip();
	$("#toggleOn").hide();
	
    $(".toggle").click(function(){
		if (toggleOn == false) {
			$("#toggleOff").hide();
			$("#toggleOn").show();
			toggleOn = true;
			$("#loadButton").hide();
		} else {
			$("#toggleOn").hide();
			$("#toggleOff").show();
			toggleOn = false;
			$("#chargeButton").show();
		}
    });
	
	$("#themeButton").click(function() {
		switch (theme) {
			
			case 0:
			theme = 1;
			break;
			
			case 1:
			theme = 0;
			break;
			
		}
		
	});
	
	$("#loadButton").click(function() {load();});
	
});