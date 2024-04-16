let pixelitePerSecond = 0;
let clickerGain = 1;
let counter = 0;

//Prix

let DigiBot_Price = 20;
let GigaBot_Price = 30; 

$(document).ready(function(){
    $('.carousel').carousel();//Animation carousel
    $('.mine').click(clickAddPixelite)
})



//------------------Animations-----------------------
$('.mine').click(function(){
    if (counter === 0){
        $('.image_mineur').attr('src', 'assets/img/animation_mineur.gif')
    } 
})

