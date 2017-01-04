 //<![CDATA[
        $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(1050).fadeOut('slow'); // will fade out the white DIV that covers the website.
            
        })
    //]]>

///modal

//wow
new WOW().init();

//counter-start

$(function() {
    var oTop = $('.counter').offset().top - $(window).height();
    $(window).scroll(function(){

       var scrollTop = window.pageYOffset;
        if( scrollTop > oTop ){
            start_count();
        }
    });
});

//couter
function start_count(){
		$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 20000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
 
}   //Add your code here


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

jQuery(document).ready(function($) {


/*
|--------------------------------------------------------------------------
| Global myTheme Obj / Variable Declaration
|--------------------------------------------------------------------------
|
|
|
*/

	var myTheme = window.myTheme || {},
    $win = $( window );
	


/*
|--------------------------------------------------------------------------
| isotope
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.Isotope = function () {
	
		
		// 3 column layout
		var isotopeContainer2 = $('.isotopeContainer2');
		if( !isotopeContainer2.length || !jQuery().isotope ) return;
		$win.load(function(){
			isotopeContainer2.isotope({
				itemSelector: '.isotopeSelector'
			});
		$('.isotopeFilters2').on( 'click', 'a', function(e) {
				$('.isotopeFilters2').find('.active').removeClass('active');
				$(this).parent().addClass('active');
				var filterValue = $(this).attr('data-filter');
				isotopeContainer2.isotope({ filter: filterValue });
				e.preventDefault();
			});
		});
		
		
		
	};
	
	

/*
|--------------------------------------------------------------------------
| Fancybox
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.Fancybox = function () {
		$(".fancybox-pop").fancybox({
			maxWidth	: 1000,
			maxHeight	: 700,
			fitToView	: true,
			width		: '80%',
			height		: '80%',
helpers : {
        overlay : {
            css : {
                'background' : 'rgba(43, 37, 38, 0.88)'
            }
        },
        title: {
                type: 'inside',
                buttons	: {}
		       }
       

    },
		
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'elastic',
			closeEffect	: 'none',
			
	       /* afterShow: function(){
            var customContent = "<div class='customHTML'><button class='overlay-button'><a href='www.google.com'>View Project</a></button></div>";
            $('.fancybox-inner').append(customContent);
            }
			*/
		});
	
	};
		
	
		
	
	

/*
|--------------------------------------------------------------------------
| Functions Initializers
|--------------------------------------------------------------------------
|
|
|
*/
	
	myTheme.Isotope();
	myTheme.Fancybox();
	
	

});

//magnificpop up
    
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });






