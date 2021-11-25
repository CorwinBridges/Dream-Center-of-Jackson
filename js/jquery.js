$(function () {
  // Prevent Navbar Toggler Button from being Pressed until Transition is Finished
  $("button.navbar-toggler").on("click", function () {
    $("nav").toggleClass("toggler-bg");
    $("button.navbar-toggler").addClass("pe-none");
    setTimeout(function () {
      $("button.navbar-toggler").removeClass("pe-none");
    }, 350);
  });

  // Slide Up/Down Dropdown Menu on Hover
  $(".nav-item.dropdown").on("mouseenter", function () {
    $(this).children(".dropdown-menu").stop().slideDown("fast");
  }).on("mouseleave", function () {
    $(this).children(".dropdown-menu").stop().slideUp("fast");
  });

  // Scroll Zoom In & Out original script via Dotted Squirrel (https://www.dottedsquirrel.com/zoom-scroll-tutorial/)
  let zoom = 1;
  const ZOOM_SPEED = 0.3;

  // Zoom In on Mouse Wheel Up & Zoom Out on Mouse Wheel Down
  // $(".zoom").on("wheel", function (e) {
  //   if (e.originalEvent.deltaY !== 0) {
  //     if (e.originalEvent.deltaY < 0) {
  //       $(".zoom").css({
  //         transform: `scale(${(zoom += ZOOM_SPEED)})`,
  //       });
  //     } else if (zoom > 0.1) {
  //       $(".zoom").css({
  //         transform: `scale(${(zoom -= ZOOM_SPEED)})`,
  //       });
  //     }
  //   }
  // });

  // Zoom In Button
  // $(".zoomIn").on("click", function () {
  //   $(".zoom").css({
  //     transform: `scale(${(zoom += ZOOM_SPEED)})`,
  //   });
  // });

  // // Zoom Out Button
  // $(".zoomOut").on("click", function () {
  //   if (zoom > 0.1) {
  //     $(".zoom").css({
  //       transform: `scale(${(zoom -= ZOOM_SPEED)})`,
  //     });
  //   }
  // });

  // // Reset Zoom Button
  // $(".resetZoom").on("click", function () {
  //   $(".zoom").css({
  //     transform: `scale(${(zoom = 1)})`,
  //   });
  // });

  // // Make Element Draggable
  // $(".draggable").draggable();
  // $(".draggable").data({
  //   originalLeft: $(".draggable").css("left"),
  //   origionalTop: $(".draggable").css("top"),
  // });

  // // Reset Element's Position
  // $(".resetPos").on("click", function () {
  //   $(".draggable").css({
  //     left: $(".draggable").data("originalLeft"),
  //     top: $(".draggable").data("origionalTop"),
  //   });
  // });

  // Show Current Slide Number out of Total Slides
  var totalItems = $(".slideNumber").length;
  var currentIndex = $("div.active").index() + 1;
  $("#num").html("" + currentIndex + "/" + totalItems + "");
  $("#galleryCarousel").on("slid.bs.carousel", function () {
    currentIndex = $("div.active.slideNumber").index() + 1;
    $("#num").html("" + currentIndex + "/" + totalItems + "");
  });

  // Initialize Toast
  $("#toastBtn").on("click", function () {
    $("#toaster").toast("show");
  });

  // FitText
  $(".amore-header").fitText(2);
  $(".review-header").fitText(1.2);
  $(".index-header").fitText(1.4);
  $(".index-subheader").fitText(3.5);
















  var scale = 1,
    panning = false,
    xoff = 0,
    yoff = 0,
    start = {
      x: 0,
      y: 0,
    }

  $.fn.setTransform = function () {
    $(".zoom").css({
      transform: "translate(" + xoff + "px, " + yoff + "px) scale(" + scale + ")"
    });
  }

  $(".zoom").mousedown(function (e) {
    e.preventDefault();
    start = {
      x: e.clientX - xoff,
      y: e.clientY - yoff,
    };
    panning = true;
  })

  $(".zoom").mouseup(function (e) {
    panning = false;
  })

  $(".zoom").mousemove(function (e) {
    e.preventDefault();
    if (!panning) {
      return;
    }
    xoff = e.clientX - start.x;
    yoff = e.clientY - start.y;
    $.setTransform();
  })

  $(".zoom").on("wheel", function (e) {
    if (e.originalEvent.deltaY !== 0) {
      e.preventDefault();
      var xs = (e.clientX - xoff) / scale,
        ys = (e.clientY - yoff) / scale,
        delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;

      delta > 0 ? (scale *= 1.2) : (scale /= 1.2);

      xoff = e.clientX - xs * scale;
      yoff = e.clientY - ys * scale;

      $.fn.setTransform();
    }
  })
});