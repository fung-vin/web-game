var heroLeft:
var heroRight :

var maxEnemy:

var



var Hero = {

  height: 50;
  width: 50;
  health: 3;
  top:
  left:
  xSpeed: 2;
  ySpeed: 2;

  function leftArrowPressed() {
    var element = document.getElementById("image1");  // will need to rename image 1 to protagonist name
    element.style.left = parseInt(element.style.left) - 5 + 'px';
    }

  function rightArrowPressed() {
    var element = document.getElementById("image1");  // will need to rename image 1 to protagonist name
    element.style.left = parseInt(element.style.left) + 5 + 'px';
    }

  function upArrowPressed() {
    var element = document.getElementById("image1");  // will need to rename image 1 to protagonist name
    element.style.top = parseInt(element.style.top) - 5 + 'px';
    }

  function downArrowPressed() {
    var element = document.getElementById("image1");  // will need to rename image 1 to protagonist name
    element.style.top = parseInt(element.style.top) + 5 + 'px';
    }

  this.moveSelection = function (event) { // found this online, can understand why it's in here but will need help linking it all together

    switch(this.event.keyCode) {
      case 37:
      leftArrowPressed();
      break;
      case 39:
      rightArrowPressed();
      break;
      case 38:
      upArrowPressed();
      case 40:
      downArrowPressed();
      break;
    }

}

}

var Enemy = function (health, top, left, xSpeed, ySpeed) {

  this.health = health;  // needs to be set to 1
  this.top = top;   // needs to be set to random
  this.left = left;   // needs to be set to random
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;

}

var HeroBullet = function (top, left, xSpeed, ySpeed){

  this.top: top;
  this.left: left;
  this.xSpeed: xSpeed;
  this.ySpeed: ySpeed;

}

var EnemyBullet = function (top, left, xSpeed, ySpeed){

  this.top: top;
  this.left: left;
  this.xSpeed: xSpeed;
  this.ySpeed: ySpeed;

}


  function leftArrowPressed() {
    var element = document.getElementById("image1");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
    }

  function rightArrowPressed() {
    var element = document.getElementById("image1");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
    }

  function upArrowPressed() {
    var element = document.getElementById("image1");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
    }

  function downArrowPressed() {
    var element = document.getElementById("image1");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
    }