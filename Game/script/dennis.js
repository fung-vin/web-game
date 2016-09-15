the way of including one function


    denis = function (target, bullet, functionName) {
      var heroPosition   = hero.getPosition();   //gets hero position
      var enemyBullets   = enemy.getBullets(); // gets enemy array

      for (var i = 0; i < enemyBullets.length; i++) {
        var enemyBullet = enemyBullets[i];
        var eBulletInfo = enemyBullet.getBulletInfo();

        if(eBulletInfo.x < heroPosition.left + heroPosition.width &&
           eBulletInfo.x + eBulletInfo.width > heroPosition.left  &&
           eBulletInfo.y < heroPosition.top + heroPosition.height &&
           eBulletInfo.y + eBulletInfo.height > heroPosition.top) {
          hero.getHero().remove();
          callback();
        }
      }
    }

    denis("reduceHealth")
    denis(enemy."alive")