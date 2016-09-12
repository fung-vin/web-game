var Game = function(){


  // world
  var arena = null;

  // game sprites
  var hero = null;
  var enemies = [];

  // Controls
  var control = new Control();


  var init = function(){

    // Create the player
    hero = new Hero();

    // Create the world
    arena = new Arena();

    // Create enemies
    for (var i = 0; i < 4; i++) {
      if(enemies < 5){
        enemies.push(new Enemy());
      }
    }
    enemies++

    // Reset global gameing vars


  }


  var gameloop = function(){

    if(hero != null){
      hero.render(control);
    }


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