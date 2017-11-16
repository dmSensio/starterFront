$(document).ready(function() {
  /**
   * Permet d'animer le scroll vers un élément
   */
  $('.scrollToBottom').on('click', function(){
    $('html, body').animate({
      scrollTop: $('section').offset().top
    }, 750);
  });
  /**
   * Permet d'afficher ou de masquer la video
   */
  var video = $('#video')[0];
  var closeVideo = function closeVideo() {
    video.pause();
    $('.videoContainer,.overlayVideo').animate({ 'opacity': 0 }, 500, function () {
      $('.videoContainer,.overlayVideo').hide();
    });
  };
  $('.playVideo').on('click', function () {
    $('.videoContainer,.overlayVideo').show().animate({
      'opacity': 1
    }, 500, function () {
      video.play();
      video.onended = function () {
        closeVideo();
      };
    });
  });
  $('.overlayVideo').on('click', function () {
    closeVideo();
  });
  $('.scrollToBottom ').on('click', function () {
    var hwin = $(window).height();
    $('html, body').animate({
      scrollTop: hwin
    }, 500);
  });
});