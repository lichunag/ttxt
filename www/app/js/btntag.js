define(function(require,exports,module){
	$('#ft-psi').on('click',function(){
		$('.btn-img').slideToggle(800);
		// $('.btn-img').animate({
		// 	height:'toggle'
		// })
		// $(this).animate({
		// 	// first:0,
		// 	deg:0,
		// 	first:0,
		// 	second:0
		// },{
		// 	step:function(now,fx){
		// 		if(fx.prop == "second"){
  //                   fx.end=180
		// 		}
		// 		$(this).css({"transform":"rotate("+now+"deg)"}
		// 			)
		// 	},
		// 	duration:800
		// });
	});
});