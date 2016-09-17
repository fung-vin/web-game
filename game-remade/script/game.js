var Game = function(){

  var hero               = null;
  var healthPoints       = 3;
  var enemies            = [];
  var totalEnemies       = 100;
  var control            = new Control();
  var lastEnemySpawn     = e;
  var enemyCooldownRange = 1000;


  var genEnemyOne = function(){

    var newEnemy = new EnemyOne();

    enemies.push(newEnemy);
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
    if (totalEnemies > 50) {
      genEnemyOne();
      document.getElementById("en-left").innerHTML = totalEnemies;
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