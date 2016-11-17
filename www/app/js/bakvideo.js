define(function(require,exports,module){
    jQuery(function($){
          $('.section-second').vidbg({
              'mp4': 'media/mp4_video.mp4',
              'webm': 'media/webm_video.webm',
              'poster': 'media/fallback.png',
          }, {
            // Options
            muted: true,
            loop: true,
			      overlay: true,
          });
      });
});