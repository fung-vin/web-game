var heroBullet = function (x, y){


  var x = x;
  var y = y;
  var speed = 2;
  var element = null;


  var create = function(){
      // Create Element

    element = $('<div class="bullet"></div>')[0];
    $('#gameboard').append(element);
    element.style.top = y + "px";
    element.style.left = x + "px";
  }


  this.render = function(){
    element.style.top = (y - speed) + "px";
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