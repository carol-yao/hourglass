function sendTime(time_var){
  chrome.runtime.sendMessage({from: 'background', subject: 'sendingTime', time: time_var});
}

chrome.runtime.onMessage.addListener(function(message){
    if((message.from === 'content') && (message.subject === 'sendTime')){
        time = message.time;
        sendTime(time);
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
});
