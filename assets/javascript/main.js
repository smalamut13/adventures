$(document).on('ready',function(){
	var navWrapperHeight = $('.nav-wrapper').outerHeight();
	console.log(navWrapperHeight);

	$('body').css('margin-top', navWrapperHeight);

	$('.nav-main a').on('click', function(e){
		e.preventDefault();
		var page = $(this).attr('href');
		// alert(page);
		$.scrollTo(page, {
			duration:800,
			offset: -navWrapperHeight
		});
	});

	$('a.js-arrow').on('click', function(e){
		e.preventDefault();
		var page = $(this).attr('href');
		// alert(page);
		$.scrollTo(page, {
			duration:800,
			offset: -navWrapperHeight
		});
	});

}); 