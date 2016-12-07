var uniq_fast = function (a) {
  var seen = {};
  var out = [];
  var len = a.length;
  var j = 0;
  for(var i = 0; i < len; i++) {
    var item = a[i];
    if(seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = item;
    }
  }
  return out;
}

var Game = function(){

  var hero                   = null;
  var healthPoints           = 3;
  var enemyOne               = [];
  var bullets                = [];
  var totalEnemies           = 10;
  var control                = new Control();
  var lastEnemySpawnOne      = null;
  var nextEnemyCooldownOne   = null;
  var enemyCooldownRangeOne  = 675;
  var enemyCooldownRangeOne2 = 475;


  var genEnemyOne = function() {
    var newEnemy = new EnemyOne();

    enemyOne.push(newEnemy);
    totalEnemies--;
  };

  //INITATE GAME
  var init = function(){
    hero = new Hero();
  };

  var collision = function (object1, object2, function1, function2) {
    if(object1.left < object2.left + object2.width &&
      object1.left + object1.width > object2.left  &&
      object1.top < object2.top + object2.height &&
      object1.top + object1.height > object2.top) {
      function1();
      function2();
    };
  };

  var reduceHealth = function() {
    healthPoints -= 1;
    document.getElementById("heroHealth").innerHTML = healthPoints;
  };

  this.gameloop = function(){
    //RENDERS HERO IN GAME
    if(hero != null){
      hero.render(control);
    };

    var heroPosition = hero.getPosition();

    //GENERATE ENEMY TYPE 1 - TIME ONE
    var newTimeOne = new Date().getTime();
    if (totalEnemies > 25 && (lastEnemySpawnOne + enemyCooldownRangeOne) < newTimeOne) {
      nextEnemyCooldown = Math.random() * enemyCooldownRangeOne;
      lastEnemySpawnOne = newTimeOne;
      genEnemyOne();
      document.getElementById("en-left").innerHTML = totalEnemies;
    };

    //GENERATE ENEMY TYPE 1 - TIME TWO
    var newTimeOne = new Date().getTime();
    if (totalEnemies <= 10 && totalEnemies > 0 && (lastEnemySpawnOne + enemyCooldownRangeOne2) < newTimeOne) {
      nextEnemyCooldown = Math.random() * enemyCooldownRangeOne;
      lastEnemySpawnOne = newTimeOne;
      genEnemyOne();
      document.getElementById("en-left").innerHTML = totalEnemies;
    };

    // RENDER ENEMY TYPE 1
    for (var i = 0; i < enemyOne.length; i++) {
      enemyOne[i].render(bullets);
    };

    // COLLISION DETECTION
    var enemiesToRemoveTmp = [];
    var heroBulletsToRemoveTmp = [];
    for (var i = 0; i < enemyOne.length; i++) {
      // COLLISION DETECTION FOR HERO TO ENEMY
      var tEnemy = enemyOne[i];
      var tEnemyPosition = tEnemy.getPosition();
      var removeEnemy = function() {
        tEnemy.alive(false);
        tEnemy.getSelf().remove();  // REMOVES ENEMY UNIT HTML BUT NOT FROM DOM
        enemiesToRemoveTmp.push(i);
      };
      collision(heroPosition, tEnemyPosition, reduceHealth, removeEnemy);

      // COLLISION DETECTION FOR HERO BULLET TO ENEMY
      var heroBullets = hero.getBullets();

      for (var j = 0; j < heroBullets.length; j++) {
        var heroBullet = heroBullets[j];
        var heroBulletPosition = heroBullet.getBulletInfo();
        var removeHeroBullet = function() {
          heroBullet.getBullet().remove();
          heroBulletsToRemoveTmp.push(j);
        };
        collision(heroBulletPosition, tEnemyPosition, removeHeroBullet, removeEnemy);
      };
    };

    thingsRemoval(enemiesToRemoveTmp, enemyOne);
    thingsRemoval(heroBulletsToRemoveTmp, hero.getBullets());

    // RENDER BULLETS
    var bulletsToRemoveTmp = [];
    for (var i = 0; i < bullets.length; i++) {
      if (bullets[i].render()) {
        bulletsToRemoveTmp.push(i);
      };
    };

    // COLLISION DETECTION FOR ENEMY BULLET TO HERO
    for (var l = 0; l < bullets.length; l++) {
      var enemyBullet = bullets[l];
      var enemyBulletPosition = enemyBullet.getBulletInfo();
      var removeEnemyBullet = function() {
        enemyBullet.getBullet().remove();
        bulletsToRemoveTmp.push(l)
      };
      collision(heroPosition, enemyBulletPosition, reduceHealth, removeEnemyBullet);
    };

    thingsRemoval(bulletsToRemoveTmp, bullets);

    // WIN CONIDTION
    if(enemyOne.length == 0 && totalEnemies == 0) {
      $("#gameboard").append("<div id='win-cont'><h1 id='win-msg'>You have won!</h1></div>");
      enemyOne.remove();
    };

    // LOSE CONDITION
    if (healthPoints == 0) {
      $("#gameboard").append("<div id='dead-cont'><h1 id='dead-msg'>You have lost!</h1></div>");
      hero.remove();
    };
  };

  // THINGS REMOVAL
  var thingsRemoval = function (arrayTmp, mainArray) {
    var indexArray = uniq_fast(arrayTmp).sort(function(a, b){return b-a});

    for (var i = 0; i < indexArray.length; i++) {
      var index = indexArray[i];
      mainArray.splice(index, 1);
    }
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
