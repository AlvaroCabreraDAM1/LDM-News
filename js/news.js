var loaded = 1;
var toggleOn = false;
var theme = 0;
var manectricX = $(window).width();

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height() && toggleOn == true) {
        load();
    }
});

function load() {
    if (loaded < 3) {
		$("#loading").show();
        $.getJSON("https://rawgit.com/AlvaroCabreraDAM1/LDM-News/master/data/" + loaded + ".json", function (jsonObject) {
            addrow(jsonObject);
			$("#loading").hide();
        }); 
		loaded++;
		if (loaded > 2) {
			$("#loadButton").html("No hay más noticias.");
		}
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
				'<img src="' + item.imgMid + '" class="img-rounded newImg" id="' + item.imgId + '" data-toggle="modal" data-target="#newModal" alt="..."/>' +
			'</div>' +	
            '<div class="newDescription">' + 
				'<p class="newTitle"><b>' + 
					'<h2><a href="">' + 
						item.title +
					'</a></h2>' + 
				'</b></p>' +
				'<p align="justify">' + 
					item.description + 
				'</p>' + 
			'</div>' + 
		'</div>');
    })
};

function manectric() {
  $("#manectric").css("margin-left",  manectricX + "px");
  if (manectricX < -250) {
	  manectricX = $(window).width();
  } else {
	manectricX--; 
	}
};

$(document).ready(function(){
	
	$("#toggleOn").tooltip();
    $("#toggleOff").tooltip();
	$("#toggleOn").hide();
	$("#loading").hide();
	
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
			$("#loadButton").show();
		}
    });
	
	
	$("#loadButton").click(function() {load();});
		
	$("body").on("click", ".newImg", function(){
		var id = $(this).attr('id');
		$("#modalImg").attr("src","img/news/new" + id + "Big.png");
    });
	
	interval = setInterval(manectric, 10); 
	
});