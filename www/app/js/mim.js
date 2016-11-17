define(function(require,exports,module){
var mimgs =[
   {
    "img":'image/minimg4.png',
    "txt":'Lolons jeans',
    "money":'$30'
   },{
    "img":'image/minimg2.png',
    "txt":'Lichuang jeans',
    "money":'$40'
   },{
    "img":'image/minimg3.png',
    "txt":'Guo lingling',
    "money":'$50'
   }
];
var mimg = require('../view/misimg.html');
var mimgHtml =_.template(mimg);
$("#minshow").html(mimgHtml({misArr:mimgs}));
$("#minshow2").html(mimgHtml({misArr:mimgs}));
});