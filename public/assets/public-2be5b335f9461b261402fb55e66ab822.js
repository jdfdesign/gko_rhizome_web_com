!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","bootstrap"],t):t(window.jQuery)}(function(t){"use strict";t.extend(t.fn.carousel.Constructor.prototype,{fit:function(e){if(e||(e=t(".item.active",this.$element).height()),e!=this.$element.height()&&(t.support.transition?this.$element.animate({height:e}):this.$element.height(e),this.$element.trigger(t.Event("fit.bs.carousel",{height:e}))),1==this.$element.find(".item.active img").length){var i=this.$element.find(".item.active img"),o={left:i.position().left,right:i.position().left};t.support.transition?this.$element.find(".carousel-caption").animate(o):this.$element.find(".carousel-caption").css(o)}}}),t(document).on("slide.bs.carousel",".carousel.carousel-fit",function(e){var i=t(this).data("bs.carousel");i.$element.height(t(".item.active",i.$element).height());var o=t(".item.active",i.$element)["left"==e.direction?"next":"prev"]();o.length||(o=t(".item:"+("left"==e.direction?"first":"last")+"-child",i.$element));var a;a=o.height(),i.fit(a)}).on("slid.bs.carousel",".carousel.carousel-fit",function(){var e=t(this).data("bs.carousel");e.fit()})}),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","bootstrap"],t):t(window.jQuery)}(function(t){"use strict";function e(e,i){i||(i=e.height());var o=e.parents(".modal:first"),a=!o.hasClass("force-fullscreen"),n=o.height();a&&(n-=t(".modal-header",o).height(),n-=t(".modal-footer",o).height()),t.support.transition&&e.hasClass("slide")?e.animate({marginTop:(n-i)/2}):e.css({marginTop:(n-i)/2})}t(document).on("shown.bs.modal",".modal",function(){t(".carousel",this).length&&t(".carousel",this).data("bs.carousel").fit()}).on("shown.bs.modal",".modal.modal-fullscreen",function(){t(".carousel",this).length&&e(t(".carousel",this).data("bs.carousel").$element)}).on("fit.bs.carousel",".modal.modal-fullscreen .carousel",function(i){e(t(this).data("bs.carousel").$element,i.height)}).on("replaced.bs.local",".carousel",function(){t(this).css("margin-top",0),t(this).hasClass("carousel-fit")&&t(this).data("bs.carousel").fit()})}),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","bootstrap"],t):t(window.jQuery)}(function(t){"use strict";t.extend(t.fn.modal.Constructor.prototype,{local:function(t){this.options.local=t},detach:function(){t(this.options.local).trigger(t.Event("detach.bs.local")),this.$placeholder||(this.$placeholder=t("<div></div>").addClass("hidden").html(this.$element.find(".modal-body").html()).insertBefore(t(this.options.local))),this.$local=t(this.options.local).detach(),this.$element.find(".modal-body").empty().append(this.$local),t(this.options.local).trigger(t.Event("detached.bs.local"))},replace:function(){t(this.options.local).trigger(t.Event("replace.bs.local")),this.$local.detach().insertAfter(this.$placeholder),this.$element.find(".modal-body").html(this.$placeholder.html()),t(this.options.local).trigger(t.Event("replaced.bs.local"))}}),t(document).on("show.bs.modal",".modal",function(){var e=t(this).data("bs.modal");e.options.local&&e.detach()}).on("hidden.bs.modal",".modal",function(){var e=t(this).data("bs.modal");e.options.local&&e.replace()}).on("click.bs.modal.data-api",'[data-toggle="modal"][data-local]',function(){t(t(this).attr("data-target")).modal("local",t(this).data("local"))})}),$(document).ready(function(t){"use strict";/*!
     * IE10 viewport hack for Surface/desktop Windows 8 bug
     * Copyright 2014 Twitter, Inc.
     * Licensed under the Creative Commons Attribution 3.0 Unported License. For
     * details, see http://creativecommons.org/licenses/by/3.0/.
     */
if(navigator.userAgent.match(/IEMobile\/10\.0/)){var e=document.createElement("style");e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.querySelector("head").appendChild(e)}t("body"),t(window),t(document),t(".th-offcanvas:first"),t(".th-offcanvas-container:first"),t(".th-offcanvas-toggle:first");jQuery(window).load(function(){jQuery(".loadstack").fadeOut(),jQuery(".preloader").delay(1e3).fadeOut("slow")}),jQuery(function(t){t(".background-image-holder").each(function(){var e=t(this).children("img").attr("src");t(this).css("background-image",'url("'+e+'")'),t(this).children("img").hide(),t(this).css("background-position","50% 0%"),t(this).css("height",.8*t(window).height())})}),jQuery(function(t){var e=t(".th-herofade");t(window).height()>e.height()&&t(window).on("scroll",function(){var i=t(this).scrollTop();e.css({"margin-top":-(i/0)+"px",opacity:1-i/600})})})});