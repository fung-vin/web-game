  var detectBullet = function (x, y, ,width, height, x2, y2, width2, height2) {

    var x = x;
    var y = y;
    var width = width;
    var height = height;

    var xTwo = x2;
    var yTwo = y2;
    var widthTwo = width2,
    var heightTwo = height2;

    element = $('<div class="enemy"></div>')[0];

    if (x < xTwo + widthTwo && x + width > xTwo && y < yTwo + heightTwo && height + y > yTwo) {
      $(element).remove();
    }

  }

  var detectBullet = function (x, y, ,width, height,) {

    var x = x;
    var y = y;
    var width = width;
    var height = height;

  }

  if (x < xTwo + widthTwo && x + width > xTwo && y < yTwo + heightTwo && height + y > yTwo) {
      $(element).remove();

  }