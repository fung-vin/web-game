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
  var self = this;

  // Controls
  var control = new Control();

  var gameloop = function(){
    if(hero != null){
      hero.render(control);
    }

      var heroPosition   = hero.getPosition();   //gets hero position
      var enemyBullets   = enemy.getBullets(); // gets enemy array

      for (var i = 0; i < enemyBullets.length; i++) {
        var enemyBullet = enemyBullets[i];
        var eBulletInfo = enemyBullet.getBulletInfo();

        if(eBulletInfo.x < heroPosition.left + heroPosition.width &&
           eBulletInfo.x + eBulletInfo.width > heroPosition.left  &&
           eBulletInfo.y < heroPosition.top + heroPosition.height &&
           eBulletInfo.y + eBulletInfo.height > heroPosition.top) {
          hero.getHero().remove();
          hero.reduceHealth();
        }
      }

    if (enemy != null) {
      if (enemy.checkDeath()) {
        enemy = null;
      } else {
        enemy.render(); // move bullets/enemy wether enemy is alive or not for loop

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

  this.animloop = function () {
    requestAnimFrame(self.animloop);
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


    self.animloop();
  };
}

$(document).ready(function(){
  var g = new Game();

  g.init();
})