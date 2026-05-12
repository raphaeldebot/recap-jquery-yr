// DARK MODE
$(".dark-mode-js").on("click", function () {
  $("body").toggleClass("bodyDarkMode");
});
// -------------------
// MENU

// -------------------
// CARDS
$(".card-01-js").on("click", function () {
  $(this)
    .animate({ bottom: "20px", opacity: 0.6 }, 700)
    .animate({ bottom: "0", opacity: 1 }, 400, "swing");
});

$(".card-02-js").on("click", function () {
  $(this).html("<strong>DOM</strong> <small>updated</small>");
});

let deg = 0;
$(".card-03-js").on("click", function () {
  $(this)
    .css({
      transform: `rotate(${(deg += 360)}deg)`,
      backgroundColor: "green",
    })
    .animate({ left: "100px" }, 250)
    .animate({ left: "0px" }, 250, function () {
      $(this).css("backgroundColor", "#ffffff");
    });
});

// -------------------

// CONTROLS
$("#lancer").click(function () {
  $(".box1")
    .animate({ left: "100px" })
    .animate({ top: "100px" }, function () {
      $(".box1").css("backgroundColor", "red");
    })
    .animate({ left: "0px" })
    .animate({ top: "0px" });
});

$("#stop").click(function () {
  $(".box1").stop();
});

$(".box1").click(function () {
  $(this)
    .animate({ left: "+=100px" })
    .animate({ top: "+=100px" }, function () {
      $(this).css("backgroundColor", "red");
    })
    .animate({ left: "-=100px" })
    .animate({ top: "-=100px" });
});

$(".box2").click(function () {
  $(this).animate({ BorderRadius: "50%" });
});

$(".box3").click(function () {
  $(this).animate({ left: "100px" });
});

$(".box4").click(function () {
  $(this).animate({ rotate: "+=360deg" });
});
// NOTIFICATION BTN
$(".btn-notif-js").on("click", function () {
  $(".notification").animate({ bottom: "130px" }, 600);
  setTimeout(() => {
    $(".notification").animate({ bottom: "-100px" }, 600);
  }, 2000);
});
// -------------------
