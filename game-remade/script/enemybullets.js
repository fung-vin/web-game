var EnemyBulletOne = function (left, top){

  var left = left;
  var top =  top;
  var height = 10;
  var width = 10;
  var speed = 4;
  var element = null;

  var create = function(){

    element = $('<div class="enemy-bullet"></div>')[0];
    $('#gameboard').append(element);
    element.style.left = (left + 26) + "px";
    element.style.top = (top + 50) + "px";

  };

  this.render = function(){
    top += speed;
    element.style.top = top + "px";

    if (top > 800) {
      $(element).remove();
    }

  };

  create();

};
