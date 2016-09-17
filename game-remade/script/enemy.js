var Enemy = function (){

  var top = 51;
  var left = 51;
  var height = 50;
  var width = 50;
  var xSpeed = 3;
  var ySpeed = 3;
  var element = null;

  var createEnemy = function(){

    element = $('<div class="enemy1"></div>');
    $('#gameboard').append(element);

  }

  createEnemy();

}

var e = new Enemy();