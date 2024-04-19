const notEnoughMoney = 'Vous n\'avez pas assez de pixelites pour cela!'

function clickAddPixelite(){
    counter += clickerGain
    $('.count').html(counter)
    unlock_DigiBot(counter)
    unlock_GigaBot(counter)
    unlock_Pixeliteuse(counter)
    unlock_Extracteur(counter)
    localStorage.setItem('counter', counter)
    localStorage.setItem('clickerGain', clickerGain)
    localStorage.setItem('pixelitePerSecond', pixelitePerSecond)
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
    $('#gigabotPrice').html(GigaBot_Price+'<img class="unit" src="assets/img/pixelite.png">')
    $('#pixeliteusePrice').html(Pixeliteuse_Price+'<img class="unit" src="assets/img/pixelite.png">')
    $('#extracteurPrice').html(Extracteur_Price+'<img class="unit" src="assets/img/pixelite.png">')
}

function counterRefresh(){
    $('.count').html(counter)
    localStorage.setItem('counter', counter)
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
        $('#digibotButton').prop('disabled', false)
    }
}

function unlock_GigaBot(counter){
    if (counter >= GigaBot_Price){
        $('#gigabotName').html('Gigabot')
        $('#gigabotImg').attr('src', 'assets/img/Gigabot.png')
        $('#gigabotButton').prop('disabled', false)
    }
}

function unlock_Pixeliteuse(counter){
    if (counter >= Pixeliteuse_Price){
        $('#pixeliteuseName').html('Pixeliteuse')
        $('#pixeliteuseImg').attr('src', 'assets/img/Pixeliteuse.png')
        $('#pixeliteuseButton').prop('disabled', false)
    }
}

function unlock_Extracteur(counter){
    if (counter >= Extracteur_Price){
        $('#extracteurName').html('Extracteur')
        $('#extracteurImg').attr('src', 'assets/img/Extracteur.png')
        $('#extracteurButton').prop('disabled', false)
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
        console.log(notEnoughMoney)
        alert(notEnoughMoney)
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
        console.log(notEnoughMoney)
        alert(notEnoughMoney)
    }
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
            setTimeout(function() {$('#prix_pioche_en_pixelite').fadeOut('slow');}, 1200); 
            setTimeout(function() {$('#cadenas_pioche_en_pixelite').fadeOut('slow');}, 800); 
            $('#pioche_en_pixelite').html('Pioche en pixelite ' + "<img src='assets/img/pixelite.png' alt='image pixelite' class='pixelite_emoji'/>");

        }
    }


//---------------Mute son------------------------


var myAudio = $("audio");
var muteButton = $("#mute");

muteButton.click(function() {
    if (myAudio.prop("muted")) {
        myAudio.prop("muted", false);
        muteButton.attr("src", "assets/img/unmute.png").attr("alt", "Mute");
    } else {
        myAudio.prop("muted", true);
        muteButton.attr("src", "assets/img/mute.png").attr("alt", "Unmute");
    }
});

//---------------Bruit Souris------------------------


var clickSound = $("#clickSound")[0]; // Sélectionne l'élément audio par son ID
var rocher = $("#rocher");
// Ajoute un écouteur d'événements pour le clic de la souris
$(rocher).on("click", function() {
     // Réinitialise la position de lecture du son à zéro
     clickSound.currentTime = 0;
    // Joue le son
    clickSound.play();
});



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
