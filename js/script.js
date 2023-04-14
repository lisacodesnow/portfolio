const navLinks = document.getElementById("myLinks");
const hamburgerIcon = document.querySelector("i")
const mediaQuery = window.matchMedia('(min-width: 768px)');
const mobileMediaQuery = window.matchMedia('(max-width: 767px)');
//console.log(mediaQuery)
console.log(navLinks);


hamburgerIcon.addEventListener("click", () =>{
  navLinks.className.toggle("myLinks")
})


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

     /* function myFunction() {
       
        if (navLinks.style.display === "block") {
          navLinks.style.display = "none";
        } else {
          navLinks.style.display = "block";
        }
      }*/

/*hamburgerIcon.addEventListener("click", ()=>{
    if (myLinks.style.display === "flex") {
        myLinks.style.display = "none";
      } else {
        myLinks.style.display = "flex";
      }


});*/

/*const noHamburgerMenu = () =>{

    if (mobileMediaQuery.matches) { // If media query matches
        document.body.style.backgroundColor = "yellow";
      }
    else if(mediaQuery.matches){
      document.body.style.backgroundColor="black"
    }
};

noHamburgerMenu();*/

