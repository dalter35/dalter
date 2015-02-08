function resizeContainer() {
	var coverSizer = $(window).height() * .80;
	$("div.coverPhoto").css("min-height", coverSizer);
	$("div.whiteOut").css("min-height", coverSizer);

}

$(document).ready(function(){

	resizeContainer();

	$(window).resize(function() {
		resizeContainer();

	});

	

});