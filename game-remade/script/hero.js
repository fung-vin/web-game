var Hero = function(){

  var height = 32;
  var width = 32;
  var top = 720;
  var left = 300;
  var speed = 5;
  var heroHealth = 3;
  var element = null;
  var bullets = [];

  var createHero = function(){

    element = $('<div id="hero"></div>')[0];
    $('#gameboard').append(element);
    element.style.top = top + "px";
    element.style.left = left + "px";

  };

  var fire = function() {

    bullets.push(new HeroBullet(left, top));

  };

  this.render = function(control){

    if(control.key_up){
      top -= speed;
      if (top <= 0) {
        top = 0;
      };
      element.style.top = top + "px";
    };

    if(control.key_down){
      top += speed;
      if (top >= 749) {
        top = 749;
      };
      element.style.top = top + "px";
    };

    if(control.key_left){
      left -= speed;
      if (left <= 0) {
        left = 0;
      };
      element.style.left = left + "px";
    };

    if(control.key_right){
      left += speed;
      if (left >= 599) {
        left = 599;
      };
      element.style.left = left + "px";
    };

    if(control.key_space){
      fire();
      control.key_space = false;
    }

    for (var i = bullets.length - 1; i >= 0; i--) {
      bullets[i].render();

      if(bullets[i].top < 0 ){
        $(bullets[i].element).remove();
        bullets.splice(i,1);
      };
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

  createHero();
};


var h = new Hero();