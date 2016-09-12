var heroBullet = function (x, y){


  var x = x;
  var y = y;
  var speed = 5;
  var element = null;


  var create = function(){
    // Create Element
    element = $('<div class="bullet"></div>')[0];
    $('#gameboard').append(element);
    element.style.top = (y + 50) + "px";
    element.style.left = (x + 12) + "px";
  }

  this.render = function(){

    y -= speed;
    element.style.top = y + "px";

    if(y< 0){
      $(element).remove();
    }

  }

  create();
}

/*

$(window).keypress(function(event){

    if(event.keyCode == 32){
      Bullet();
     }
});
*/

/*

Create a constructor function which can create the bullet

Insert a dom command which will call the function and create the bullet

*/