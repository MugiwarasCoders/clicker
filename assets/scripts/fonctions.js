const notEnoughMoney = 'Vous n\'avez pas suffisamment de pixelites pour cela!'
const gameEnded = 'Vous avez fini le jeu'

function clickAddPixelite(){
    counter += clickerGain
    $('.count').html(counter)
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

//La fonction rafraichit le compteur tous les 10èmes de seconde et permet de dévérouiller le objets 
//de la boutique quand le compteur atteint un certain seuil
function counterRefresh(){
    $('.count').html(counter)
    localStorage.setItem('counter', counter)
    unlock_DigiBot(counter)
    unlock_GigaBot(counter)
    unlock_Pixeliteuse(counter)
    unlock_Extracteur(counter)
    unlock_pioche_en_bois(counter)
}

function ppsRefresh(){
    $('.pps').html(pixelitePerSecond)
    localStorage.setItem('pixelitePerSecond', pixelitePerSecond)
    counter += pixelitePerSecond
    counterRefresh()
    unlock_pioche_en_bois(counter)
}

//----------------Unlock Pickaxes----------------

function unlock_pioche_en_bois(counter) {
    if (counter >= pioche_en_bois_Price) {
        // document.getElementById("bouton_ameliorer").textContent = "AMÉLIORER";
        pioche_en_bois_Price = 5;
    } else {
        // document.getElementById("bouton_ameliorer").textContent = "5 <img src='assets/img/pixelite.png'/>";
        document.getElementById("image_pioche1").src = "assets/img/pioche_en_bois.webp";
        document.getElementById("titre_pioche1").textContent = "Pioche en bois 🪵";
    }
}

function unlock_stonePickaxe(){
    $('.image_mineur').attr('src', 'assets/img/mineur_pierre.gif')
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

//------------Interface----------------------
function notification(texte){
    $('.notification').text(texte).fadeIn();
    setTimeout(function(){$('.notification').text(texte).fadeOut()}, 2000);
}