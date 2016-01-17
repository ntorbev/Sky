$(document).ready(function(){
	var ReynholmIndustries;  //I prefer "the it crowd" 

	if (localStorage.getItem('ReynholmIndustries') !== null) {
		ReynholmIndustries = jQuery.parseJSON(localStorage.getItem('ReynholmIndustries'));
		
		$.each( ReynholmIndustries, function( key, value ) {
			key!==''?$('input[value='+key+']').val(ReynholmIndustries[key]):$('input[value=""').val(ReynholmIndustries[key])			
		})

	};

	$( "input" ).change(function() {
		ReynholmIndustries = jQuery.parseJSON(localStorage.getItem('ReynholmIndustries')) || {}
		ReynholmIndustries[this.defaultValue]=this.value
		localStorage.setItem('ReynholmIndustries', JSON.stringify(ReynholmIndustries));
	})

	// $('input[type="submit"]').click(function() {
		
	// 	$(this).attr("disabled", true);
	// 	$.ajax({
	// 		method: "POST",
	// 		url: "/userUpdate",
	// 		data: $('form').serialize()
	// 	}).done(function( msg ) {
	// 		debugger			
	// 	})
	// })	



});