chrome.runtime.sendMessage({method:"getWord"},function(response){
   $('.popup').html("<p>" + response + " min read" + "</p>");
   $('p').css('color', 'rgba(0,0,0,0.6)');
});
