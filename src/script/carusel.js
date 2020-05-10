const caruselSlide = document.querySelector('.carusel-slide');
const caruselImgages = document.querySelectorAll('.carusel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = caruselImgages[0].clientWidth;

caruselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//Button Listeners
nextBtn.addEventListener('click', () => {
    if (counter >= caruselImgages.length - 1) 
        return;

    caruselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    caruselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});


prevBtn.addEventListener('click', () => {
    if (counter <= 0) 
        return;

    caruselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    caruselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

caruselSlide.addEventListener('transitionend', () => {
    if (caruselImgages[counter].id === 'lastClone'){
        caruselSlide.style.transition = 'none';
        counter = caruselImgages.length - 2;
        caruselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }

    if (caruselImgages[counter].id === 'firstClone'){
        caruselSlide.style.transition = 'none';
        counter = caruselImgages.length - counter;
        caruselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
});