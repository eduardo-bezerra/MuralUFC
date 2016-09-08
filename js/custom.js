
/* ========== PARALLAX BACKGROUD ========== */
function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#parallax-1').css('top',(0 - (scrollPosition * 0.6))+'px' ); /* big clouds move at 60% of speed */
	$('#parallax-2').css('top',(0 - (scrollPosition * 0.2))+'px' ); /* medium clouds move at 20% of speed */
	$('#parallax-3').css('top',(0 - (scrollPosition * 0.4))+'px' ); /* small clouds move at 40% of speed */
}

$(document).ready(function() {

	/* calling the parallax function */
	$(window).on('scroll', function(e) {
		parallax();
	});


	/* ========== BASELINE GRID SCRIPT BY DAN EDEN ========== */
	/* http://daneden.me/baseline/ */
	$('img').baseline(24);

		// ==================== STYLE SWITCHER ==================== //

	$(".style1" ).click(function(){
		$("#colors" ).attr("href", "css/style1.css" );
		$(".navbar-brand img, .footer-logo img").attr("src", "css/img/logo-color-1.png");
		return false;
	});

	$(".style2" ).click(function(){
		$("#colors" ).attr("href", "css/style2.css" );
		$(".navbar-brand img, .footer-logo img").attr("src", "css/img/logo-color-2.png");
		return false;
	});

	$(".style3" ).click(function(){
		$("#colors" ).attr("href", "css/style3.css" );
		$(".navbar-brand img, .footer-logo img").attr("src", "css/img/logo-color-3.png");
		return false;
	});

	$(".style4" ).click(function(){
		$("#colors" ).attr("href", "css/style4.css" );
		$(".navbar-brand img, .footer-logo img").attr("src", "css/img/logo-color-4.png");
		return false;
	});

	$(".style5" ).click(function(){
		$("#colors" ).attr("href", "css/style5.css" );
		$(".navbar-brand img, .footer-logo img").attr("src", "css/img/logo-color-5.png");
		return false;
	});

	$(".style6" ).click(function(){
		$("#colors" ).attr("href", "css/style6.css" );
		$(".navbar-brand img, .footer-logo img").attr("src", "css/img/logo-color-6.png");
		return false;
	});

	// Style Switcher	
	$('#style-switcher').animate({
		left: '-168px'
	});

	$('#style-switcher h2 a').click(function(e){
		e.preventDefault();
		var div = $('#style-switcher');
		console.log(div.css('left'));
		if (div.css('left') === '-168px') {
			$('#style-switcher').animate({
				left: '0px'
			}); 
		} else {
			$('#style-switcher').animate({
				left: '-168px'
			});
		}
	})

	$('.colors li a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
	})


	/* ========== HEADER BAR MORPHING ON SCROLL ========== */
	/* shout out to codrops for the inspiration - http://tympanus.net/codrops/ */
	var $head = $( '#morph-header' );
	$( '.morph-waypoint' ).each( function(i) {
		var $el = $( this ),
			animClassDown = $el.data( 'animateDown' ),
			animClassUp = $el.data( 'animateUp' );

		$el.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head.attr('class', 'morph-header ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head.attr('class', 'morph-header ' + animClassUp);
			}
		}, { offset: '72px' } );
	} );


	// ==================== BOOTSTRAP SCROLLSPY ==================== //
	$('section').scrollspy();

	// ==================== SMOOTH SCROLLING BETWEEN SECTIONS ==================== //
	$('a[href*=#section-]:not([href=#])').click(function(o) {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	           	if ($("header").css("position") == "fixed" ) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top-71
	            }, 1000);
	         } else {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	         }
	            return false;
	        }
	    }
	});

	/* ========== ISOTOPE FILTERING ========== */
	// cache container
	var $container = $('.portfolio-items');
	// initialize isotope
	$container.isotope({
	  // options...
	});

	// filter items when filter link is clicked
	$('.filters a').click(function(){
	  var selector = $(this).attr('data-filter');
	  $container.isotope({ filter: selector });
	  return false;
	});

	// ==================== CONTACT FORM ==================== //
    $("#contact-form").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "assets/contact.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<div class="alert alert-success">All good, your message is in the cloud!</div>';
					setTimeout("location.reload(true);",7000);
			  	} else {
					result = msg;
			  	}
			  	$('#contact-error').html(result);
		    }
		});
		return false;
	});

	// ==================== TWITTER FEED ==================== //
	$("#tweets-feed").tweet({
	  join_text: false,
	  username: "envato", // Change username here
	  modpath: './assets/twitter/', 
	  avatar_size: false,
	  count: 2, // number of tweets
	  loading_text: "tweets are coming...",
	  seconds_ago_text: "about %d seconds ago",
	  a_minutes_ago_text: "about a minute ago",
	  minutes_ago_text: "about %d minutes ago",
	  a_hours_ago_text: "about an hour ago",
	  hours_ago_text: "about %d hours ago",
	  a_day_ago_text: "about a day ago",
	  days_ago_text: "about %d days ago",
	  view_text: "view tweet on twitter"
	});

	// ==================== FITVIDS ==================== //
	// https://github.com/marclarr/FitVids.js
	$('.fitvids').fitVids();

});

/* ========== ISOTOPE FILTERING ========== */
$(window).load(function(){
	// cache container
	var $container = $('.portfolio-items');
	// initialize isotope
	$container.isotope({
	  // options...
	});

	// filter items when filter link is clicked
	$('.filters a').click(function(){
	  var selector = $(this).attr('data-filter');
	  $container.isotope({ filter: selector });
	  return false;
	});
});
