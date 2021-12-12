const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.nav-list')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 580) mainnav.classList.remove('responsive')};