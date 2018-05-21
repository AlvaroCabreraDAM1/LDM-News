var loaded = 1;
var toggleOn = false;
var theme = 0;

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height() && toggleOn == true) {
        load();
    }
});

function load() {
    if (loaded < 3) {
        $("#loading").show();
        $.getJSON("https://rawgit.com/AlvaroCabreraDAM1/LDM-News/master/data/u" + loaded + ".json", function (jsonObject) {
            addrow(jsonObject);
            $("#loading").hide();
        });
        loaded++;
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
                    '<img src="' + item.imgMid + '" class="img-rounded newImg" alt="..." data-toggle="modal" data-target="#modalNew' + item.Id + '"/>' +
                    '<div class="modal fade" id="modalNew' + item.Id + '" role="dialog">' +
			'<div class="modal-dialog modal-lg">' +
				'<div class="modal-content">' +
                                    '<div class="modal-header">' +
					'<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                                        '<h4 class="modal-title">' + item.title + '</h4>' +
                                    '</div>' +
				'<div class="modal-body">' +
                                    '<p><img src="' + item.imgBid + '" class="img-rounded img-responsive center-block" alt=""/></p>' +
				'</div>' +
				'<div class="modal-footer">' +
                                    '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
				'</div>' +
                            '</div>' +
			'</div>' +
                    '</div>' +  
                '</div>' +
                '<div class="newDescription">' +
                    '<p class="newTitle"><b>' +
                        item.title +
                    '</b></p>' +
                    '<p align="justify">' +
                        item.description +
                    '</p>' +
                    '<a>' +
                        'Leer mas...' +
                    '</a>' +
                '</div>' +
            '</div>'
        );
    });
};

$(document).ready(function () {

    $("#toggleOn").tooltip();
    $("#toggleOff").tooltip();
    $("#toggleOn").hide();
    $("#loading").hide();

    $(".toggle").click(function () {
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

    $("#themeButton").click(function () {
        switch (theme) {

            case 0:
                theme = 1;
                break;

            case 1:
                theme = 0;
                break;

        }

    });

    $("#loadButton").click(function () {
        load();
    });

});