
window.onscroll = function() {myFunction()};


var options = document.getElementById("options");


function myFunction() {



  if (window.pageYOffset >= 110) {
    
    options.classList.add("sticky");
    


  } else {
    options.classList.remove("sticky");

  }
}