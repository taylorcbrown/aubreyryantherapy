$(document).ready(function() {
	$("a[href^='mailto:']").each(function(){
		pageTracker._trackPageview('/mailto/email');
	});
});