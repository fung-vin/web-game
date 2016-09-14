var heroBullet = function (x, y){


  var x = x;
  var y = y;
  var width = 10;
  var height = 10;
  var speed = 8;
  var element = null;

  var create = function(){
    // Create Element
    element = $('<div class="bullet"></div>')[0];
    $('#gameboard').append(element);
    element.style.top = (y + 50) + "px";
    element.style.left = (x + 12) + "px";
  }

  this.getBulletInfo = function() {
    return {
      x: x,
      y: y,
      width: width,
      height: height
    }
  }

  this.render = function(){

    y -= speed;
    element.style.top = y + "px";

    if(y < 0){
      $(element).remove();
    }

  }


  create();
}

