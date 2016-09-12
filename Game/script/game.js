var Game = function(){


  // world
  var arena = null;

  // game sprites
  var hero = null;
  var enemies = [];


  var init = function(){

    // Create the player
    hero = new Hero();

    // Create the world
    arena = new Arena();

    // Create enemies

    for (var i = 0; i < 4; i++) {
      enemies.push(new Enemy());
    }

    // Reset global gameing vars


  }


  var gameloop = function(){

    if(hero != null){
      hero.render();
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

  init();

}

var Control = function(){

  var key_up = false;
  var key_down = false;
  var key_right = false;
  var key_left = false;

  var hero = document.getElementById("hero");
  hero.style.top = "320px";
  hero.style.left = "320px";

  $('#sprite').addClass('back-stand');


// KEY UP LISTENER

  document.addEventListener("keyup", function(event){

    var keyName = event.key;

    switch(keyName) {
      case "ArrowRight":
          key_right = false;
          break;
      case "ArrowLeft":
          key_left = false;
          break;
      case "ArrowUp":
          key_up = false;
          break;
      case "ArrowDown":
          key_down = false;
          break;
      default:
          break;
    }

    console.log("Key down" + keyName);

  });


//KEY DOWN LISTENER

  document.addEventListener('keydown', function(event){

    var keyName = event.key;

    switch(keyName) {
      case "ArrowRight":
          key_right = true;
          break;
      case "ArrowLeft":
          key_left = true;
          break;
      case "ArrowUp":
          key_up = true;
          break;
      case "ArrowDown":
          key_down = true;
          break;
      default:
          break;
    }

    console.log("Key up" + keyName);

  });

// RENDER MOVEMENT

  function render(){

    if(key_up){
      hero.style.top = parseInt(hero.style.top)-3+"px";

      $('#hero').removeAttr('class');


      $('#hero').addClass("back-stand");

      console.log("move up");
    }

    if(key_down){
      sprite.style.top = parseInt(sprite.style.top)+3+"px";

      $('#hero').removeAttr('class');

      $('#hero').addClass("front-stand");

      console.log("move down");
    }

    if(key_left){
      sprite.style.left = parseInt(sprite.style.left)-3+"px";

      $('#hero').removeAttr('class');


      $('#hero').addClass("left-stand");

      console.log("move left");
    }

    if(key_right){
      sprite.style.left = parseInt(sprite.style.left)+3+"px";

      $('#hero').removeAttr('class');

      $('#hero').addClass("right-stand");

      console.log("move right");
    }

  }

}


var g = new Game();