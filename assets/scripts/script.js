let pixelitePerSecond = 0;
let clickerGain = 1;
let counter = 0;

//Prix
//Mineurs
let DigiBot_Price = 20;
let GigaBot_Price = 30; 
let Pixeliteuse_Price = 500;
let Extracteur_Price = 2000;

//Pioches
let pioche_en_bois_Price = 5

$(document).ready(function(){
    $('.carousel').carousel();//Animation carousel
    pricesInit()
    $('.mine').click(clickAddPixelite)
    //------------------Buy Miners-----------------------
    $('#digibotButton').click(buy_DigiBot)
    $('#gigabotButton').click(buy_GigaBot)
    $('#pixeliteuseButton').click(buy_Pixeliteuse)
    $('#extracteurButton').click(buy_Extracteur)
    setInterval(ppsRefresh, 1000); // Appelle ppsRefresh() toutes les secondes
    setInterval(counterRefresh, 100); // Appelle ppsRefresh() toutes les secondes
})

//------------------Animations-----------------------
let i = 0
$('.mine').click(function(){
    //On initialise le mouvement du mineur au premier clic
    if (counter === 0){
        $('.image_mineur').attr('src', 'assets/img/mineur_bois.gif')
    }
    i++
    //Le mineur de pixelite mine à chaque clic
    if (i%2 === 0){
        $('.mineurPixelite').attr('src', 'assets/img/mineurPixelite2.png')
    }
    else{
        $('.mineurPixelite').attr('src', 'assets/img/mineurPixelite.png')
    }
    //On fait apparaître des pixelites dans des directions random à chaque clic
    popPixelite(event)
})

$('.bouton_ameliorer').click(function(){
    unlock_stonePickaxe()
})



