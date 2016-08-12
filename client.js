var index = require ('./views/index.hbs')
var Enemy = require ('./enemy.js')
var Player = require ('./player.js')

document.addEventListener('DOMContentLoaded', start)

//proof of concept below


function start(){
  var target = document.getElementById('body')
  target.innerHTML = index({story: 'This is the story.'})

  var introduction = function(){
    indexIntro ++
    var target = document.getElementById('story-text')
    target.innerHTML = introArray[indexIntro]

    if (indexIntro == 2){
      introButton.removeEventListener('click', introduction)
      introButton.addEventListener('click', beginAdventure)
    }
   };

    var beginAdventure = function(){
      if(!battling){
      var target = document.getElementById('story-text')
      var battleText = "we are battling like champions! <br> enemy's health: " + testEnemy.health + " player's health: " + player.health
      target.innerHTML = battleText
      battling = true
      }
    }

    var reset = function() {
      console.log("help what's happening")
      introButton.removeEventListener('click', introduction)
      introButton.removeEventListener('click', beginAdventure)
      resetButton.removeEventListener('click', reset)
      attackButton.removeEventListener('click', ("click", function() {
        if(battling){
          player.attack(testEnemy)
          if(testEnemy.health <= 0){
            enemyDead = true
          }
          var target = document.getElementById('story-text')
          var battleText = "we are battling like champions! <br> enemy's health: " + testEnemy.health + " player's health: " + player.health
          if(enemyDead){
            battleText += "<br> the enemy has been slain!"
            battling = false
          }
          target.innerHTML = battleText
       }
      }))
      start()
    }
        
    var resetButton = document.getElementById('resetButton')
    resetButton.addEventListener('click', reset)

    var attackButton = document.getElementById("attackButton")
    attackButton.addEventListener("click", function() {
      if(battling){
        player.attack(testEnemy)
        if(testEnemy.health <= 0){
          enemyDead = true
        }
        var target = document.getElementById('story-text')
        var battleText = "we are battling like champions! <br> enemy's health: " + testEnemy.health + " player's health: " + player.health
        if(enemyDead){
          battleText += "<br> the enemy has been slain!"
          battling = false
        }
        target.innerHTML = battleText
     }
    })



  var enemyDead = false
  var battling = false
  var introButton = document.getElementById("introButton")
  console.log('i am a button', introButton)
  introButton.addEventListener('click', introduction);
  var player = new Player({health: 1000,  minAttackPower: 50, maxAttackPower: 75})
<<<<<<< HEAD
  var testEnemy = new Enemy({health: 650,  minAttackPower: 15, maxAttackPower: 20})  while(testEnemy.health > 0){
    var startingPlayerHealth = player.health
    var startingEnemyHealth = testEnemy.health
    console.log('player health: ', startingPlayerHealth, ' enemy health: ', startingEnemyHealth)
    player.attack(testEnemy)
    console.log('player took ', startingPlayerHealth - player.health ,' damage! Enemy took ',startingEnemyHealth - testEnemy.health, ' damage!')
  } console.log('the enemy was defeated!')
  var attackButton = document.getElementById("attackButton")
  attackButton.addEventListener("click", attack)
}

function attack() {
  var damage = Math.floor(Math.random() * 10)
  console.log("You did " + damage + " damage!")
}

=======
  var testEnemy = new Enemy({health: 650,  minAttackPower: 15, maxAttackPower: 20})
>>>>>>> cdeb942fb4c25fdaa8196a1a6c2481e2f285c9fc


<<<<<<< HEAD
  var beginAdventure = function(){
    var target = document.getElementById('story-text')
    target.innerHTML = battleText
  }

  if (indexIntro == 2){
    introButton.removeEventListener('click', introduction)
    introButton.addEventListener('click', beginAdventure)
  }
  console.log('hello i am a test sting');
 };


 var reset = function() {
   start()
 }
 
=======
  var introArray = ['this is part one', 'this is part 2', 'this is part 3']
  var indexIntro = -1
}
>>>>>>> cdeb942fb4c25fdaa8196a1a6c2481e2f285c9fc
