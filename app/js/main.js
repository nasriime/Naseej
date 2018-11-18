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

  owl("#individuals");

  $(".services-index__item").click(function() {
    $(".services-index__item").removeClass("active");
    $(this).addClass("active");

    $(".user .container >div").removeClass("active");
    var id = $(this).data("id");
    console.log(id);
    $(id).addClass("active");
    owl(id);
  });
});

function owl(id) {
  $(id).owlCarousel({
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
}
