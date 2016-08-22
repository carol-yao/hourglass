$(document).ready(function(){
  var averageWPM = 200;
  var estimate = document.body.innerText.split(" ").length / averageWPM;
  var time = Math.round(estimate);

  function sendTime(time_var){
    chrome.runtime.sendMessage({from: 'content', subject: 'sendTime', time: time_var});
  }
  sendTime(time);
});
