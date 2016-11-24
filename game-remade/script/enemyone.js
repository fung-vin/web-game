var EnemyOne = function (){

  var left                 = 0;
  var top                  = 0;
  var height               = 51;
  var width                = 54;
  var xSpeed               = 3;
  var ySpeed               = 4;
  var x_direction          = "right";
  var y_direction          = "down";
  var element              = null;
  var bullets              = [];
  var lastBulletShot       = null;
  var nextBulletCooldown   = null;
  var bulletCooldownRange  = 1000;
  var alive                = true;

  var genPosition = function(){

    var newEnemy = null;
    var randomNum = Math.random();
    var randomLeft = parseInt(Math.random()*116);

    if (randomNum <= 0.25){
      return randomLeft;
    } else if (randomNum <= 0.5) {
      return randomLeft + 117
    } else if (randomNum <= 0.75) {
      return randomLeft + 274
    } else if (randomNum <= 1) {
      return randomLeft + 442
    };
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
    var currentTime = new Date().getTime();

    if (lastBulletShot + bulletCooldownRange < currentTime) {
      enemyFire();
      lastBulletShot = currentTime;
    };

    for (var i = 0; i < bullets.length; i++) {
      bullets[i].render();
      if (bullets[i].top > 800) {
        $(bullets[i].element).remove();
        bullets[i].splice(i,1);
      };
    };

    if (alive == false) {
      shotCooldown = 999999999999;
    };

    if(top > 749){
      y_direction = "up"
    };

    if(top < 0){
      y_direction = "down"
    };

    if(left > 599){
      x_direction = "left"
    };

    if(left < 0){
      x_direction = "right"
    };

    if(x_direction == "left"){
      left -= xSpeed;
      element.style.left = left + "px";
    };

    if(x_direction == "right"){
      left += xSpeed;
      element.style.left = left + "px";
    };

    if(y_direction == "down"){
      top += ySpeed;
      element.style.top = top + "px";
    };

    if(y_direction == "up"){
      top -= ySpeed;
      element.style.top = top + "px";
    };

  };

  this.getPosition = function() {
    return {
      top: top,
      left: left,
      width: width,
      height: height
    };
  };

  createEnemy();

};

var e = new EnemyOne();