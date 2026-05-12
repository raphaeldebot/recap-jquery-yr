// DARK MODE
$(".dark-mode-js").on("click", function () {
  $("body").toggleClass("bodyDarkMode");
});
// -------------------
// MENU

// -------------------
// CARDS
$(".card-01-js").on("click", function () {
  $(this).animate({ bottom: "20px" ,opacity:0.6}, 700).animate({ bottom: "0" ,opacity:1}, 400,"swing");
});

$(".card-02-js").on("click", function () {
  $(this).html("<strong>DOM</strong> <small>updated</small>");
});

$(".card-03-js").on("click", function () {
  $(this).animate({ bottom: "20px" }, 600).animate({ bottom: "0" }, 300);
});

// -------------------

// CONTROLS
// select animation
$(".box1, .box2, .box3, .box4").click(function () {
  $(".box1, .box2, .box3, .box4").removeClass("active");
  $(this).addClass("active");
});

// play the selected animation
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


// stop animation
$("#stop").click(function () {
  $(".box1,.box2,.box3,.box4").stop(true,false);
 });

$(".box4").click(function () {
  $(this).animate({ rotate: "+=360deg" });
});

// Show animation gallerie
 
 $("#afficher").click(function() {
  $(".animBox").slideDown(600)
 })

// Hide animation gallerie
 $("#masquer").click(function() {
  $(".animBox").slideUp(600)
 })


// NOTIFICATION BTN
$(".btn-notif-js").on("click", function () {
  $(".notification").animate({ bottom: "130px" }, 600);
  setTimeout(()=>{
    $(".notification").animate({ bottom: "-100px" }, 600)
  },2000)
});

// Input activate/disable

$("#enableBtn").click(function(){
  $("#inputAnim").removeAttr('disabled')
})

$("#disableBtn").click(function(){
  $("#inputAnim").attr('disabled','disabled')
})
