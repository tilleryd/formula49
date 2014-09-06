(function() {

  var stripesTimeout = setTimeout(function() {
    var stripes = document.getElementsByClassName('stripe');

    for (i = 0; i < stripes.length; i++) {
      stripes[i].classList.add('show');
    }

    clearTimeout(stripesTimeout);
  }, 100);

  var logoTimeout = setTimeout(function() {
    var middle = document.getElementsByClassName('middle');
    middle[0].classList.add('middle-show');

    clearTimeout(logoTimeout);
  }, 200);


}());