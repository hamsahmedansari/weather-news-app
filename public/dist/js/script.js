$(document).ready(function() {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    500,
    "linear"
  );

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

  const owlNews = $(".owl-news");
  owlNews.owlCarousel({
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
        items: 1
      },
      800: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  // scrolling effect
});
function changeSlide(params) {
  let dot = null;

  if (params === "news") {
    dot = "section1";
  } else if (params === "forecast") {
    dot = "section2";
  }
  $(`.section1,.section2`).removeClass("active");
  $(`.${dot}`).addClass("active");
  $("html, body").animate(
    {
      scrollTop: $(`#${params}`).offset().top
    },
    500,
    "linear"
  );
}
