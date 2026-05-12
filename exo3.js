// DARK MODE
$(".dark-mode-js").on("click", function () {
  $("body").toggleClass("bodyDarkMode");
});
// -------------------
// MENU

// -------------------
// CARDS
$(".card-01-js").on("click", function () {
  $(this).animate({ bottom: "20px" }, 600).animate({ bottom: "0" }, 300);
});

$(".card-02-js").on("click", function () {
  $(this).animate({ bottom: "20px" }, 600).animate({ bottom: "0" }, 300);
});

$(".card-03-js").on("click", function () {
  $(this).animate({ bottom: "20px" }, 600).animate({ bottom: "0" }, 300);
});

// -------------------

// CONTROLS

$(".box1, .box2, .box3, .box4").click(function () {
  $(".box1, .box2, .box3, .box4").removeClass("active");
  $(this).addClass("active");
});


$("#lancer").click(function () {
  let activeBox = $(".active");

  if (activeBox.hasClass("box1")) {
    activeBox.animate({ left: "100px" })
    .animate({ top: "100px" }, function () {
      $(this).css("backgroundColor", "red");
    })
    .animate({ left: "0px" })
    .animate({ top: "0px" });
  }

  if (activeBox.hasClass("box2")) {
    activeBox.animate({ borderRadius: "50%" });
  }

  if (activeBox.hasClass("box3")) {
    activeBox.animate({ left: "100px" });
  }

  if (activeBox.hasClass("box4")) {
    activeBox.animate({ rotate: "+=360deg" });
  }
});

$("#stop").click(function () {
  $(".box1,.box2,.box3,.box4").stop(true,false);
 });

 
 $("#afficher").click(function() {
  $(".animBox").slideDown(600)
 })


 $("#masquer").click(function() {
  $(".animBox").slideUp(600)
 })