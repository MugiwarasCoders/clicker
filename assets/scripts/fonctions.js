function clickAddPixelite(){
    buy_DigiBot(counter, clickerGain)
    counter += clickerGain
    $('.count').html(counter)
    unlock_DigiBot(counter)
    unlock_GigaBot(counter)
    localStorage.setItem('counter', counter)
    localStorage.setItem('clickerGain', clickerGain)
    localStorage.setItem('pixelitePerSecond', pixelitePerSecond)
}

function save(){
    pixelitePerSecond = localStorage.getItem('pixelitePerSecond')
    clickerGain = localStorage.getItem('clickerGain')
    counter = localStorage.getItem('counter')
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

//----------------Buy Miners----------------
function buy_DigiBot(counter){
    if (counter >= 20){
        clickerGain = 2
    }
}


