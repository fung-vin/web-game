var Bullet = function (){

  var heroXPos = hero.height;
  var heroYPos = hero.width;

  this.top = heroXPos - 26px;
  this.left = heroYPos + 25px;
  this.height = 10px;
  this.width = 10px;
  this.ySpeed = 2px; // how to link velocity to the object

}

document.body.onkeyup = function(event){

    if(event.keyCode == 32){
      Bullet();
     }
}


/*

Create a constructor function which can create the bullet

Insert a dom command which will call the function and create the bullet

*/