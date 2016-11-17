define(function(require,exports,module){
        // 表单验证：
        $(".cd-ipt input").blur(function(){
        var value = $('.cd-ipt').find('#ipt-txt').val().trim();
        if($(this).is("#ipt-email")){
            if($.trim(this.value) == "" || ($.trim(this.value) != "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test($.trim(this.value))) && !value.length){
            	$('.cd-popup-container').css({"background":"#3698c6"});
            }else{
            	$('.cd-popup-container').css({"background":"#16a085"});
            }
            }
        });
});