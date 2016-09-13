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
  var isFiring = false;
  var ySpeedRev = ySpeed * -1;
  var x_direction = "right";
  var y_direction = "down";

  var createEnemy = function(){

    element = $('<div class="enemy"></div>')[0];
    $('#gameboard').append(element);
//    left = ranNum;
    element.style.left = left + "px";

  }

  var enemyFire = function() {
    bullets.push(new enemyBullet(left, top));
  }

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

/*

   if (direction == "down") {
      top += ySpeed;
      element.style.top = top + "px";
      left += xSpeed;
      element.style.left = left + "px";
      if(top <= 0 ){
        ySpeed = ySpeedRev;
      }
    }


    if (top =< 0 ){

    }

    if (top < 0 && left < 0){
      xSpeed *= -1;
      ySpeed *= -1;
    }

    if(top > 768 && left < 0){
      xSpeed *= -1;
      ySpeed *= -1;
    }

    if (left > 618 && top > 768) {
      xSpeed *= -1;
      ySpeed *= -1;
    }

    if(left > 618 && top < 0){
      xSpeed *= -1;
      ySpeed *= -1;
    }

    if(left > 618){
      xSpeed *= -1;
      ySpeed *= -1;
    }

    if(left < 0){
      xSpeed *= -1;
      ySpeed *= -1;
    }

    if(top > 768){
      xSpeed *= -1;
      ySpeed *= -1;
    }

    if(top < 0){
      xSpeed *= -1;
      ySpeed *= -1;
    }

    */


  }

  createEnemy();
}

var e = new Enemy();