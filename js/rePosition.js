$(function(){
	rePostion();
	$(window).resize(function(){
		rePostion();
	});

});
function rePostion(){
	var viewPort = getViewPort();
	var documentSize = getDocumentSize();
	var footer = $(".footer");
	if(viewPort.height >= documentSize.height){
		footer.css({position:'absolute',left:0,right:0,bottom:0});
	}
	else{
		footer.css({position:'static'});
	}
}

function getViewPort(){
	var viewPort = {};
	viewPort.width = $(window).width();
	viewPort.height = $(window).height();
	return viewPort;
}
function getDocumentSize(){
	var documentSize = {};
	documentSize.width = $(document).width();
	documentSize.height = $(document).height();
	return documentSize;
}