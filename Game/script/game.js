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
  var enemy = [];
  var totalEnemy = 100;
  // var enemyTwo = null;

  // Controls
  var control = new Control();

  this.init = function(){
    // Create the player
    hero = new Hero();
    // Create enemy

    for (var i = 3; i >= 0; i--) {
      enemy[i] = new Enemy();
    }
  }

  var enemyBullets = function() {
      var bullets = [];

      for(var i = 0; i < enemy.length; i++) {
          var enemyBullets = enemy[i].getBullets();
          for(var j = 0; j < enemyBullets.length; j++) {
            bullets.push(enemyBullets[j]);
          }
      }

      return bullets;
  }

  var checkDeaths = function (){
    for (var i = 0; i < enemy.length; i++) {
      enemy[i].checkDeaths();
    }
  }


  this.gameloop = function(){

    if(hero != null){
      hero.render(control);
    }

    var heroPosition   = hero.getPosition();   //gets hero position
    var bullets = enemyBullets();

    // run though the bullets for collision detection
    for (var i = 0; i < bullets.length; i++) {
      var enemyBullet = bullets[i];
      var eBulletInfo = enemyBullet.getBulletInfo();

      if(eBulletInfo.x < heroPosition.left + heroPosition.width &&
         eBulletInfo.x + eBulletInfo.width > heroPosition.left  &&
         eBulletInfo.y < heroPosition.top + heroPosition.height &&
         eBulletInfo.y + eBulletInfo.height > heroPosition.top) {
         bullets[i].getBullet().remove();
         console.log("Hero got hit!");
         hero.reduceHealth();
      }
    }

    if(enemy.length > 0) {
      if (checkDeaths == true) {
        enemy = [];
      } else {
          for (var i = 0; i < enemy.length; i++) {
            enemy[i].render(); // move bullets/enemy wether enemy is alive or not for loop
            // Check for collision only if enemy is alive
            if (enemy[i].alive()) {
              var enemyPosition = enemy[i].getPosition();
              var heroBullets   = hero.getBullets();

              for (var j = 0; j < heroBullets.length; j++) {
                var heroBullet = heroBullets[j];
                var bulletInfo = heroBullet.getBulletInfo();

                if(bulletInfo.x < enemyPosition.left + enemyPosition.width &&
                  bulletInfo.x + bulletInfo.width > enemyPosition.left &&
                  bulletInfo.y < enemyPosition.top + enemyPosition.height &&
                  bulletInfo.y +bulletInfo.height > enemyPosition.top) {
                  heroBullets[i].getBullet().remove();
                  enemy[i].getEnemy().remove(); // only remove element from dom
                  enemy[i].alive(false); // set alive to false
                }
              }
            }
          }
        }
      }
  };

  this.animloop = function () {
    var self = this;
    requestAnimationFrame(function(){
      self.gameloop();
      self.animloop();
    });
  };

  this.animloop();

}

  $(document).ready(function(){
    var g = new Game();
    g.init();
  });