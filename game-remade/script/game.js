var Game = function(){

  // GAME SPRITIES

  var hero         = null;
  var enemies      = [];
  var totalEnemies = 100;
  var control      = new Control();
  var enemyCooldownRange = 1000;


  var genEnemies = function(){

    for (var i = 0; i < 50; i++) {
      if(totalEnemies >= 50){
        enemies[i] = new Enemy();
      }
      totalEnemies--;
    }
  }

  //INITATE GAME

  var init = function(){

    // CREATES NEW HERO

    hero = new Hero();

  }

  var gameloop = function(){

    //RENDERS HERO IN GAME

    if(hero != null){
      hero.render(control);
    }

    //ENEMY GENERATION



  }

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