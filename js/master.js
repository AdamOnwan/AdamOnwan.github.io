var infoBlackjack = function() {
    if (blackjackInfo.style.display === 'none') {
        blackjackInfo.style.display = 'contents';
    } else {
        blackjackInfo.style.display = 'none';
    }
}
var infoBoop = function() {
    if (boopInfo.style.display === 'none') {
        boopInfo.style.display = 'contents';
    } else {
        boopInfo.style.display = 'none';
    }
}
var infoGearSilo = function() {
    if (gearSiloInfo.style.display === 'none') {
        gearSiloInfo.style.display = 'contents';
    } else {
        gearSiloInfo.style.display = 'none';
    }
}
var blackjackImg = document.getElementById('imgBlackjack');
var boopImg = document.getElementById('imgBoop');
var gearSiloImg = document.getElementById('imgGearSilo');
var blackjackInfo = document.getElementById('infoBlackjack');
var boopInfo = document.getElementById('infoBoop');
var gearSiloInfo = document.getElementById('infoGearSilo');

blackjackImg.addEventListener('mouseover', infoBlackjack);
boopImg.addEventListener('mouseover', infoBoop);
gearSiloImg.addEventListener('mouseover', infoGearSilo);