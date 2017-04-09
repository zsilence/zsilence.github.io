$(document).ready(function () {
  var $sidebar = $('#sidebar');
  var headerHeight = $('.header-inner').height();
  var footerOffset = parseInt($('.main').css('padding-bottom'), 10);
  var sidebarTop = headerHeight + 10;

  $sidebar
    .css({ 'margin-top': sidebarTop })
    .show();

  NexT.utils.isDesktop() && $('.page-post-detail .sidebar-inner').affix({
    offset: {
      top: sidebarTop,
      bottom: footerOffset
    }
  });

  $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if(scrollTop > $('.header-inner').height()){
          $('#header').hide();
          $('#sidebar').addClass('scroll-sidebar');
      }else{
          $('#header').show();
          $('#sidebar').removeClass('scroll-sidebar');
      }
  });
});
$(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if(scrollTop > $('.header-inner').height()){
          $('#header').hide();
          $('#sidebar').addClass('scroll-sidebar');
      }else{
          $('#header').show();
          $('#sidebar').removeClass('scroll-sidebar');
      }
  });
