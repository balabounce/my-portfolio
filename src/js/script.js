const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const statPer = document.querySelectorAll('.stats__item-percents'),
        lines = document.querySelectorAll('.stats__item-scale.filling');
console.log(lines)
statPer.forEach( (item,i) => {
    lines[i].style.width = item.innerHTML;
});