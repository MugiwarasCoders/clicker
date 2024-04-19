const notEnoughMoney = 'Vous n\'avez pas suffisamment de pixelites pour cela!'
const gameEnded = 'Vous avez fini le jeu'

function clickAddPixelite(){
    counter += clickerGain
    $('.count').html(counter)
    localStorage.setItem('counter', counter)
    localStorage.setItem('clickerGain', clickerGain)
    localStorage.setItem('pixelitePerSecond', pixelitePerSecond)
    playClicSound()
}


//-----------------FULL SCREEN---------------------------------
$("#fullscreen-image").click(function() {
    var element = document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            element.webkitRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } 
    }
});

//----------------Sounds----------------
function playClicSound(){
    let clicSound = $('#clicSound')[0];
    clicSound.currentTime = 0; // Réinitialise le son à partir du début
    clicSound.play(); // Joue le son
}

function playButtonSound(){
    let buttonSound = $('#buttonSound')[0];
    buttonSound.currentTime = 0;
    buttonSound.play();
}

function muteSounds(){
    let sons = $('audio')
    for (let i = 0; i < sons.length; i++){
        sons[i].muted = !sons[i].muted;
        if (sons[i].muted){
            $('#muteSounds').attr('src', 'assets/img/mute.png')
        }
        else{
            $('#muteSounds').attr('src', 'assets/img/unmute.png')
        }
    }
}

//----------------Saves----------------
function save(){
    pixelitePerSecond = localStorage.getItem('pixelitePerSecond')
    clickerGain = localStorage.getItem('clickerGain')
    counter = localStorage.getItem('counter')
}

//----------------Prices----------------

function pricesInit(){
    $('#digibotPrice').html(DigiBot_Price+'<img class="unit" src="assets/img/pixelite.png">')
    localStorage.setItem('Digibot_Price', DigiBot_Price)    
    $('#gigabotPrice').html(GigaBot_Price+'<img class="unit" src="assets/img/pixelite.png">')
    localStorage.setItem('Gigabot_Price', GigaBot_Price)
    $('#pixeliteusePrice').html(Pixeliteuse_Price+'<img class="unit" src="assets/img/pixelite.png">')
    localStorage.setItem('Pixeliteuse_Price', Pixeliteuse_Price)
    $('#extracteurPrice').html(Extracteur_Price+'<img class="unit" src="assets/img/pixelite.png">')
    localStorage.setItem('Extracteur_Price', Extracteur_Price)
}

//La fonction rafraichit le compteur tous les 10èmes de seconde et permet de dévérouiller le objets 
//de la boutique quand le compteur atteint un certain seuil
function counterRefresh(){
    $('.count').html(counter)
    localStorage.setItem('counter', counter)
    unlock_DigiBot(counter)
    unlock_GigaBot(counter)
    unlock_Pixeliteuse(counter)
    unlock_Extracteur(counter)

    enableButton()
}

function ppsRefresh(){
    $('.pps').html(pixelitePerSecond)
    localStorage.setItem('pixelitePerSecond', pixelitePerSecond)
    counter += pixelitePerSecond
    counterRefresh()
}


//----------------Unlock Miners----------------

function unlock_DigiBot(counter){
    if (counter >= DigiBot_Price){
        $('#digibotName').html('Digibot')
        $('#digibotImg').attr('src', 'assets/img/Digibot.png')
    }
}

function unlock_GigaBot(counter){
    if (counter >= GigaBot_Price){
        $('#gigabotName').html('Gigabot')
        $('#gigabotImg').attr('src', 'assets/img/Gigabot.png')
    }
}

function unlock_Pixeliteuse(counter){
    if (counter >= Pixeliteuse_Price){
        $('#pixeliteuseName').html('Pixeliteuse')
        $('#pixeliteuseImg').attr('src', 'assets/img/Pixeliteuse.png')
    }
}

function unlock_Extracteur(counter){
    if (counter >= Extracteur_Price){
        $('#extracteurName').html('Extracteur')
        $('#extracteurImg').attr('src', 'assets/img/Extracteur.png')
    }
}

//------------Buy Miners----------------------

function buy_DigiBot(){
    let number = parseInt($('#digibotNumber').text())
    //Si le joueur a assez de pixelites
    if (counter >= DigiBot_Price){
        //On ajoute 1 au nombre possédé
        $('#digibotNumber').html(number+1)
        //Le compteur s'actualise en déduisant le prix
        counter = counter - DigiBot_Price
        counterRefresh()
        //Le prix augmente et s'actualise
        DigiBot_Price = DigiBot_Price * 2
        pricesInit()
        //On augmente les pixelites/seconde
        pixelitePerSecond += 1
        ppsRefresh()
    }
    else{
        notification(notEnoughMoney)
    }
    if ($('#digibotNumber').text() % 5 == 0){
        $('.digibots').append('<img src="assets/img/Digibot.png">')
    }
}

function buy_GigaBot(){
    let number = parseInt($('#gigabotNumber').text())
    //Si le joueur a assez de pixelites
    if (counter >= GigaBot_Price){
        //On ajoute 1 au nombre possédé
        $('#gigabotNumber').html(number+1)
        //Le compteur s'actualise en déduisant le prix
        counter = counter - GigaBot_Price
        counterRefresh()
        //Le prix augmente et s'actualise
        GigaBot_Price = GigaBot_Price * 3
        pricesInit()
        //On augmente les pixelites/seconde
        pixelitePerSecond += 10
        ppsRefresh()
    }
    else{
        notification(notEnoughMoney)
    }
    if ($('#gigabotNumber').text() % 5 == 0){
        $('.gigabots').append('<img src="assets/img/Gigabot.png">')
    }
}

function buy_Pixeliteuse(){
    let number = parseInt($('#pixeliteuseNumber').text())
    //Si le joueur a assez de pixelites
    if (counter >= Pixeliteuse_Price){
        //On ajoute 1 au nombre possédé
        $('#pixeliteuseNumber').html(number+1)
        //Le compteur s'actualise en déduisant le prix
        counter = counter - Pixeliteuse_Price
        counterRefresh()
        //Le prix augmente et s'actualise
        Pixeliteuse_Price = Pixeliteuse_Price * 4
        pricesInit()
        //On augmente les pixelites/seconde
        pixelitePerSecond += 100
        ppsRefresh()
    }
    else{
        notification(notEnoughMoney)
    }
    if ($('#pixeliteuseNumber').text() % 5 == 0){
        $('.pixeliteuses').append('<img src="assets/img/Pixeliteuse.png">')
    }
}

function buy_Extracteur(){
    let number = parseInt($('#extracteurNumber').text())
    //Si le joueur a assez de pixelites
    if (counter >= Extracteur_Price){
        //On ajoute 1 au nombre possédé
        $('#extracteurNumber').html(number+1)
        //Le compteur s'actualise en déduisant le prix
        counter = counter - Extracteur_Price
        counterRefresh()
        //Le prix augmente et s'actualise
        Extracteur_Price = Extracteur_Price * 6
        pricesInit()
        //On augmente les pixelites/seconde
        pixelitePerSecond += 300
        ppsRefresh()
    }
    else{
        notification(notEnoughMoney)
    }
    if ($('#extracteurNumber').text() % 5 == 0){
        $('.extracteurs').append('<img src="assets/img/Extracteur.png">')
    }
}

//------------Animation Functions----------------------

function popPixelite(event){
    let Animates = ["animate__fadeOutTopLeft", "animate__fadeOutTopRight", "animate__fadeOutBottomLeft", "animate__fadeOutBottomRight"]
    let randomAnimate = Animates[Math.floor(Math.random() * Animates.length)]
    $('.mine').append('<img src="assets/img/pixelite.png" class="popPixelite animate__animated '+randomAnimate+' ">')
    let posX = event.pageX - $(event.currentTarget).offset().left;
    let posY = event.pageY - $(event.currentTarget).offset().top; 
    $('.popPixelite').css({
        left: posX,
        top: posY
    }).fadeIn()
}

function shakeStone(){
    $('.mine').addClass('animate__animated animate__bounceOut').fadeIn()
    setTimeout(function(){$('.mine').removeClass('animate__animated animate__bounceOut')}, 100)
}

//------------Interface----------------------
function notification(texte){
    $('.notification').text(texte).fadeIn();
    setTimeout(function(){$('.notification').text(texte).fadeOut()}, 2000);
}

function enableButton(){
    $('.prix_nom_achat').each(function(){
        // let counter = localStorage.getItem('counter')
        let nom = $(this).find('.nom_achat').text()
        let price = localStorage.getItem(''+nom+'_Price')
        if (counter >= price && price != null){
            $(this).parent('.achat_image_chiffre').removeClass('disabled')
        }
        else{
            $(this).parent('.achat_image_chiffre').addClass('disabled')
            $()
        }
    })
}


//------------Buy PickAxes----------------------
function changeCursor(class_name) {
    $('#mine').addClass(class_name);
}

//---------------WoodPickAxe------------------------
function unlock_woodPickaxe(){
    if (counter >= wooden_pickAxe_Price){
        // $('.image_mineur').attr('src', 'assets/img/mineur_bois.gif')
        counter = counter - wooden_pickAxe_Price;
        pixelitePerSecond += 100
        ppsRefresh();
        changeCursor('curseur_pioche_bois');
        $('#cadenas_pioche_en_bois').attr('src', '../assets/img/image_cadenas_ouvert.png');
        $('#prix_pioche_en_bois').html('débloqué !');
        $('#prix_pioche_en_bois').css('color', 'green')
        setTimeout(function() {$('#prix_pioche_en_bois').fadeOut('slow');}, 1200);
        setTimeout(function() {$('#cadenas_pioche_en_bois').fadeOut('slow');}, 800);
        $('#pioche_en_pierre').html('Pioche en pierre 🗿');
        $('#image_pioche_en_pierre').attr('src', '../assets/img/pioche_en_pierre.webp');
        $('#prix_pioche_en_pierre').html("Prix : " + stone_pickAxe_Price + "<img src='assets/img/pixelite.png' alt='image pixelite' class='prix_pioche'/>");
    }
}   

//---------------StonePickAxe------------------------
function unlock_stonePickaxe(){
    // Vérifie si la pioche en bois est débloquée
        // Si la pioche en bois est débloquée et que le compteur est suffisant pour la pioche en pierre
        if (counter >= stone_pickAxe_Price){
            // Effectue les actions pour débloquer la pioche en pierre
            counter = counter - stone_pickAxe_Price;
            changeCursor('curseur_pioche_pierre');
            $('#cadenas_pioche_en_pierre').attr('src', '../assets/img/image_cadenas_ouvert.png');
            $('#prix_pioche_en_pierre').html('débloqué !');
            $('#prix_pioche_en_pierre').css('color', 'green')
            setTimeout(function() {$('#prix_pioche_en_pierre').fadeOut('slow');}, 1200); 
            setTimeout(function() {$('#cadenas_pioche_en_pierre').fadeOut('slow');}, 800); 
            $('#pioche_en_fer').html('Pioche en pierre 🪨');
            $('#image_pioche_en_fer').attr('src', '../assets/img/pioche_en_fer.webp');
            $('#prix_pioche_en_fer').html("Prix : " + iron_pickAxe_Price + "<img src='assets/img/pixelite.png' alt='image pixelite' class='prix_pioche'/>");
        }
    }

//---------------IronPickAxe------------------------
function unlock_ironPickaxe(){
    // Vérifie si la pioche en bois est débloquée
        // Si la pioche en bois est débloquée et que le compteur est suffisant pour la pioche en pierre
        if (counter >= iron_pickAxe_Price){
            // Effectue les actions pour débloquer la pioche en pierre
            counter = counter - iron_pickAxe_Price;
            changeCursor('curseur_pioche_fer');
            $('#cadenas_pioche_en_fer').attr('src', '../assets/img/image_cadenas_ouvert.png');
            $('#prix_pioche_en_fer').html('débloqué !');
            $('#prix_pioche_en_fer').css('color', 'green')
            setTimeout(function() {$('#prix_pioche_en_fer').fadeOut('slow');}, 1200); 
            setTimeout(function() {$('#cadenas_pioche_en_fer').fadeOut('slow');}, 800); 
            $('#pioche_en_fer').html('Pioche en fer 🪨');
            $('#image_pioche_en_or').attr('src', '../assets/img/pioche_en_or.webp');
            $('#prix_pioche_en_or').html("Prix : " + gold_pickAxe_Price + "<img src='assets/img/pixelite.png' alt='image pixelite' class='prix_pioche'/>");
        }
    }


//---------------GoldPickAxe------------------------
function unlock_goldPickaxe(){
    // Vérifie si la pioche en bois est débloquée
        // Si la pioche en bois est débloquée et que le compteur est suffisant pour la pioche en pierre
        if (counter >= gold_pickAxe_Price){
            // Effectue les actions pour débloquer la pioche en pierre
            counter = counter - gold_pickAxe_Price;
            changeCursor('curseur_pioche_or');
            $('#cadenas_pioche_en_or').attr('src', '../assets/img/image_cadenas_ouvert.png');
            $('#prix_pioche_en_or').html('débloqué !');
            $('#prix_pioche_en_or').css('color', 'green')
            setTimeout(function() {$('#prix_pioche_en_or').fadeOut('slow');}, 1200); 
            setTimeout(function() {$('#cadenas_pioche_en_or').fadeOut('slow');}, 800); 
            $('#pioche_en_or').html('Pioche en or 🪙');
            $('#image_pioche_en_diamant').attr('src', '../assets/img/pioche_en_diamant.webp');
            $('#prix_pioche_en_diamant').html("Prix : " + diamond_pickAxe_Price + "<img src='assets/img/pixelite.png' alt='image pixelite' class='prix_pioche'/>");
        }
    }
    

//---------------DiamondPickAxe------------------------
function unlock_diamondPickaxe(){
    // Vérifie si la pioche en bois est débloquée
        // Si la pioche en bois est débloquée et que le compteur est suffisant pour la pioche en pierre
        if (counter >= diamond_pickAxe_Price){
            // Effectue les actions pour débloquer la pioche en pierre
            counter = counter - diamond_pickAxe_Price;
            changeCursor('curseur_pioche_diamant');
            $('#cadenas_pioche_en_diamant').attr('src', '../assets/img/image_cadenas_ouvert.png');
            $('#prix_pioche_en_diamant').html('débloqué !');
            $('#prix_pioche_en_diamant').css('color', 'green')
            setTimeout(function() {$('#prix_pioche_en_diamant').fadeOut('slow');}, 1200); 
            setTimeout(function() {$('#cadenas_pioche_en_diamant').fadeOut('slow');}, 800); 
            $('#pioche_en_diamant').html('Pioche en diamant 💎');
            $('#image_pioche_en_netherite').attr('src', '../assets/img/pioche_en_netherite.webp');
            $('#prix_pioche_en_netherite').html("Prix : " + netherite_pickAxe_Price + "<img src='assets/img/pixelite.png' alt='image pixelite' class='prix_pioche'/>");
        }
    }

//---------------DnetheritePickAxe------------------------
function unlock_netheritePickaxe(){
    // Vérifie si la pioche en bois est débloquée
        // Si la pioche en bois est débloquée et que le compteur est suffisant pour la pioche en pierre
        if (counter >= netherite_pickAxe_Price){
            // Effectue les actions pour débloquer la pioche en pierre
            counter = counter - netherite_pickAxe_Price;
            changeCursor('curseur_pioche_netherite');
            $('#cadenas_pioche_en_netherite').attr('src', '../assets/img/image_cadenas_ouvert.png');
            $('#prix_pioche_en_netherite').html('débloqué !');
            $('#prix_pioche_en_netherite').css('color', 'green')
            setTimeout(function() {$('#prix_pioche_en_netherite').fadeOut('slow');}, 1200); 
            setTimeout(function() {$('#cadenas_pioche_en_netherite').fadeOut('slow');}, 800); 
            $('#pioche_en_netherite').html('Pioche en netherite ☄️');
            $('#image_pioche_en_pixelite').attr('src', '../assets/img/pioche_en_pixelite.webp');
            $('#prix_pioche_en_pixelite').html("Prix : " + pixelite_pickAxe_Price + "<img src='assets/img/pixelite.png' alt='image pixelite' class='prix_pioche'/>");
        }
    }
        
//---------------PxelitePickAxe------------------------
function unlock_pixelite_Pickaxe(){
    // Vérifie si la pioche en bois est débloquée
        // Si la pioche en bois est débloquée et que le compteur est suffisant pour la pioche en pierre
        if (counter >= pixelite_pickAxe_Price){
            // Effectue les actions pour débloquer la pioche en pierre
            counter = counter - pixelite_pickAxe_Price;
            changeCursor('curseur_pioche_pixelite');
            $('#cadenas_pioche_en_pixelite').attr('src', '../assets/img/image_cadenas_ouvert.png');
            $('#prix_pioche_en_pixelite').html('débloqué !');
            $('#prix_pioche_en_pixelite').css('color', 'green')
            setTimeout(function() {$('#prix_pioche_en_pixelite').fadeOut('slow');}, 1200); 
            setTimeout(function() {$('#cadenas_pioche_en_pixelite').fadeOut('slow');}, 800); 
            $('#pioche_en_pixelite').html('Pioche en pixelite ' + "<img src='assets/img/pixelite.png' alt='image pixelite' class='pixelite_emoji'/>");

        }
    }


