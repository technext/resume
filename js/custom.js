/************************************************************************************ MY SKILLS CAROUSEL STARTS */

$(document).ready(function () {

    //Sort random function

    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }

    $("#myskills-carousel").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 500,
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        autoHeight: true,
		pagination: true,
		navigation: false,
        navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
        //Call beforeInit callback, elem parameter point to $("#our-team")
       /* beforeInit: function (elem) {
            random(elem);
        }*/

    });

});




/************************************************************************************ TO TOP STARTS */
 
 $(document).ready(function(){ 
         
             $(window).scroll(function(){
                 if ($(this).scrollTop() > 100) {
                     $('.scrollup').fadeIn();
                 } else {
                     $('.scrollup').fadeOut();
                 }
             }); 
         
             $('.scrollup').click(function(){
                 $("html, body").animate({ scrollTop: 0 }, 600);
                 return false;
             });
         
         });	



/************************************************************************************ SCROLL TO NAV. STARTS */

$(document).ready(function() {
	$('.nav').onePageNav({
		filter: ':not(.external)',
		begin: function() {
		console.log('start')
		},
		end: function() {
		console.log('stop')
		}
	});

});


/************************************************************************************ STICKY NAV. STARTS */

$(window).load(function(){
          $("#navigation").sticky({ topSpacing: 0 });
		 // $("#navigation").sticky({ position: absolute });
		 		
        });


/************************************************************************************ BOOTSTRAP LIGHTBOX STARTS */

 $(document).ready(function ($) {
                // delegate calls to data-toggle="lightbox"
                $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
                    event.preventDefault();
                    return $(this).ekkoLightbox({
                        onShown: function() {
                            if (window.console) {
                                return console.log('Checking our the events huh?');
                            }
                        }
                    });
                });

                //Programatically call
                $('#open-image').click(function (e) {
                    e.preventDefault();
                    $(this).ekkoLightbox();
                });
                $('#open-youtube').click(function (e) {
                    e.preventDefault();
                    $(this).ekkoLightbox();
                });

            });
			

/************************************************************************************ PAGE ANIMATED ITEMS STARTS */

	jQuery(document).ready(function($) {
	
	'use strict';

    	$('.animated').appear(function() {
	        var elem = $(this);
	        var animation = elem.data('animation');
	        if ( !elem.hasClass('visible') ) {
	        	var animationDelay = elem.data('animation-delay');
	            if ( animationDelay ) {

	                setTimeout(function(){
	                    elem.addClass( animation + " visible" );
	                }, animationDelay);

	            } else {
	                elem.addClass( animation + " visible" );
	            }
	        }
	    });
});	

/************************************************************************************ PRELOADER STARTS */	

 jQuery(window).load(function() {
             $('#preloader').fadeOut('slow'); 
             
         	});





