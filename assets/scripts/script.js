let pixelitePerSecond = 0;
let clickerGain = 1;
let counter = 0;

//Prix
//Mineurs
let DigiBot_Price = 20;
let GigaBot_Price = 100; 
let Pixeliteuse_Price = 500;
let Extracteur_Price = 2000;

//Pioches
let pioche_en_bois_Price = 5

$(document).ready(function(){
    $('.carousel').carousel();//Animation carousel
    $('.mine').click(clickAddPixelite)
    pricesInit()
    //------------------Buy Miners-----------------------
    $('#digibotButton').click(buy_DigiBot)
    $('#gigabotButton').click(buy_GigaBot)
    setInterval(ppsRefresh, 1000); // Appelle updatePixelitesPerSecond() toutes les secondes
})


//------------------Animations-----------------------
$('.mine').click(function(){
    if (counter === 0){
        $('.image_mineur').attr('src', 'assets/img/animation_mineur.gif')
    } 
})



