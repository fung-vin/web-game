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
  var enemy = null;
  // var enemyTwo = null;

  // Controls
  var control = new Control();

  var gameloop = function(){
    if(hero != null){
      hero.render(control);
    }

    if (enemy != null) {
      if (enemy.checkDeath()) {
        enemy = null;
      } else {
        enemy.render(); // move bullets/enemy wether enemy is alive or not

        // Check for collision only if enemy is alive
        if (enemy.alive()) {
          var enemyPosition = enemy.getPosition();
          var heroBullets   = hero.getBullets();

          for (var i = 0; i < heroBullets.length; i++) {
            var heroBullet = heroBullets[i];
            var bulletInfo = heroBullet.getBulletInfo();

            if(bulletInfo.x < enemyPosition.left + enemyPosition.width &&
               bulletInfo.x + bulletInfo.width > enemyPosition.left &&
               bulletInfo.y < enemyPosition.top + enemyPosition.height &&
               bulletInfo.y +bulletInfo.height > enemyPosition.top) {
              enemy.getEnemy().remove(); // only remove element from dom
              enemy.alive(false); // set alive to false
            }
          }
        }
      }
    }
  };

  var animloop = function () {
    requestAnimFrame(animloop);
    gameloop();
  };

  this.init = function(){
    // Create the player
    hero = new Hero();

    // Create enemy

    enemy = new Enemy();

//    enemyTwo = new EnemyTwo();

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