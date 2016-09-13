var Arena = function(){

  top: 30;
  left: 40;
  height: 800;
  width: 1000;

  var element = null;

  var createArena = function(){

      element = $('<div class="arena"></div>');
      $('#gameboard').append(element);

    }

  createArena();
}

