$(function() {
  chrome.runtime.onMessage.addListener(function(message){
      if((message.from === 'content') && (message.subject === 'time')){
          time = message.time;
          alert(time + "from popup");
      }
  });
    $('.popup').html('<p>HI</p>');
})
