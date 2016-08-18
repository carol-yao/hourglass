$(function() {

  chrome.runtime.onMessage.addListener(function(message){
      if((message.from === 'content') && (message.subject === 'time')){
          time = message.time;

          function sendTime(time_var){
            chrome.runtime.sendMessage({from: 'background', subject: 'time', time: time_var});
          }
          sendTime(time);
          });
      }
  });

  chrome.browserAction.onClicked.addListener(function(tab) {
  });



})
