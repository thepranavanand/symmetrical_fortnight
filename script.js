(function () {

var names = ["Pranav", "Jai", "Jaja", "Janav", "Addy", "Shaswat", "Divyam", "Anjil", "Akshat", "Jahnavi"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
