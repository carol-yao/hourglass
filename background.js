chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "content_script.js"});

});

// document.addEventListener('DOMContentLoaded', function () {
// var time = document.body.innerText.split(" ").length / 250.0000;
//  document.getElementById("time-number").innerHTML=time + "min read";
// });
