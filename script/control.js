var Control = function(){

  this.key_up = false;
  this.key_down = false;
  this.key_right = false;
  this.key_left = false;
  this.key_space = false;

  var self = this;


  // KEY UP LISTENER
  document.addEventListener("keyup", function(event){

    var keyName = event.key;

    switch(keyName) {
      case "ArrowRight":
          self.key_right = false;
          break;
      case "ArrowLeft":
          self.key_left = false;
          break;
      case "ArrowUp":
          self.key_up = false;
          break;
      case "ArrowDown":
          self.key_down = false;
          break;
      case " ":
          self.key_space = false;
          break;
      default:
          break;
    }
  });


  // KEY DOWN LISTENER
  document.addEventListener('keydown', function(event){

    var keyName = event.key;

    $('#hero').removeAttr('class');

    switch(keyName) {
      case "ArrowRight":
          self.key_right = true;
          $('#hero').addClass('right');
          break;
      case "ArrowLeft":
          self.key_left = true;
          $('#hero').addClass("left");
          break;
      case "ArrowUp":
          self.key_up = true;
          $('#hero').addClass("back");
          break;
      case "ArrowDown":
          self.key_down = true;
          $('#hero').addClass("front");
          break;
      case " ":
          self.key_space = true;
          break;
      default:
          break;
    }
  });
}