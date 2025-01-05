
document.addEventListener('copy', function(event) {
  handleClipboardEvent(event);
});


document.addEventListener('cut', function(event) {
  handleClipboardEvent(event);
});


document.addEventListener('paste', function(event) {
  handleClipboardEvent(event);
});

function addToClipboard(newValue) {
  navigator.clipboard.writeText(newValue)
  .then(function() {
    // console.log('Nowa wartość została dodana do schowka.');
  })
  .catch(function(err) {
    console.error('Błąd podczas dodawania nowej wartości do schowka:', err);
  });

};

function handleClipboardEvent(event) {

  // event.preventDefault();

  navigator.clipboard.readText().then(function(clipText) {
    var temp = clipText;
    if (temp.includes("twitter.com/")) {
      var target = "twitter.com";
      var replacement = "fxtwitter.com";
      var pattern = new RegExp("\\b" + target + "\\b", "g");
      var replacedString = temp.replace(pattern, replacement);
      addToClipboard(replacedString);
    }
    else if (temp.includes("x.com/")) {
      var target = "x.com";
      var replacement = "fixupx.com";
      var pattern = new RegExp("\\b" + target + "\\b", "g");
      var replacedString = temp.replace(pattern, replacement);
      addToClipboard(replacedString);
    }

  }).catch(function(err) {
    console.error('Błąd odczytu schowka:', err);
  });
};


  