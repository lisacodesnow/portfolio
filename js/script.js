const navLinks = document.getElementById("myLinks");
const hamburgerIcon = document.querySelector("i")
const mediaQuery = window.matchMedia('(min-width: 768px)');
const mobileMediaQuery = window.matchMedia('(max-width: 767px)');


/*window.onscroll = function() {myFunction()};
			
			var header = document.querySelector("header");
			var sticky = header.offsetTop;
			
			function myFunction() {
			  if (window.pageYOffset > sticky) {
				header.classList.add("sticky");
			  } else {
				header.classList.remove("sticky");
			  }
			}*/

      function myFunction() {
       
        if (navLinks.style.display === "block") {
          navLinks.style.display = "none";
        } else  {
          navLinks.style.display = "block";
        }
      
    }
   
 



