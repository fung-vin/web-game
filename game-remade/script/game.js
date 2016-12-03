var Game = function(){

  var hero                    = null;
  var healthPoints            = 3;
  var enemyOne                = [];
  var totalEnemies            = 100;
  var control                 = new Control();
  var lastEnemySpawnOne       = null;
  var nextEnemyCooldownOne    = null;
  var enemyCooldownRangeOne   = 875;


  var genEnemyOne = function() {
    var newEnemy = new EnemyOne();

    enemyOne.push(newEnemy);
    totalEnemies--;
  };

  //INITATE GAME

  var init = function(){
    hero = new Hero();
  };

  var collision = function (object1, object2, function1) {
    if(object1.left < object2.left + object2.width &&
      object1.left + object1.width > object2.left  &&
      object1.top < object2.top + object2.height &&
      object1.top + object1.height > object2.top) {
      function1();
    };
  };

  var reduceHealth = function() {
    // healthPoints -= 1;
    console.log("hello");
  };

  var removeBullet = function() {
    console.log("hello2");
  };

  this.gameloop = function(){

    //RENDERS HERO IN GAME
    if(hero != null){
      hero.render(control);
    };

    var heroPosition = hero.getPosition();

    //GENERATE ENEMY TYPE 1
    var newTimeOne = new Date().getTime();
    if (totalEnemies > 98 && lastEnemySpawnOne +enemyCooldownRangeOne < newTimeOne) {
      nextEnemyCooldown = Math.random() * enemyCooldownRangeOne;
      lastEnemySpawnOne = newTimeOne;
      genEnemyOne();
      document.getElementById("en-left").innerHTML = totalEnemies;
    };

    // RENDER ENEMY TYPE 1
    for (var i = 0; i < enemyOne.length; i++) {
      enemyOne[i].render();
    };

    // COLLISION

    for (var i = 0; i < enemyOne.length; i++) {
      var target2 = enemyOne[i];
      var target2pos = target2.getPosition();

      var removeEnemy = function() {
        target2.getSelf().remove();
      };

      collision(heroPosition, target2pos, removeEnemy);
    };

  };

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  this.animloop = function () {
    var self = this;
    requestAnimationFrame(function(){
      self.gameloop();
      self.animloop();
    });
  };

  this.animloop();

  document.addEventListener("DOMContentLoaded", function(event) {
    init();
  });

};

var g = new Game();
