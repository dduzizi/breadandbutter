			$("#lbhtml").click(function() {
  var html = $("<div class='center'><h1>Wow! Amazing!</h1><p>Yes, now Lightbox Evolution supports DOM elements created on the fly.</p></div>");

  $.lightbox(html, {
    width   : 350,
    height  : 150
  });
  
  return false;
});