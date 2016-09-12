var Hero = function(){

  var height = 32;
  var width = 32;
  var top = 0;
  var left = 0;
  var speed = 4;
  var heroHealth = 3;
  var element = null;
  var bullets = [];

  var createHero = function(){
   element = $('<div id="hero"></div>')[0];
   $('#gameboard').append(element);
  }

  var fire = function() {
    bullets.push(new heroBullet(left, top));
  }


  this.render = function(control){

    if(control.key_up){
      top -= speed;
      element.style.top = top + "px";
    }

    if(control.key_down){
      top += speed;
      element.style.top = top + "px";
    }

    if(control.key_left){
      left -= speed;
      element.style.left = left + "px";
    }

    if(control.key_right){
      left += speed;
      element.style.left = left + "px";
    }

    if(control.key_space){
      fire();
      control.key_space = false;
    }


    for (var i = bullets.length - 1; i >= 0; i--) {
      bullets[i].render();

      if(bullets[i].y < 0 ){
        $(bullets[i].element).remove();
        bullets.splice(i,1);
      }

    }


  }

  createHero();
}


var h = new Hero();