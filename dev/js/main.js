(function($){

	$(function(){

		$("#toBelow").on("click",function(){
			var target = this.dataset.target;
			//Colocamos el scrollTo en el target.
			$.scrollTo("#"+target,800,{
				axis:'y'
			});
		});


		/***************** Scroll Magic ******************/

		var controller = new ScrollMagic.Controller();

		// Create the Scene and trigger when visible with ScrollMagic
		var scene = new ScrollMagic.Scene({
		    triggerElement: '#scene_1',
		    offset: 5 /* offset the trigger 150px below #scene's top */
		})
		.setClassToggle(".card-stack .card", "active")
		.addTo(controller);


		var scene = new ScrollMagic.Scene({
		    triggerElement: '#section_parallax_2',
		    offset: 0 /* offset the trigger 150px below #scene's top */
		})
		.setClassToggle("#babelians-features", "slideInRight")
		.addTo(controller);



		var scene = new ScrollMagic.Scene({
		    triggerElement: '#surface',
		    offset: 0
		})
		.setTween(TweenMax.fromTo('#surface', 1,{right: '-100%'},{right:0}))
		.addTo(controller);

		var scene = new ScrollMagic.Scene({
		    triggerElement: '#mobile_call',
		    offset: 0
		})
		.setTween(TweenMax.fromTo('#mobile_call',1.1,{right: '-70%'},{right:'50%'}))
		.addTo(controller);

		var scene = new ScrollMagic.Scene({
		    triggerElement: '#section_parallax_3',
		    offset: 0 /* offset the trigger 150px below #scene's top */
		})
		.setClassToggle("#seen-in-list", "fadeInDown")
		.addTo(controller);

		

		/***************** Flickity ******************/

		$('#testimonials').flickity({
			cellAlign: 'left',
			contain: true,
			prevNextButtons: false
		});

	
	});

})(jQuery);