function resizeContainer() {


	var coverSizer = $(window).height();
	$("div.coverPhoto").css("height", coverSizer);
	var innerCoverSizer = coverSizer/2;
	var innerContentHeight = $("div.content").height()/2;
	$("div.whiteOut").css("top", innerCoverSizer - innerContentHeight);
	var contentSizer = $(window).height()/2;
	$("div.yellow").css("height", contentSizer);
	$("div.blue").css("height", contentSizer);

}

$(document).ready(function(){
	
	resizeContainer();

	$(window).resize(function() {
		resizeContainer();

	});

	

});