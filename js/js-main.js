/**
 * @author Jonathan Creative
 *
 */

(function (jQuery) {
  window.$ = jQuery.noConflict();
})(jQuery);


var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  isMobile = true;
}

// in viewport function
$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function () {
// Wrap article iframes in div
$(".single .content.wysiwyg iframe").wrap('<div class="videoWrapper"></div>');

  // IE object-fit polyfill
  ! function () {
    "use strict";
    if ("undefined" != typeof window) {
      var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
        e = t ? parseInt(t[1], 10) : null,
        n = !!e && (16 <= e && e <= 18);
      if (!("objectFit" in document.documentElement.style != !1) || n) {
        var o = function (t, e, i) {
            var n, o, l, a, d;
            if ((i = i.split(" ")).length < 2 && (i[1] = i[0]), "x" === t) n = i[0], o = i[1], l = "left", a = "right", d = e.clientWidth;
            else {
              if ("y" !== t) return;
              n = i[1], o = i[0], l = "top", a = "bottom", d = e.clientHeight
            }
            if (n !== l && o !== l) {
              if (n !== a && o !== a) return "center" === n || "50%" === n ? (e.style[l] = "50%", void(e.style["margin-" + l] = d / -2 + "px")) : void(0 <= n.indexOf("%") ? (n = parseInt(n, 10)) < 50 ? (e.style[l] = n + "%", e.style["margin-" + l] = d * (n / -100) + "px") : (n = 100 - n, e.style[a] = n + "%", e.style["margin-" + a] = d * (n / -100) + "px") : e.style[l] = n);
              e.style[a] = "0"
            } else e.style[l] = "0"
          },
          l = function (t) {
            var e = t.dataset ? t.dataset.objectFit : t.getAttribute("data-object-fit"),
              i = t.dataset ? t.dataset.objectPosition : t.getAttribute("data-object-position");
            e = e || "cover", i = i || "50% 50%";
            var n = t.parentNode;
            return function (t) {
                var e = window.getComputedStyle(t, null),
                  i = e.getPropertyValue("position"),
                  n = e.getPropertyValue("overflow"),
                  o = e.getPropertyValue("display");
                i && "static" !== i || (t.style.position = "relative"), "hidden" !== n && (t.style.overflow = "hidden"), o && "inline" !== o || (t.style.display = "block"), 0 === t.clientHeight && (t.style.height = "100%"), -1 === t.className.indexOf("object-fit-polyfill") && (t.className = t.className + " object-fit-polyfill")
              }(n),
              function (t) {
                var e = window.getComputedStyle(t, null),
                  i = {
                    "max-width": "none",
                    "max-height": "none",
                    "min-width": "0px",
                    "min-height": "0px",
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto",
                    "margin-top": "0px",
                    "margin-right": "0px",
                    "margin-bottom": "0px",
                    "margin-left": "0px"
                  };
                for (var n in i) e.getPropertyValue(n) !== i[n] && (t.style[n] = i[n])
              }(t), t.style.position = "absolute", t.style.width = "auto", t.style.height = "auto", "scale-down" === e && (e = t.clientWidth < n.clientWidth && t.clientHeight < n.clientHeight ? "none" : "contain"), "none" === e ? (o("x", t, i), void o("y", t, i)) : "fill" === e ? (t.style.width = "100%", t.style.height = "100%", o("x", t, i), void o("y", t, i)) : (t.style.height = "100%", void("cover" === e && t.clientWidth > n.clientWidth || "contain" === e && t.clientWidth < n.clientWidth ? (t.style.top = "0", t.style.marginTop = "0", o("x", t, i)) : (t.style.width = "100%", t.style.height = "auto", t.style.left = "0", t.style.marginLeft = "0", o("y", t, i))))
          },
          i = function (t) {
            if (void 0 === t || t instanceof Event) t = document.querySelectorAll("[data-object-fit]");
            else if (t && t.nodeName) t = [t];
            else {
              if ("object" != typeof t || !t.length || !t[0].nodeName) return !1;
              t = t
            }
            for (var e = 0; e < t.length; e++)
              if (t[e].nodeName) {
                var i = t[e].nodeName.toLowerCase();
                if ("img" === i) {
                  if (n) continue;
                  t[e].complete ? l(t[e]) : t[e].addEventListener("load", function () {
                    l(this)
                  })
                } else "video" === i ? 0 < t[e].readyState ? l(t[e]) : t[e].addEventListener("loadedmetadata", function () {
                  l(this)
                }) : l(t[e])
              } return !0
          };
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i(), window.addEventListener("resize", i), window.objectFitPolyfill = i
      } else window.objectFitPolyfill = function () {
        return !1
      }
    }
  }();
  if (isMobile === false) {
 
  }

  // Modals
  var scrollWidth = window.innerWidth - $(document).width();
  $('.nav-toggle').click(function () {
    $(this).toggleClass('close')
    if ($(this).hasClass("open-nav")) {
      $('#menu-overlay').fadeIn();
      $(this).removeClass('open-nav');
      $('body').css('margin-right', scrollWidth);
      $(this).css('margin-right', scrollWidth);
      $('body').addClass('modal-open');
    } else {
      $('#menu-overlay').fadeOut();
      $(this).addClass('open-nav');
      setTimeout(function () {
        $('body').css('margin-right', '0');
        $('body').removeClass('modal-open');
        $('.nav-toggle').css('margin-right', '0');
      }, 400);

    }

  });
  // Trailer
  $('.popup-trigger').click(function () {
    $('#trailer').fadeIn();
    $('body').addClass('modal-open');
    $('body').css('margin-right', scrollWidth);
    $('.trailer-close').css('margin-right', scrollWidth);
    $('.nav-toggle').css('margin-right', scrollWidth);
    var vidURL = $(this).attr("data-trailer");
    $('#trailer .embed-container iframe').attr('src', vidURL)
    $('.trailer-close').fadeIn();
  });

  $('.trailer-close').click(function () {
    $('#trailer').fadeOut();
    $('.trailer-close').fadeOut();

    setTimeout(function () {
      $('#trailer .embed-container iframe').attr('src', "")
      $('body').css('margin-right', '0');
      $('body').removeClass('modal-open');
      $('.trailer-close').css('margin-right', '0');
      $('.nav-toggle').css('margin-right', '0');
    }, 400);
  })


  // Flip photo 
  $('.flip-photo').click(function () {
    $(this).parent().toggleClass('flipped');
  })


  // Custom easing
  jQuery.extend(jQuery.easing, {
    def: 'easeInOutExpo',
    easeInOutExpo: function (x, t, b, c, d) {
      if (t == 0) return b;
      if (t == d) return b + c;
      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
  });

  // Masonry
  var $grid = $('.project-tiles').isotope({
    stagger: 10,
    itemSelector: '.project-tiles li'
  });


  // filter items on button click
  $('.filters').on('click', '.filter', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
    $('html, body').animate({
      scrollTop: $('.filters').offset().top - 25
    }, 1000, 'easeInOutExpo');

    $(window).trigger("scroll");
  });

  //Filter links active class
  $('.filter').click(function () {
    $('.filter').removeClass('active');
    $(this).addClass('active')
  });

  // Embed Iframe on project page
  if ($('#project-content .embed-container').length) {
    var vidURLProject = $('#project-content .embed-container').attr("data-trailer");
    $('#project-content .embed-container iframe').attr('src', vidURLProject)
  };

  //Carousels
  if ($('.full-width-carousel').length) {
    if ($('.single .full-width-carousel').length) {
      var $carousel = $('.full-width-carousel').flickity({
        imagesLoaded: true,
        percentPosition: false,
        cellAlign: 'left'
      });

      var $imgs = $carousel.find('.slide img');
    }

    if ($('.hero-banner').length) {
      var $carousel = $('.full-width-carousel').flickity({
        imagesLoaded: true,
        percentPosition: false,
        wrapAround: true,
        cellSelector: '.hero-banner .slide',
        cellAlign: 'left'
      });

      var $imgs = $carousel.find('.slide .slide-inner');
    }

    // get transform property
    var docStyle = document.documentElement.style;
    var transformProp = typeof docStyle.transform == 'string' ?
      'transform' : 'WebkitTransform';
    // get Flickity instance
    var flkty = $carousel.data('flickity');

    $carousel.on('scroll.flickity', function () {
      flkty.slides.forEach(function (slide, i) {
        var img = $imgs[i],
          x = 0;

        if (0 === i) {
          x = Math.abs(flkty.x) > flkty.slidesWidth ? (flkty.slidesWidth + flkty.x + flkty.slides[flkty.slides.length - 1].outerWidth + slide.target) : (slide.target + flkty.x);
        } else if (i === flkty.slides.length - 1) {
          x = Math.abs(flkty.x) + flkty.slides[i].outerWidth < flkty.slidesWidth ? (slide.target - flkty.slidesWidth + flkty.x - flkty.slides[i].outerWidth) : (slide.target + flkty.x);
        } else {
          x = slide.target + flkty.x;
        }
        img.style[transformProp] = 'translateX(' + x * (-1 / 3) + 'px)';
      });
    });
  }

  if ($('.hero-banner').length) {
    flkty.on("settle", function () {
      flkty.cells.forEach(function (cell, i) {
        if (cell.element == flkty.selectedElement) {
          var video = cell.element.querySelector("video");
          if (video) {
            video.play();
          }
          return;
        }
        var video = cell.element.querySelector("video");
        if (video) {
          video.pause();
        }
      });
    });
  }

  if ($('#testimonials').length) {
    $('#testimonials ul').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      adaptiveHeight: true,
      prevNextButtons: false,
      pageDots: true,
      autoPlay: 6000,
      wrapAround: true
    }).resize();
  }
  
  $("img.lazyload").lazyload();
});


$(window).on('load', function () {

  // Hide loading icon
  $('.loader').fadeOut();

  // Play first video on hero slider
  var firstVid = $('.hero-banner .slide:first video');
  firstVid.trigger('play');

  if (isMobile === false) {      
    /*$('.work-tile').each(function (i, obj) {
      videoReady =  $(this).find(".hover-video").get(0)
      $(videoReady).on('canplay', function () {

        $(this).parent().mouseenter(function () {
          videoT =  $(this).find(".hover-video")
          videoThumb =  $(this).find(".thumbnail-image")
          $(videoThumb).addClass('hovered');
          $(videoT)[0].play();
        }).mouseleave(function () {
          $(videoT)[0].pause();
          $(videoThumb).removeClass('hovered');
        })

      });
    }); */
    // Video hovers 
    function hoverVideo() {

      var video = $(this).find(".hover-video")[0]
      var isPlaying = video.currentTime > 0 && !video.paused && !video.ended 
      && video.readyState > video.HAVE_CURRENT_DATA;
      if (!isPlaying) {
        video.play();
      }
      $(this).find(".thumbnail-image").addClass('hovered');
    }

    function hideVideo(video) {
      var video = $(this).find(".hover-video")[0]
      var isPlaying = video.currentTime > 0 && !video.paused && !video.ended 
      && video.readyState > video.HAVE_CURRENT_DATA;
      if (isPlaying) {
        video.pause();
      }
      $(this).find(".thumbnail-image").removeClass('hovered');
    }


    $('.work-tile').each(function (i, obj) {
      $(this).on("mouseover", hoverVideo);
      $(this).on("mouseout", hideVideo);
    });

  }

  if ($('#news ul.news-tiles').length) {
    $('#news ul.news-tiles').flickity({
      // options
      prevNextButtons: false,
      pageDots: true,
      imagesLoaded: true,
      groupCells: true,
      watchCSS: true,
      contain: true,
    }).resize();
  }

  if ($('#testimonials').length) {
    $('#testimonials ul').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      adaptiveHeight: true,
      prevNextButtons: false,
      pageDots: true,
      autoPlay: 6000,
      wrapAround: true
    }).resize();
  }
})



$(window).scroll(function () {
  //Article header parallax
  $('.article-header-image').each(function () {
    var scrollTop = $(window).scrollTop();
    var imgPos = scrollTop / 2 + 'px';
    if ($(this).isInViewport()) {
      $(this).find('img').css('transform', 'translateY(' + imgPos + ')');
    }

  })

});

if (isMobile === false) {
  document.addEventListener("DOMContentLoaded", function () {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }

            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });

      lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });
}
