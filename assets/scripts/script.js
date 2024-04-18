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
let wooden_pickAxe_Price = 5
let stone_pickAxe_Price = 10
let iron_pickAxe_Price = 500
let gold_pickAxe_Price = 2000
let dimaond_pickAxe_Price = 5000
let netherite_pickaxe_Price = 10000
let pixelite_pickAxe_Price = 20000



$(document).ready(function(){
    $('.carousel').carousel();//Animation carousel
    $('.mine').click(clickAddPixelite)
    pricesInit()
    //------------------Buy Miners-----------------------
    $('#digibotButton').click(buy_DigiBot)
    $('#gigabotButton').click(buy_GigaBot)
    setInterval(ppsRefresh, 1000); // Appelle updatePixelitesPerSecond() toutes les secondes
    $('#cadenas_pioche_en_bois').click(unlock_woodPickaxe)
    $('#cadenas_pioche_en_pierre').click(unlock_stonePickaxe)

})


//------------------Animations-----------------------
$('.mine').click(function(){
    if (counter === 0){
        $('.image_mineur').attr('src', 'assets/img/animation_mineur.gif')
    } 
})

//------------------BOUTON AMELIORER PIOCHE-----------------------

// $('#cadenas_pioche_en_bois').click(unlock_stonePickaxe)

// $('#cadenas_pioche_en_pierre').click(unlock_pioche_en_pierre)
