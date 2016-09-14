var EnemyTwo = function (){

  var top = 0;
  var left = 0;
  var height = 32;
  var width = 32;
  var xSpeed = -2;
  var ySpeed = 3;
  var bullets = [];
  var element = null;
  var xGen = Math.floor((Math.random() * 600) + 1);
  var isFiring = false;
  var x_direction = "right";
  var y_direction = "down";

  var createEnemy = function(){

    element = $('<div class="enemyTwo"></div>')[0];
    $('#gameboard').append(element);
    left = xGen;
    element.style.left = left + "px";

  }

  var enemyFire = function() {
    bullets.push(new enemyBullet(left, top));
  }
  setInterval(function(){
    enemyFire();

  }, 750);

  this.render = function(){

    if(top > 768){
      y_direction = "up"
    }

    if(top < 0){
      y_direction = "down"
    }

    if(left > 618){
      x_direction = "left"
    }

    if(left < 0){
      x_direction = "right"
    }

    if(x_direction == "left"){
      left += xSpeed;
      element.style.left = left + "px";
    }

    if(x_direction == "right"){
      left -= xSpeed;
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

  createEnemy();
}

var e = new EnemyTwo();