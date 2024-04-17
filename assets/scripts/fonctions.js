function clickAddPixelite(){
    counter += clickerGain
    $('.compteur p').html(counter+'<img src="assets/img/pixelite.png" style="width: 30px">')
    unlock_DigiBot(counter)
    unlock_GigaBot(counter)
    unlock_pioche_en_bois(counter)
}

//----------------Unlock Miners----------------

function unlock_DigiBot(counter){
    if (counter === DigiBot_Price){
        console.log('Vous pouvez acheter un DigiBot')
        DigiBot_Price = 30;
    }
}

function unlock_GigaBot(counter){
    if (counter === GigaBot_Price){
        console.log('Vous pouvez acheter un GigaBot')
        GigaBot_Price = 200;
    }
}

function unlock_pioche_en_bois(counter) {
    if (counter === pioche_en_bois_Price) {
        console.log('Vous pouvez acheter une pioche en bois');
        // document.getElementById("bouton_ameliorer").textContent = "AMÉLIORER";
        pioche_en_bois_Price = 5;
    } else {;
        // document.getElementById("bouton_ameliorer").textContent = "5 <img src='assets/img/pixelite.png'/>";
        document.getElementById("image_pioche1").src = "assets/img/pioche_en_bois.webp";
        document.getElementById("titre_pioche1").textContent = "Pioche en bois 🪵";

    }
}
