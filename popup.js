chrome.runtime.sendMessage({method:"getWord"},function(response){
   $('.popup').html("<p>" + response + " min read" + "</p>")
});
