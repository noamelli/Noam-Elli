

//pull the pathname from window location
// const activePage = window.location.pathname;
// console.log(window);
// console.log(window.location);
// console.log(activePage);

/*create an arey of the links in nav, 
compare each to pathname and mark the one that is active
*/ 
const navLinks = document.querySelectorAll("navigation").forEach(link => {    
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
});
