
$(document).ready(function(){
	// Variables
	var log = function(e){
		console.log(e);
	};
	var interval = function(e){
		setInterval(function(){
			log(e);
		}, 1000);
	};
	var switch_animationCareer,switch_animationSpin = 0;

	var arraySkills = {
		"HTML 5" :'3',
		"CSS 3": "3",
		"Javascript":"3",
		"jQuery":"3",
		"React Js":"2",
		"Less/Sass/Scss":"2",
		"Bootstrap":"2",
		"Node.js":"2",
		"Express.js":"3",
		"GIT":"2",
		"MongoDb":"1",
		"Photoshop":"2",
		"Gulp":"2",
		"Npm":"3",
		"Windows":"5",
		"MacOs":"2",
		"Linux":"1"
	};

	$('.introduction h1').fadeIn(1500);

	// Click on scrollTo visit
	$(".nav-link, .arrow-down-work, .navbar-brand").click(function(e) {
	    e.preventDefault();
	    var aid = $(this).attr("href");
	    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
	});

	// CHange menu color
	function showMenu (){

		if($(window).scrollTop() >= $('#about_me').offset().top){
			// $('.burger-menu .icon').addClass('black-shape');
			$('.jn_navbar').addClass('fixed-top').removeClass('hide_navbar');
		}else{
			// $('.burger-menu .icon').removeClass('black-shape');
			$('.jn_navbar').removeClass('fixed-top').addClass('hide_navbar');
		}

		// if($(window).scrollTop() > $('#about_me').offset().top / 16){
		// 	$('.social-share .icon').addClass('black-shape');
		// }else{
		// 	$('.social-share .icon').removeClass('black-shape');
		// }

	};

	// Animation professionnal career
	function animationCareer (){
		// if($('#timeline-title').visible() && switch_animationCareer !== 1){
		if($(window).scrollTop() > $('#timeline-title').offset().top - 100 && switch_animationCareer !== 1 && $('#timeline-title').visible()){
			$('.timeline-item').css('opacity', 0).slideDown(1000, function(){

				if($(this).offset().left == $('#timeline-title').offset().left){
					$(this).css({'opacity':0, "left": "-100px"}).animate({ opacity: 1, left:0 },{ queue: false, duration: 1000 });
				}else{
					$(this).css({'opacity':0, "right": "-100px"}).animate({ opacity: 1, left:0 },{ queue: false, duration: 1000 });
				}
			});
			switch_animationCareer = 1;
		}
	};

	// Rating Javascript skills
	function ratingSkills(){
		// if($('#express').visible() && switch_animationSpin !== 1){
			if($(window).scrollTop() > $('#technologies').offset().top - 100 && switch_animationSpin !== 1){
			var this_title;
			var this_title_rating;
			for (key in arraySkills) {
				console.log($('.technologies .list-group-item .title'))
				for(var i = 0; i < $('.technologies .list-group-item .title').length;i++){
					
					if($('.technologies .list-group-item .title')[i].innerHTML == key){
						this_title = $('.technologies .list-group-item .title')[i];
						this_title_rating = $(this_title).siblings();
					}
				}
				for(var j = 0 ; j < arraySkills[key];j++){
					$(this_title_rating).append('<i class="fa fa-star jn-star spin"></i>');
					$(this_title_rating).find('.fa-star').animate({opacity:1},{ queue: false, duration: 1500 });
				}
				for(var k = 0 ; k < Math.abs(arraySkills[key] - 5);k++){
					$(this_title_rating).append('<i class="far fa-star"></i>');
					$(this_title_rating).find('.fa-star').animate({opacity:1},{ queue: false, duration: 1500 });
				}
	        }
	        switch_animationSpin = 1;
	        setTimeout(function(){
	        	$('.technologies .fa-star').removeClass('spin');
	        }, 1000);
		}	
	};	

	// Overlay text 
	function overlayText(){
		$('.project_bloc, .overlay_text').mouseenter(function(){
			$(this).find('.overlay_text').addClass('overlay_text-active');
			$(this).find('.overlay').addClass('overlay-active');
		});
		$('.project_bloc').mouseleave(function(){
			$(this).find('.overlay').removeClass('overlay-active');
			$(this).find('.overlay_text').removeClass('overlay_text-active');
		});	
	};

	window.onscroll = function(){
		showMenu();
		animationCareer();
		ratingSkills();
	};
	overlayText();
	animationCareer();
	ratingSkills();
});
