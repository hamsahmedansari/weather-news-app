$(document).ready(function() {
  const owlForecast = $(".owl-forecast");
  owlForecast.owlCarousel({
    items: 7,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
      800: {
        items: 5
      },
      1000: {
        items: 7
      }
    }
  });
  $("#forecast-right").on("click", function() {
    owlForecast.trigger("next.owl.carousel");
  });
  $("#forecast-left").on("click", function() {
    owlForecast.trigger("prev.owl.carousel");
  });
});
