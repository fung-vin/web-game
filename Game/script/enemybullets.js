var enemyBullet = function (x, y){

  var x = x;
  var y = y;
  var speed = 4;
  var element = null;

  var create = function(){

    element = $('div class="enemyBullet"></div>');
      $('#gameboard').append(element);
      element.style.top = (y - 50) + "px";
      element.style.left = (x + 12) + "px";
  }

  this.render = function (){

    y += speed;
    element.style.top = y + "px";

    if(y > 800){
      $(element).remove();
    }

  }

}
