let pixelitePerSecond = 0;
let clickerGain = 1;
let counter = 0;

//Prix
//Mineurs
let DigiBot_Price = 20;
let GigaBot_Price = 30; 
let Pixeliteuse_Price = 500;
let Extracteur_Price = 2000;

//Prix
//Pioches
let wooden_pickAxe_Price = 0
let stone_pickAxe_Price = 200
let iron_pickAxe_Price = 1000
let gold_pickAxe_Price = 50000
let diamond_pickAxe_Price = 200000
let netherite_pickAxe_Price = 500000
let pixelite_pickAxe_Price = 1000000

let digibotProductivity = 1
let gigabotProductivity = 10
let pixeliteuseProductivity = 100
let extracteurProductivity = 1000




$(document).ready(function(){
    $('.carousel').carousel();//Animation carousel
    pricesInit()
    $('.mine').click(clickAddPixelite)
    $('.achat_image_chiffre').click(playButtonSound)
    $('#muteSounds').click(playButtonSound)
    $('#muteSounds').click(muteSounds)

    //------------------Buy Miners-----------------------
    $('#digibotButton').click(buy_DigiBot)
    $('#gigabotButton').click(buy_GigaBot)
    $('#pixeliteuseButton').click(buy_Pixeliteuse)
    $('#extracteurButton').click(buy_Extracteur)
    $('.prix_nom_achat').click(enableButton)
    setInterval(ppsRefresh, 1000); // Appelle ppsRefresh() toutes les secondes
    setInterval(counterRefresh, 100); // Appelle ppsRefresh() toutes les secondes

    //--------------------Price wooden pickaxe-------------
    $('#prix_pioche_en_bois').html("Prix : " + wooden_pickAxe_Price + "<img src='assets/img/pixelite.png' alt='image pixelite' class='pixelite_valeur'/>");

    //------------------Buy PickAxes-----------------------
    unlock_woodPickaxe()
    $('#cadenas_pioche_en_pierre').click(unlock_stonePickaxe)
    $('#cadenas_pioche_en_fer').click(unlock_ironPickaxe)
    $('#cadenas_pioche_en_or').click(unlock_goldPickaxe)
    $('#cadenas_pioche_en_diamant').click(unlock_diamondPickaxe)
    $('#cadenas_pioche_en_netherite').click(unlock_netheritePickaxe)
    $('#cadenas_pioche_en_pixelite').click(unlock_pixelite_Pickaxe)
    $('.achat_image_chiffre').mouseenter(floatingInfos) 
})


//------------------Animations-----------------------
let i = 0
$('.mine').click(function(){
    playSoundTrack()
    //On initialise le mouvement du mineur au premier clic
    let imageSrc = $('.image_mineur').attr('src')
    if (imageSrc === 'assets/img/mineur.png'){
        $('.image_mineur').attr('src', 'assets/img/mineur_bois.gif')
    }
    i++
    //Le mineur de pixelite mine à chaque clic
    if (i%2 === 0){
        $('.mineurPixelite').attr('src', 'assets/img/mineurPixelite.png')
    }
    else{
        $('.mineurPixelite').attr('src', 'assets/img/mineurPixelite2.png')
    }
    //On fait apparaître des pixelites dans des directions random à chaque clic
    popPixelite(event)
    //on fait trembler la roche
    shakeStone()
})