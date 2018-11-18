$(document).ready(function() {
  $("#owl-1").owlCarousel({
    rtl: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $("#owl-2").owlCarousel({
    rtl: true,
    margin: 15,
    dots: false,
    nav: true,
    navText: [
      "<img src='./images/right.png'>",
      "<img src='./images/left.png'>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
});
