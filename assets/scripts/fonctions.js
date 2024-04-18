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
function unlock_woodPickaxe(){
    if (counter >= wooden_pickAxe_Price){
        // $('.image_mineur').attr('src', 'assets/img/mineur_bois.gif')
         counter = counter - wooden_pickAxe_Price;
        $('#cadenas_pioche_en_bois').attr('src', '../assets/img/image_cadenas_ouvert.png');
        $('#prix_pioche_en_bois').html('débloqué');
        $('#cadenas_pioche_en_bois').fadeOut("slow");
        $('#pioche_en_pierre').html('Pioche en pierre 🗿');
        $('#image_pioche_en_pierre').attr('src', '../assets/img/pioche_en_pierre.webp');
        $('#prix_pioche_en_pierre').html("Prix : " + stone_pickAxe_Price + "<img src='assets/img/pixelite.png' alt='image pixelite' class='prix_pioche'/>");
        return true; // Renvoyer true pour indiquer que le déblocage a réussi
    }
    else{
        return false
    }
}

function unlock_stonePickaxe(){
    unlock_woodPickaxe()
    let iswoodPickaxeUnlocked = unlock_woodPickaxe()
    if (iswoodPickaxeUnlocked){
        if (counter >= stone_pickAxe_Price){
            // $('.image_mineur').attr('src', 'assets/img/mineur_bois.gif')
            counter = counter - stone_pickAxe_Price;
            $('#cadenas_pioche_en_pierre').attr('src', '../assets/img/image_cadenas_ouvert.png');
            $('#prix_pioche_en_pierre').html('débloqué');
            $('#cadenas_pioche_en_pierre').fadeOut("slow");
            $('#pioche_en_fer').html('Pioche en fer 🪨');
            $('#image_pioche_en_fer').attr('src', '../assets/img/pioche_en_pierre.webp');
            $('#prix_pioche_en_fer').html("Prix : " + iron_pickAxe_Price + "<img src='assets/img/pixelite.png' alt='image pixelite' class='prix_pioche'/>");
            return true; // Renvoyer true pour indiquer que le déblocage a réussi
        }
    }
    else{
        return false
    }
}
// function unlock_pioche_en_bois() {
//     if (counter >= pioche_en_bois_Price) {
//         return false;
//     } else {
//         counter = counter - pioche_en_bois_Price;
//         $('#cadenas_pioche_en_bois').attr('src', '../assets/img/image_cadenas_ouvert.png');
//         $('#prix_pioche_en_bois').html('débloqué');
//         $('#cadenas_pioche_en_bois').fadeOut("slow");
//         $('#pioche_en_pierre').html('Pioche en pierre 🗿');
//         $('#image_pioche_en_pierre').attr('src', '../assets/img/pioche_en_pierre.webp');
//         $('#prix_pioche_en_pierre').html("Prix : " + pioche_en_pierre_Price + "<img src='assets/img/pixelite.png' alt='image pixelite' class='prix_pioche'/>");
//         return true; // Renvoye  r true pour indiquer que le déblocage a réussi
//     }    
// }    

// function unlock_pioche_en_pierre(){
//     if (pioche_en_bois_un === false) {
//         // Si la pioche en bois n'est pas débloquée, la fonction ne fait rien
//         return;
//     } else {
//         // Si la pioche en bois est débloquée, continuer avec le reste du code
//         if (counter >= pioche_en_pierre_Price) {
//             counter = counter - pioche_en_pierre_Price;
//             $('#cadenas_pioche_en_pierre').attr('src', '../assets/img/image_cadenas_ouvert.png')
//             $('#prix_pioche_en_pierre').html('débloqué.')
//             $('#cadenas_pioche_en_pierre').fadeOut("slow")
//             $('#pioche_en_fer').html('Pioche en fer 🪨')
//             $('#image_pioche_en_fer').attr('src', '../assets/img/pioche_en_fer.webp')
//             $('#prix_pioche_en_fer').html("Prix : " + pioche_en_pierre_Price + "<img src='assets/img/pixelite.png' alt='image pixelite' class='prix_pioche'/>")
//         }
//     }
// }

// function app(){
//     const result_pioche_en_bois = unlock_pioche_en_bois()
//     console.log(result_pioche_en_bois)
// }

// app();

// function PickaxesLocked() {
//     var text_bouton = document.getElementByClassName("bouton_acheter");
//     // Trouver le nombre maximum d'éléments parmi les différentes classes
//     // Itérer sur le nombre maximum d'éléments 
//         if (counter >= pioche_en_bois_Price){
//             counter = counter - pioche_en_bois_Price;
//             $('.bouton_acheter').html('non')
//         }    
// }

// var pioches = document.getElementsByClassName("image_pioche");
// var titres = document.getElementsByClassName("titre_pioche");
// var prix_pioche = document.getElementsByClassName("prix_pioche");

    

//faire recommencer la pickaxeslocked grace à une autre fonction onclick sur les images du carousel
