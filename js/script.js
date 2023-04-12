
const hamburgerIcon = document.querySelector("i")
const mediaQuery = window.matchMedia('(max-width: 600px)');

//console.log(mediaQuery)



window.onscroll = function() {myFunction()};
			
			var header = document.querySelector("header");
			var sticky = header.offsetTop;
			
			function myFunction() {
			  if (window.pageYOffset > sticky) {
				header.classList.add("sticky");
			  } else {
				header.classList.remove("sticky");
			  }
			}

      function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

/*hamburgerIcon.addEventListener("click", ()=>{
    if (myLinks.style.display === "flex") {
        myLinks.style.display = "none";
      } else {
        myLinks.style.display = "flex";
      }


});*/

/*const noHamburgerMenu = () =>{

    if (mediaQuery.matches) { // If media query matches
        document.body.style.backgroundColor = "yellow";
      } else {
        document.body.style.backgroundColor = "pink";
      }
    

};

noHamburgerMenu();*/