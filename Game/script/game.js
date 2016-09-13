var Game = function(){


  // world
  var arena = null;

  // game sprites
  var hero = null;
  var enemies = null;

  // Controls
  var control = new Control();


  var init = function(){

    // Create the player

    hero = new Hero();

    // Create enemies

    enemies = new Enemy();

    // Reset global gameing vars

  }

  var gameloop = function(){

    if(hero != null){
      hero.render(control);
    }
    if(enemies != null){
      enemies.render();
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