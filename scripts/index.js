const images = document.querySelectorAll('.image img')

images.forEach(function(img){
    img.onclick = function(){


        document.querySelector('.popup').style.display='block';
        document.querySelector('body').style.overflow='hidden';
        document.querySelector('.popup img').src = img.getAttribute('src');
    }
})


document.querySelector('.popup span').onclick = function(){

    document.querySelector('.popup').style.display='none';
    document.querySelector('body').style.overflow='auto';
    document.querySelector('.popup img').src ='';

}


const sliderLine = document.querySelector('.slider__line');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let offset = 0;


const goNext = function (){
    offset >= 1750 ? offset = 0: offset+= 350;
    sliderLine.style.right = offset + "px";
}

nextBtn.onclick = goNext;

const goprev = function (){
    offset <= 0 ? offset = 1750: offset-= 350;
    sliderLine.style.right = offset + "px";
};

prevBtn.onclick = goprev;

setInterval(gonext, 10000)