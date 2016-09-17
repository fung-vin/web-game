var Enemy = function (){

  var top = 0;
  var left = 0;
  var height = 51;
  var width = 51;
  var xSpeed = 2;
  var ySpeed = 3;
  var bullets = [];
  var element = null;
  var xGen = Math.floor((Math.random() * 600) + 1);
  var isFiring = false;
  var x_direction = "right";
  var y_direction = "down";
  var lastShotFired = new Date().getTime();
  var shotCooldown  = 1000;
  var alive = true;

  var createEnemy = function(){

    element = $('<div class="enemy"></div>')[0];
    $('#gameboard').append(element);
    left = xGen;
    element.style.left = left + "px";

  }

  var enemyFire = function() {
    bullets.push(new enemyBullet(left, top));
  }

  this.getPosition = function () {
    return {
      top: top,
      left: left,
      width: width,
      height: height
    }
  }

  this.getEnemy = function() {
    return element;
  }

  this.getBullets = function() {
    return bullets;
  }

  this.alive = function (isAlive) {
    if (isAlive === true || isAlive === false) {
      alive = isAlive;
    } else {
      return alive;
    }
  };

  this.render = function(){

    var currentTime = new Date().getTime();
    if (lastShotFired + shotCooldown < currentTime) {
      enemyFire();
      lastShotFired = currentTime;
    }

    if (alive == false) {
      shotCooldown = 999999999999;
    }

    if(top > 749){
      y_direction = "up"
    }

    if(top < 0){
      y_direction = "down"
    }

    if(left > 599){
      x_direction = "left"
    }

    if(left < 0){
      x_direction = "right"
    }

    if(x_direction == "left"){
      left -= xSpeed;
      element.style.left = left + "px";
    }

    if(x_direction == "right"){
      left += xSpeed;
      element.style.left = left + "px";
    }

    if(y_direction == "down"){
      top += ySpeed;
      element.style.top = top + "px";
    }

    if(y_direction == "up"){
      top -= ySpeed;
      element.style.top = top + "px";
    }

    for (var i = bullets.length - 1; i >= 0; i--) {
      bullets[i].render();

      if(bullets[i].y > 790 ){
        $(bullets[i].element).remove();
        bullets.splice(i,1);
      }
    }
  }

  this.checkDeath = function () {
    if (!alive & bullets.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  createEnemy();
}

var e = new Enemy();