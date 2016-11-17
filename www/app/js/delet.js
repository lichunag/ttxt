define(function(require,exports,module){
       $('.shoping-car').on('click',function(event){
            event.preventDefault();
            $('.cd-popud').addClass('is-visible');
        });
        //关闭窗口
        $('.cd-popud').on('click', function(event){
            if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popud') ) {
                event.preventDefault();
                $(this).removeClass('is-visible');
            }
        });
        //ESC关闭
        $(document).keyup(function(event){
            if(event.which=='27'){
                $('.cd-popud').removeClass('is-visible');
            }
        }); 
});