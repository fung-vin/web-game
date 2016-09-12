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

    console.log("Keyname: " + keyName);

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
      case "ArrowDown":
          self.key_down = false;
          break;
      default:
          break;
    }
  });


  // KEY DOWN LISTENER
  document.addEventListener('keydown', function(event){

    var keyName = event.key;

    switch(keyName) {
      case "ArrowRight":
          self.key_right = true;
          break;
      case "ArrowLeft":
          self.key_left = true;
          break;
      case "ArrowUp":
          self.key_up = true;
          break;
      case "ArrowDown":
          self.key_down = true;
          break;
      default:
          break;
    }
  });
}