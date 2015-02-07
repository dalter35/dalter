function resizeContainer() {
	var contentSizer = $(window).height() * .5;
	var headerFooterSizer = $(window).height() * .25;
	$("div.header-footer").css("height", headerFooterSizer);
	$("div#content").css("height", contentSizer);
}

$(document).ready(function(){

	resizeContainer();

	$(window).resize(function() {
		resizeContainer();

	});

	

});