let toggle = document.querySelector(".menu-toggle");
let navbar = document.querySelector("nav");
let menu = document.querySelector(".navigation");
let main = document.querySelector(".main")

toggle.onclick = function() {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
    menu.classList.toggle('active');
    main.classList.toggle('active');
}

