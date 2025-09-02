window.location.href = "https://portfolio-75an.onrender.com";

const menuButton = document.getElementById("menu");
const menuView = document.getElementById("menu-view");
const menuViewHeight = menuView.offsetHeight;
const welcomeSection = document.getElementById("welcome-section");
menuView.style.display = "none"; 
clicked = false;

menuButton.addEventListener("click", () => {
    clicked = !clicked;
    const menuLinks = clicked ? 
      (menuView.style.display = "flex",
       welcomeSection.style.marginTop = `calc(175px + 20px + ${menuViewHeight}px)`) :
      (menuView.style.display = "none",
       welcomeSection.style.marginTop = `175px`)  ; 
});
