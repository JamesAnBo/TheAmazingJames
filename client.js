
var index = require ('./views/index.hbs')
var Enemy = require ('./enemy.js')
var Player = require ('./player.js')
var survive = require ('./win.js')

document.addEventListener('DOMContentLoaded', start)

//proof of concept below


function start(){
  var target = document.getElementById('body')
  target.innerHTML = index({story: 'This is the story.', image: '../public/images/Village_test.jpg'})
  document.getElementById('test').style.backgroundImage = "url('./images/windows_xp_bliss.jpg')"

  var wonGame = false

  var fight = function() {
    if(battling && !wonGame){
        player.attack(testEnemy)
        if(testEnemy.health <= 0){
          enemyDead = true
        }
        var target = document.getElementById('story-text')
        var battleText = "Scrundgy's health: " + testEnemy.health + " James's health: " + player.health
        if(enemyDead){
          battleText += "<br>  James, obviously too agile, cleaves SCRUNDGE's head in twain .Upon returning to the vilage, he is bestowed the title of AMAZING."
          wonGame = true
        }
        target.innerHTML = battleText
     }
  }

  var introduction = function(){
    indexIntro ++
    var target = document.getElementById('story-text')
    target.innerHTML = introArray[indexIntro]

    if (indexIntro == introArray.length-1){
      introButton.removeEventListener('click', introduction)
      introButton.addEventListener('click', beginAdventure)
    }
   };

    var beginAdventure = function(){
      if(!battling){
      var target = document.getElementById('story-text')
      var battleText = "Scrundgy's health: " + testEnemy.health + " James's health: " + player.health
      target.innerHTML = battleText
      battling = true
      var image = document.getElementById('image')
      image.src = '../public/images/Village_test.jpg'
      }
    var image = document.getElementById('image')
    image.src = '../public/images/dragonimg_test2.jpg'
    document.getElementById('test').style.backgroundImage = "url('./images/fire_background.jpg')"

      if(wonGame) {
        var target = document.getElementById('story-text')
        var victoryText = "Grats, you've won."
        target.innerHTML = victoryText
        var image = document.getElementById('image')
        image.src = '../public/images/victory.jpg'
      }
    }

    var reset = function() {
      console.log("help what's happening")
      introButton.removeEventListener('click', introduction)
      introButton.removeEventListener('click', beginAdventure)
      resetButton.removeEventListener('click', reset)
      attackButton.removeEventListener('click', ("click", fight))
      start()
    }

    var resetButton = document.getElementById('resetButton')
    resetButton.addEventListener('click', reset)

    var attackButton = document.getElementById("attackButton")
    attackButton.addEventListener("click", fight)

  var enemyDead = false
  var battling = false
  var introButton = document.getElementById("introButton")
  introButton.addEventListener('click', introduction);
  var player = new Player({health: 1000,  minAttackPower: 50, maxAttackPower: 75})
  var testEnemy = new Enemy({health: 650,  minAttackPower: 15, maxAttackPower: 20})

  console.log("Scrundgy was here 2016");

  var introArray = ['James awakes up in his small village on the outskirts of westfall...', 'The news board has a display of a fearsome dragon by the name of SCRUNDGEY has been terrorising nearby villagesand needs the be slain, JAMES feels like he is up to the challenge!', 'Upon equipping his sword and shield, James begins his adventure off to the dragons lair out in the burning steppes. A long and vicious journey he would surely encounter many foes.', 'Surprisingly, james makes it to the burning steppes uninterrupted, and un-scathed..', 'Upon seeing the SCRUNDGEY himself James takes up arms and begins a GLORIOUS battle!']
  var indexIntro = -1
}
