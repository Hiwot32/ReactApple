

import $ from 'jquery';
$(document).ready(function() {
    $('.footer-wrapper h3').click(function() {
      $(this).next('ul').slideToggle();
      $(this).toggleClass('expanded');
    });
  
  
    $('.footer-wrapper a').hover(
      function() {
        $(this).css('color', '#0071e3'); 
      },
      function() {
        $(this).css('color', ''); 
      }
    );
  
    
    $('.footer-wrapper a').click(function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 600);
    });
  });
  
  