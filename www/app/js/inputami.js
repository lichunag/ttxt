define(function(require,exports,module){
	var amis = {
	searchToggle : function(obj, evt){
		var container = $(obj).closest('.search-wrapper');
		// hasClass 检查container是否有active这个样式类型
		if(!container.hasClass('active')){
			  container.addClass('active');
			  evt.preventDefault();
		}
		else if(container.hasClass('active')&& $(obj).closest('.input-holder').length == 0)
		{
			  container.removeClass('active');
			}
		}
	}
	module.exports = amis;
})