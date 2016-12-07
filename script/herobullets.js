var HeroBullet = function (left, top){

  var left = left;
  var top = top;
  var width = 10;
  var height = 10;
  var speed = 8;
  var element = null;


  var create = function(){

    element = $('<div class="bullet"></div>')[0];
    $('#gameboard').append(element);
    element.style.left = (left + 22) + "px";
    element.style.top = (top + 50) + "px";

  };

  this.getBulletInfo = function() {
    return {
      left: left,
      top: top,
      width: width,
      height: height
    };
  };

  this.getBullet = function() {
    return element;
  };

  this.render = function(){

    top -= speed;
    element.style.top = top + "px";

    if(top< 0){
      $(element).remove();
    }

  };

  create();

};

