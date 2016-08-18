$(function() {

  chrome.runtime.onMessage.addListener(function(message){
      if((message.from === 'content') && (message.subject === 'time')){
          time = message.time;
          alert(time);
      }
  });

  chrome.browserAction.onClicked.addListener(function(tab) {
  });

  function sendTime(time_var){
    chrome.runtime.sendMessage({from: 'content', subject: 'time', time: time_var});
  }
  sendTime(time);
  });

})
