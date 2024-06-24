let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menuIcon");

menuIcon.onclick = function(){
    menuBox.classList.toggle("open-menu")

    if(menuBox.classList.contains("open-menu")){
        menuIcon.src = "/media-assets/nav/close.png"
    }
    else{
        menuIcon.src = "/media-assets/nav/menu.png"
    }
}