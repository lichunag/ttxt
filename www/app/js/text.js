define(function(require,exports,module){
	var slideImg = require('slideImg/slideImg.js');
     var popped = require('popped/popup.js');
     var inputami = require('./inputami.js');
     require('./cut.js');
     require('./mim.js');
     require('./listimg.js');
     require('./inputami.js');
     require('./inputent.js');
     require('./bakvideo.js');
     require('./activecolor.js');
     require('./btntag.js');
     require('./amdiao.js');
	var Task = {
		initPage:function(){
          new slideImg({
          	wraper:$('#showBox'),
          	imgs:[
          	{
          		imgsrc:'../image/centerbanner1.png'
          	},{
          		imgsrc:'../image/btnbanner1.png'
          	}],
          	gap:1800
          })
		},
         ami:function(){
               $('.search-wrapper  .search-icon').on('click',function(e){
               inputami.searchToggle(e.target,e);
               });
               $('.search-wrapper .close').on('click',function(e){
               inputami.searchToggle(e.target,e);
               })
          },
          ptw:function(){
               $('.shoping-car').on('click',function(event){
                    popped.twindow1(event.target,event);
               });
               $('.cd-popud').on('click',function(event){
                    popped.twindow1(event.currentTarget,event);
               });
               $(document).keyup(function(event){
                    popped.twindow2(event.target,event);
               })
          }
	}
	module.exports = Task;
});