window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var Game = function(){
  // game sprites
  var hero = null;
  var enemies = null;
  var enemiesTwo = null;

  // Controls
  var control = new Control();

  var gameloop = function(){

    if(hero != null){
      hero.render(control);
    }
    if(enemies != null){
      enemies.render();
    }
    // if(enemiesTwo != null){
    //   enemiesTwo.render();
    // }
    var enemyPosition = enemies.getPosition();
    var heroBullets = hero.getBullets();

    for (var i = 0; i < heroBullets.length; i++) {

      if(heroBullets[i].x < enemyPosition.top + enemyPosition.left &&
         heroBullets[i].x + heroBullets[i].width > enemyPosition.left &&
         heroBullets[i].y < enemyPosition.top + enemyPosition.height &&
         heroBullets[i].height + heroBullets[i].top > enemyPosition.top) {
        console.log("test")
        enemies.getEnemy().remove();
      }
    }
  }

  var animloop = function () {
    requestAnimFrame(animloop);
    gameloop();
  };

  this.init = function(){
    // Create the player
    hero = new Hero();

    // Create enemies

    enemies = new Enemy();

//    enemiesTwo = new EnemyTwo();

    // Create Background Loop

  // var background = function(){

  //   var x = 0;

  //   setInterval(function(){

  //     x +=1 ;
  //     $('#gameboard').css('background-position', 0 + x + 'px');
  //   }, 10);

  // }

    // Reset global gameing vars


    animloop();
  };
}

$(document).ready(function(){
  var g = new Game();

  g.init();
})