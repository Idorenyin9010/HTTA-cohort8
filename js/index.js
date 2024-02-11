
// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
/* ==============================================
  	  Nice Scroll 
  	=============================================== */ 
	
      $("html").niceScroll({
		scrollspeed: 100,
		mousescrollstep: 38,
		cursorwidth: 5,
		cursorborder: 0,
		cursorcolor: '#333',
		autohidemode: true,
		zindex: 999999999,
		horizrailenabled: false,
		cursorborderradius: 0,
	});
	