var Enemy = function (){

  var top = 0;
  var left = 0;
  var height = 32;
  var width = 32;
  var xSpeed = 2;
  var ySpeed = 3;
  var bullets = [];
  var element = null;
  var ranNum = Math.floor((Math.random() * 600) + 1);
  var direction = "down";
  var isFiring = false;

  var createEnemy = function(){

    element = $('<div class="enemy"></div>')[0];
    $('#gameboard').append(element);
    left = ranNum;
    element.style.left = left + "px";

  }

  var enemyFire = function() {
    bullets.push(new enemyBullet(left, top));
  }

  this.render = function(){

   if (direction == "down") {
      top += ySpeed;
      element.style.top = top + "px";
      left += xSpeed;
      element.style.left = left + "px";
    }

    if (direction == "up") {
      top -= ySpeed;
      element.style.top = top + "px";
      left += xSpeed;
      element.style.left = left + "px";
    }

    if(top > 400){
      direction = "up";
    }

    if(direction == "down" && !isFiring){

      isFiring = true;
      setInterval(function(){
        enemyFire();
        isFiring = false;
      }, 500);

    }

    for (var i = bullets.length - 1; i >= 0; i--) {
      bullets[i].render();

      if(bullets[i].y > 790 ){
        $(bullets[i].element).remove();
        bullets.splice(i,1);
      }

    }

  }

  createEnemy();
}

var e = new Enemy();