const x = document.getElementById("myLinks");
const hamburgerIcon = document.querySelector("i")
const mediaQuery = window.matchMedia('(max-width: 600px)');

//console.log(mediaQuery)

function myFunction() {
  
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