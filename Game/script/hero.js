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

    //console.clear();
    //console.log(control);

    if(control.key_up){
      top -= speed;
      element.style.top = top + "px";
      fire();
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

    for (var i = bullets.length - 1; i >= 0; i--) {
      bullets[i].render();
    }


  }

  createHero();
}


var h = new Hero();