// show/hide menu
const toggleMenu = (toggleId, navListId) => {
    //html -> js
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = toggle.getElementsByTagName("i")[0];

    if (toggle && navList) {
        //toggle click
        toggle.addEventListener('click', () => {
            navList.classList.toggle('show-menu');
            //change toggle icon: bx-menu <-> bx-x
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bx-x");
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

const addNow = (mainCardId) => {
    //html -> js
    const mainCard = document.getElementById(mainCardId);
    //지금 몇시? 다음 식사 -> 몇번째 카드인지
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    console.log(`${hour}시 ${minute}분`);
    minute = hour * 60 + minute; //현재 시와 분을 통해 분으로 단위통일
    //지금 시각 -> index
    //조식 끝: 7:30 -> 1
    //중식 끝: 13:10 -> 2
    //석식 끝: 18:10 -> 0
    if (18 * 60 + 10 <= minute) {
        index = 0;
    } else if (13 * 60 + 10 <= minute) {
        index = 2;
    } else if (7 * 60 + 30 <= minute) {
        index = 1;
    } else {
        index = 0;
    }

    let selectedCard = mainCard.getElementsByClassName('card')[index];
    //.now 클래스 추가
    selectedCard.classList.add('now');

}
addNow('main-card');