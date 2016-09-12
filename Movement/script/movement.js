$(document).ready(function(){

  var key_up = false;
  var key_down = false;
  var key_right = false;
  var key_left = false;

  var sprite = document.getElementById("sprite");
  sprite.style.top = "50px";
  sprite.style.left = "50px";

  /*
   *  Keyup
   */
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


  /*
   *  Keydown
   */
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

  /*
   *  Render
   */
  function render(){

    if(key_up){
      sprite.style.top = parseInt(sprite.style.top)-2+"px";
      console.log("move up");
    }

    if(key_down){
      sprite.style.top = parseInt(sprite.style.top)+2+"px";
      console.log("move down");
    }

    if(key_left){
      sprite.style.left = parseInt(sprite.style.left)-2+"px";
      console.log("move left");
    }

    if(key_right){
      sprite.style.left = parseInt(sprite.style.left)+2+"px";
      console.log("move right");
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
    render();
  })();

});