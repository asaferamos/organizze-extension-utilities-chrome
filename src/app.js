var infoText = document.getElementsByClassName('info-text');
if(infoText.length != 0){
    var saldo = infoText[0].childNodes[1].innerText;

    var numsStr = saldo.replace(/[^0-9,]/g,'');
    saldo = numsStr.replace(',','.');

    chrome.storage.sync.set({'saldo': parseFloat(saldo)},function(){});

}


chrome.storage.sync.get(['saldo'], function(items) {
    console.log('Saldo', items);
});