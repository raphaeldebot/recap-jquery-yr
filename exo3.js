const btnDarkMode=document.querySelector(".dark-mode-js")
btnDarkMode.addEventListener("click",function(){
   document.body.classList.toggle("bodyDarkMode")
})

$("#carte").click(function(){
        $(this).css("border","1px solid blue");
       })