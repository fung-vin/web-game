var Enemy = function (){

  var left = 0;
  var top = 0;
  var height = 50;
  var width = 50;
  var xSpeed = 3;
  var ySpeed = 3;
  var element = null;

  var createEnemy = function(){

    var numberLeft = genPosition();

    element = $('<div class="enemy1"></div>')[0];
    $('#gameboard').append(element);
    element.style.left = numberLeft + "px";

  }

  var genPosition = function(){

    var newEnemy = null;
    var randomNum = Math.random();
    var randomPlace = parseInt(Math.random()*116);

    if (randomNum <= 0.25){
      return randomPlace;
    }
    else if (randomNum <= 0.5) {
      return randomPlace + 117;
    }
    else if (randomNum <= 0.75) {
      return randomPlace + 274;
    }
    else if (randomNum <= 1) {
      return randomPlace + 442;
    }

  };

  var fire = function(){

    bullets.push(new EnemyBullet(left, top));

  }

  createEnemy();

}

var e = new Enemy();