$(document).ready(function(){
	('#megaanchor1').mouseover(function() {
		('#megamenu-container').fadeIn(1000).removeClass('hidden');
		('.megacontent1').appendTo('#megamenu-container').removeClass('hidden');
	});
})