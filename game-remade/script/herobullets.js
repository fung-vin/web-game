var HeroBullet = function (left, top){

  var left = left;
  var top = top;
  var speed = 8;
  var element = null;


  var create = function(){

    element = $('<div class="bullet"></div>')[0];
    $('#gameboard').append(element);
    element.style.left = (left + 22) + "px";
    element.style.top = (top + 50) + "px";

  };

  this.render = function(){

    top -= speed;
    element.style.top = top + "px";

    if(top< 0){
      $(element).remove();
    }

  };

  create();

};

