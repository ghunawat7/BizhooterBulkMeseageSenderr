window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("nav").style.backgroundColor = "white";
      document.getElementById("nav").style.boxShadow="0 0 5px #999999"; 
      document.getElementById("nav").style.transition="0.3s"; 
      
    } else {
        document.getElementById("nav").style.backgroundColor = "";
        document.getElementById("nav").style.boxShadow="0 0 0px "; 
    }
    
    if(document.body.scrollTop>150 || document.documentElement.scrollTop>150)
    {
        document.getElementById("arrowbtn").style.display="inline";
        
    }
    else{
      document.getElementById("arrowbtn").style.display="none";

   }
}