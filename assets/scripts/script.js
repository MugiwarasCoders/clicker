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
let pioche_en_pierre_Price = 5
let pioche_en_fer_Price = 500
let pioche_en_or_Price = 2000
let pioche_en_diamant_Price = 5000
let pioche_en_netherite_Price = 10000
let pioche_en_pixelite_Price = 20000



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

//------------------BOUTON AMELIORER PIOCHE-----------------------
$('.bouton_acheter').click(function(){
    $('#bouton_acheter').ready(unlock_pioche_en_bois)
    
})



