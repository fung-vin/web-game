var Hero = function(){

  var height = 50;
  var width = 50;
  var top = 0;
  var left = 0;
  var xSpeed = 0;
  var ySpeed = 0;
  var heroHealth = 3;


  var element = null;

  var createHero = function(){
   element = $('<div id="hero"></div>');
   $('#gameboard').append(element);
  }


  this.render = function(){


  }


  createHero();
}


var h = new Hero();