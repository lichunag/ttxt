define(function(require,exports,module){
  var ltxt = [
  {
  	"img":"image/biaoimg1.png",
  	"txt":"Lonodbg ling",
  	"money":"$30"
  },
  {
  	"img":"image/biaoimg1.png",
  	"txt":"Guo ling",
  	"money":"$110"
  },
  {
  	"img":"image/biaoimg1.png",
  	"txt":"Ling ling",
  	"money":"$90"
  }
  ];
  var lis = require('../view/listimg.html');
  var inrHtml = _.template(lis);
  $('#lrimg').html(inrHtml({listArr:ltxt}));
});