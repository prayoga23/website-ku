// Humberger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Typing effect di halaman home
const txtElement = ['Front End Developer','Web Developer', 'UI/UX Designer Freelancer', 'Mobile Developer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function tik() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.otomatis-ketik').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(tik, 500);


})();