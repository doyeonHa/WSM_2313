// show/hide menu
const toggleMenu = (toggleId, navListId) => {
    //html -> js
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);

    if (toggle && navList) {
        //toggle click
        toggle.addEventListener('click', () => {
            navList.classList.toggle('show-menu');
        });
        //show/hide menu: .show-menu
    }
}
toggleMenu("nav-toggle", "nav-list");

// const say = () => console.log("hello world4");

// const say = () => {
//     console.log("hello world3");
// };

// const say = function() {
//     console.log("hello world2");
// }

// function say() {
//     console.log("hello world");
// }

// say();