var Game = function(){

  // GAME SPRITIES

  var hero               = null;
  var healthPoints       = 3;
  var enemies            = [];
  var totalEnemies       = 100;
  var control            = new Control();
  var currentTime        = e;
  var enemyCooldownRange = 1000;


  var genEnemies = function(){

    var newEnemy = new Enemy();

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

    //ENEMY GENERATION
    if (totalEnemies >= 50) {
      genEnemies();
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