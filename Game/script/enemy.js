var Enemy = function (){

  var top = 0;
  var left = 0;
  var height = 32;
  var width = 32;
  var xSpeed = 2;
  var ySpeed = 3;
  var bullet = [];
  var element = null;
  var ranNum = Math.floor((Math.random() * 600) + 1);

  var createEnemy = function(){
    element = $('<div class="enemy"></div>')[0];
    $('#gameboard').append(element);
  }

  this.render = function(){
    if (top >= 0 ) {
      top += ySpeed;
      element.style.top = top + "px";
    }
  }

  createEnemy();
}

var e = new Enemy();