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
let iron_pickAxe_Price = 15
let gold_pickAxe_Price = 20
let diamond_pickAxe_Price = 30
let netherite_pickAxe_Price = 40
let pixelite_pickAxe_Price = 50



$(document).ready(function(){
    $('.carousel').carousel();//Animation carousel
    $('.mine').click(clickAddPixelite)
    pricesInit()
    //------------------Buy Miners-----------------------
    $('#digibotButton').click(buy_DigiBot)
    $('#gigabotButton').click(buy_GigaBot)
    setInterval(ppsRefresh, 1000); // Appelle updatePixelitesPerSecond() toutes les secondes

    //--------------------Price wooden pickaxe-------------
    $('#prix_pioche_en_bois').html("Prix : " + wooden_pickAxe_Price + "<img src='assets/img/pixelite.png' alt='image pixelite' class='pixelite_valeur'/>");
    //------------------Buy PickAxes-----------------------
    $('#cadenas_pioche_en_bois').click(unlock_woodPickaxe)
    $('#cadenas_pioche_en_pierre').click(unlock_stonePickaxe)
    $('#cadenas_pioche_en_fer').click(unlock_ironPickaxe)
    $('#cadenas_pioche_en_or').click(unlock_goldPickaxe)
    $('#cadenas_pioche_en_diamant').click(unlock_diamondPickaxe)
    $('#cadenas_pioche_en_netherite').click(unlock_netheritePickaxe)
    $('#cadenas_pioche_en_pixelite').click(unlock_pixelite_Pickaxe)

})


//------------------Animations-----------------------
$('.mine').click(function(){
    if (counter === 0){
        $('.image_mineur').attr('src', 'assets/img/animation_mineur.gif')
    } 
})

//------------------CHANGEMENT SOURIS-----------------------

