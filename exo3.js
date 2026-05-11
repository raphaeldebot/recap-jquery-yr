// DARK MODE 
$(".dark-mode-js").on("click",function(){
   $("body").toggleClass("bodyDarkMode")
})
// -------------------
// MENU

// -------------------
// CARDS
$(".card-01-js").on("click",function(){
   $(this).animate({bottom:"20px"},2000,function(){
      $(this).animate({bottom:"0"},2000)
   })
})
$(".card-02-js").on("click",function(){
   
})
$(".card-03-js").on("click",function(){
  
})



// -------------------

// CONTROLS
$("#carte").click(function(){
        $(this).css("border","1px solid blue");
       });

$(".box1").click(function(){
   $(this).animate({left:"100px"})
   .animate({top:"100px"},function(){
      $(this).css("backgroundColor","red")
   })
   .animate({left:"0px"})
   .animate({top:"0px"})
})