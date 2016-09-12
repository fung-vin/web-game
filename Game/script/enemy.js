var Enemy = function (){

  var top = 50;
  var left = 50;
  var height = 50;
  var width = 50;
  var xSpeed = 3;
  var ySpeed = 3;

  var element = null;

  var createEnemy = function(){

    element = $('<div class="enemy"></div>');
    $('#gameboard').append(element);

  }

  createEnemy();

  //When collision is created need to create function that will adjust enemy count to zero

}

var e = new Enemy();