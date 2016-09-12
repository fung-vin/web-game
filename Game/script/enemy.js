var Enemy = function (){

  var top = 0;
  var left = 0;
  var height = 32;
  var width = 32;
  var xSpeed = 3;
  var ySpeed = 3;
  var element = null;
  var ranNum = Math.floor((Math.random() * 600) + 1);

  var createEnemy = function(){

    element = $('<div class="enemy"></div>');
    $('#gameboard').append(element);

  this.render = function(){

    if (top <= 0) {
      top -= ySpeed;
      element.style.top = top + "px";
    }
    else if (top >= 400) {
      top += ySpeed;
      element.style.top = top + "px";
    }

    if(left <= 0) {
      top -= xSpeed;
      element.style.top = left + "px";
    }
    else if (left >= 600) {
      top += xSpeed;
      element.style.top = left + "px";
    }

  }

  }

  createEnemy();

  //When collision is created need to create function that will adjust enemy count to zero

}

var e = new Enemy();