var Game = function(){

  var hero                    = null;
  var healthPoints            = 3;
  var enemyOne                = [];
  var totalEnemies            = 100;
  var control                 = new Control();
  var lastEnemySpawnOne       = null;
  var nextEnemyCooldownOne    = null;
  var enemyCooldownRangeOne   = 875;


  var genEnemyOne = function(){

    var newEnemy = new EnemyOne();

    enemyOne.push(newEnemy);
    totalEnemies--;

  };

  //INITATE GAME

  var init = function(){

    // CREATES NEW HERO
    hero = new Hero();

  };

  var gameloop = function(){

    //RENDERS HERO IN GAME

    if(hero != null){
      hero.render(control);
    }

    //GENERATE ENEMY TYPE 1

    var newTimeOne = new Date().getTime();
    if (totalEnemies > 99 && lastEnemySpawnOne +enemyCooldownRangeOne < newTimeOne) {
      nextEnemyCooldown = Math.random() * enemyCooldownRangeOne;
      lastEnemySpawnOne = newTimeOne;
      genEnemyOne();
      document.getElementById("en-left").innerHTML = totalEnemies;
    }

    // RENDER ENEMY TYPE 1

    for (var i = 0; i < enemyOne.length; i++) {
      enemyOne[i].render();
    }

  };

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();


  (function animloop(){
    requestAnimFrame(animloop);
    gameloop();
  })();


  document.addEventListener("DOMContentLoaded", function(event) {
    init();
  });
}

var g = new Game();