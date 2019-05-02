$(document).ready(function() {
  $("#temperature-F").on("click", e => {
    if ($("#temperature-F").hasClass("active")) {
      console.log("not firing");

      return;
    }
    $("#temperature-C").removeClass("active");
    $("#temperature-F").addClass("active");
    $(".view-temperature-icon").html("F");
    const temp = document.getElementsByClassName("view-temperature");
    for (let index = 0; index < temp.length; index++) {
      const element = temp[index];
      element.innerText = changeTemperature("F", element.innerText);
    }
  });
  $("#temperature-C").on("click", e => {
    $("#temperature-F").removeClass("active");
    $("#temperature-C").addClass("active");
    $(".view-temperature-icon").html("C");
    const temp = document.getElementsByClassName("view-temperature");
    for (let index = 0; index < temp.length; index++) {
      const element = temp[index];
      element.innerText = changeTemperature("C", element.innerText);
    }
  });
  function changeTemperature(params, value) {
    if (params === "F") {
      return Math.round((value * 9) / 5 + 32);
    } else {
      return Math.round(((value - 32) * 5) / 9);
    }
  }
  $("html, body").animate(
    {
      scrollTop: 0
    },
    500,
    "linear"
  );
  // scrolling effect
  $(document).on("scroll", function() {
    const section = $("#news").offset().top;
    const currentPosition = $(document).scrollTop();
    // console.log(section, currentPosition);
    if (currentPosition > section - 45) {
      $("nav").addClass("bg-danger");
    } else {
      $("nav").removeClass("bg-danger");
    }
  });
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
const owlNews = $(".owl-news");
function createOwlNews() {
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
}
function destroyOwlNews() {
  owlNews.owlCarousel("destroy");
}

const owlForecast = $(".owl-forecast");
function createOwlForecast() {
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
}
function destroyOwlForecast() {
  owlForecast.owlCarousel("destroy");
}
