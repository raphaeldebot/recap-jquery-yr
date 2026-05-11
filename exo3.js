
$(".dark-mode-js").on("click",function(){
   $("body").toggleClass("bodyDarkMode");
});

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