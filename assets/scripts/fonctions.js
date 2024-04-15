function clickAddPixelite(){
    counter += clickerGain
    $('.compteur p').html(counter+'<img src="assets/img/pixelite.png" style="width: 30px">')
    unlock_DigiBot(counter)
    unlock_GigaBot(counter)
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


