define(function(require, exports, module) {
    // require('popped/popup.css');
    var pop = require('popped/popup.html');
    var _htmlFn = _.template(pop);
    $('body').append( _htmlFn() );
    console.log(_htmlFn() );
    var tanwin = {
        twindow1: function(objt,event) {
            event.preventDefault();
            $('.cd-popud').addClass('is-visible');
            //关闭窗口
            if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popud')) {
                event.preventDefault();
                $('.cd-popud').removeClass('is-visible');
            }
            //ESC关闭
        },
         twindow2: function(objt,event) {
            if (event.which == '27') {
                $('.cd-popud').removeClass('is-visible');
            }
        }
    }


    module.exports = tanwin;
});
