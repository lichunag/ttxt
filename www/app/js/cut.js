define(function(require,exports,module){
  // var util = require('./cutway');
  var cuttxt =[
  {
  	"img":'image/thimg2.png',
  	"txt1":'Lolona Dress',
  	"txt2":'Lorem ipsum dolor sit amet,',
  	"txt3":'consecteuer adipiscing elit,sed diam',
  	"txt4":'nonumy nibh sed adipiscing anme hello',
    "money":'589'
  },{
  	"img":'image/thimg3.jpg',
  	"txt1":'Lolona Dress',
  	"txt2":'Lorem ipsum dolor sit amet,',
  	"txt3":'consecteuer adipiscing elit,sed diam',
  	"txt4":'nonumy nibh sed adipiscing anme hello',
    "money":'789'  	
  },{
  	"img":'image/thimg2.png',
  	"txt1":'Lolona Dress',
  	"txt2":'Lorem ipsum dolor sit amet,',
  	"txt3":'consecteuer adipiscing elit,sed diam',
  	"txt4":'nonumy nibh sed adipiscing anme hello',
    "money":'689'  	
  }
  ];
var act = require('../view/cutImg.html');
var actHtml = _.template(act);
$("#acts").html(actHtml({actArr:cuttxt}));
});