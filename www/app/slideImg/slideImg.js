define(function(require,exports,module){
	require('slideImg/slideImg.css');
	var _html = require('slideImg/slideImg.html');
	var _htmlFn = _.template(_html);

var slideImg = function(option){
	option = option || {};
	$.extend(true,this.default,option);
	// 用来存放图片的数据
	this.imgs =this.default.imgs;
	// 时间间隔
	this.gap  = this.default.gap;
	this.wraper = this.default.wraper;
	this.wraper.append( _htmlFn({imgs:this.imgs}) );
	this.init();
}
slideImg.prototype.default = {
      imgs:[],
      gap:2500,
      warper:$('body')
}
// slideImg.prototype.show = function(){

// }
slideImg.prototype.init = function(){
     	// var $item = $('.showImg');
     	// 从.showImg内部找有多少img
     	// var $imgs = $('img',$item);
     	var me = this;
     	var $item = $('.showImg',me.wraper);
     	var $imgs = $('img',$item,me.wraper);
     	var $pointer = $('.slidePointer span',$item);

     	var crtIndex = me.imgs.length-1;
     	var inter = setInterval(function(){
         crtIndex ++;
         if(crtIndex == $imgs.length){
         	crtIndex = 0;
         }
        $imgs.eq(crtIndex).stop(true,true).fadeIn().siblings('img').fadeOut();
     	$pointer.eq(crtIndex).addClass('active').siblings().removeClass('active');
     	},me.gap);
        // $pointer.on('click',(function))
     	$pointer.click(function(e){
     		clearInterval(inter);
     		var _index = $pointer.index($(e.target));
     		// console.log(_index);
     		crtIndex = _index;
           $imgs.eq(crtIndex).stop(true,true).fadeIn().siblings('img').fadeOut();     		
     		$pointer.eq(crtIndex).addClass('active').siblings().removeClass('active');
        inter = setInterval(function(){
         crtIndex ++;
         if(crtIndex == $imgs.length){
         	crtIndex = 0;
         }
         $imgs.eq(crtIndex).stop(true,true).fadeIn().siblings('img').fadeOut();
     	$pointer.eq(crtIndex).addClass('active').siblings().removeClass('active');
     	},me.gap);
     	});	
}
module.exports = slideImg;
});
