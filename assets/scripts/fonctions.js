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
            $('#muteSounds').html('🔇')
        }
        else{
            $('#muteSounds').html('🔊')
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

//----------------Unlock Pickaxes----------------



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
        }
    })
}