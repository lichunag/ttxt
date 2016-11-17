define(function(require,exports,mdule){
   // var txtleft = $('.txt-left');
   $('.txt-left .pubc').on('click',function(){
   	var index = $(this).index();
   	var arr = ['','#f18694','#f9cf7a','#8dbaf2','#7fddc5'];
   	$(this).addClass('active').siblings().removeClass('active');
    $(this).parents('.showmin .mis').css({'background-color':arr[index]});
    $(this).parents('.showmin .mis').find('h3').css({'background-color':arr[index]});

   });
});