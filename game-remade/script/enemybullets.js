var EnemyBullet = function (left, top){

  var left = left;
  var top =  top;
  var height = 10;
  var width = 10;
  var leftSpeed = 2;
  var topSpeed = 3;

  var create = function(){

    element = $('<div class="enemy-bullet"></div>')[0];
    $('#gameboard').append(element);
    element.style.left = (left + 22) + "px";
    element.style.top = (top - 50) + "px";

  }

  this.render = function(){

    top += speed;
    element.style.top = top + "px";

    if(top< 0){
      $(element).remove();
    }

  }

  create();

}
