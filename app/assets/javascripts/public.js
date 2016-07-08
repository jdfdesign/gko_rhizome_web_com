//= require jquery_ujs
//= require jquery.magnific-popup.js
//= require remote_form

$(document).ready(function($) {

    "use strict";

    /*!
     * IE10 viewport hack for Surface/desktop Windows 8 bug
     * Copyright 2014 Twitter, Inc.
     * Licensed under the Creative Commons Attribution 3.0 Unported License. For
     * details, see http://creativecommons.org/licenses/by/3.0/.
     */
    // See the Getting Started docs for more information:
    // http://getbootstrap.com/getting-started/#support-ie10-width
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.querySelector('head').appendChild(msViewportStyle);
    }



    var $body = $("body"),
        $window = $(window),
        $document = $(document),
        $offcanvas = $(".th-offcanvas:first"),
        $offcanvas_container = $(".th-offcanvas-container:first"),
        $sidebar_toggle = $(".th-offcanvas-toggle:first");


    $('.open-gallery-link').click(function() {
      var items = [];
      $( $(this).attr('href') ).find('.slide').each(function() {
        items.push( {
          src: $(this)
        } );
      });

      $.magnificPopup.open({
        items:items,
        gallery: {
          enabled: true
        }
      });
    });

    $("#form_newsletter").on("ajax:success", function(evt, data, status, xhr) {
      alert(xhr.responseText);
    }).on("ajax:error", function(evt, xhr, status, error) {
      alert("error");
    });

    $(window).resize(function(){
            // Append .background-image-holder <img>'s as CSS backgrounds
        $('.background-image-holder').each(function(){
            var imgSrc= $(this).children('img').attr('src');
            $(this).css('background-image', 'url("' + imgSrc + '")');
            $(this).children('img').hide();
            //$(this).css('background-position', '50% 0%');
            $(this).css('height', $(window).height()*.8);
        });

        $('.background-image-holder-home').each(function(){
            var imgSrc= $(this).children('img').attr('src');
            $(this).css('background-image', 'url("' + imgSrc + '")');
            $(this).children('img').hide();
            //$(this).css('background-position', '50% 0%');
            $(this).css('height', $(window).height());
        });
    });

    $(window).trigger("resize");

});
