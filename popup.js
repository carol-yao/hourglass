chrome.runtime.onMessage.addListener(function(message){
    if((message.from === 'background') && (message.subject === 'sendingTime')){
        time = message.time;
        alert(time);
    }
});
