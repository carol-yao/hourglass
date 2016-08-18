$(document).ready(function(){

  var time = document.body.innerText.split(" ").length / 250;
  // console.log(time + " min read");

  function sendTime(time_var){
    chrome.runtime.sendMessage({from: 'content', subject: 'sendTime', time: time_var});
  }
  sendTime(time);
});
