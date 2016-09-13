var Enemy = function (){

  var top = 0;
  var left = 0;
  var height = 32;
  var width = 32;
  var xSpeed = 0; //2;
  var ySpeed = 0; //3;
  var bullets = [];
  var element = null;
  var ranNum = Math.floor((Math.random() * 600) + 1);
  var direction = "down";

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

    if(direction == "down"){
      enemyFire();
    }

  }

  createEnemy();
}

var e = new Enemy();