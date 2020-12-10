(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 54,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 56,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).on("scroll", navbarCollapse);

  // Hide navbar when modals trigger
  $(".portfolio-modal").on("show.bs.modal", function (e) {
    $(".navbar").addClass("d-none");
  });
  $(".portfolio-modal").on("hidden.bs.modal", function (e) {
    $(".navbar").removeClass("d-none");
  });
})(jQuery); // End of use strict

// Message Sent Message Contact Form
function messageSent() {
  $(".alert-success").fadeIn(300);
  setTimeout(function () {
    $(".alert-success").fadeOut(300);
  }, 3000);
}

function alertSent() {
  $(".alert-danger").fadeIn(300);
  setTimeout(function () {
    $(".alert-danger").fadeOut(300);
  }, 3000);
}

$("#onClickModal").on("click", function () {
  if (
    $("#fname").val() == "" ||
    $("#mail").val() == "" ||
    $("#textarea").val() == ""
  ) {
    alertSent();
  } else {
    messageSent();
    $("#mainForm").trigger("reset");
  }
});

$("#onClick").on("click", function () {
  if (
    $("#fname1").val() == "" ||
    $("#mail1").val() == "" ||
    $("#textarea1").val() == ""
  ) {
    alertSent();
  } else {
    Swal.fire("Thank You!", "Your message has been sent.", "success");
    setTimeout(function () {
      $("#bodyForm").trigger("reset");
    }, 3000);
  }
});
