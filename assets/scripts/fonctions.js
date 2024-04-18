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
function unlock_pioche_en_bois(){
    if (counter >= pioche_en_bois_Price){
        counter = counter - pioche_en_bois_Price;
        $('#prix_pioche_en_bois').html('débloqué.')
        $('.bouton_acheter').fadeOut()
        $('#pioche_en_pierre').html('Pioche en pierre 🗿')
        $('#image_pioche_en_pierre').attr('src', '../assets/img/pioche_en_pierre.webp')
        $('#pioche_en_pierre').html( "??? <img src='assets/img/pixelite.png' alt='image pixelite'/>")
    }
}
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
