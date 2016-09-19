var EnemyOne = function (){

  var left                 = 0;
  var top                  = 0;
  var height               = 51;
  var width                = 54;
  var xSpeed               = 3;
  var ySpeed               = 4;
  var element              = null;
  var bullets              = [];
  var lastBulletShot       = null;
  var nextBulletCooldown   = null;
  var bulletCooldownRange  = 1000;

  var genPosition = function(){

    var newEnemy = null;
    var randomNum = Math.random();
    var randomLeft = parseInt(Math.random()*116);

    if (randomNum <= 0.25){
      return randomLeft;
    }
    else if (randomNum <= 0.5) {
      return randomLeft + 117;
    }
    else if (randomNum <= 0.75) {
      return randomLeft + 274;
    }
    else if (randomNum <= 1) {
      return randomLeft + 442;
    }

  };

  var createEnemy = function(){

    left = genPosition();

    element = $('<div class="enemy1"></div>')[0];
    $('#gameboard').append(element);
    element.style.left = left + "px";

  };

  var enemyFire = function(){

    bullets.push(new EnemyBulletOne(left, top));

  };

  this.render = function(){

    enemyFire();

    for (var i = 0; i < bullets.length; i++) {
      bullets[i].render();

      if (bullets[i].top > 800) {
        $(bullets[i].element).remove();
        bullets[i].splice(i,1);
      }
    }

  };

  createEnemy();

};

var e = new EnemyOne();