var index = require ('./views/index.hbs')
var Enemy = require ('./enemy.js')
var Player = require ('./player.js')

document.addEventListener('DOMContentLoaded', start)

//proof of concept below


function start(){
  var introButton = document.getElementById("introButton")
  console.log('i am a button', introButton)
  introButton.addEventListener('click', introduction);


  var target = document.getElementById('story-text')
  target.innerHTML = index({name: 'testguy'})
  var player = new Player({health: 100, attackPower: 50})
  var testEnemy = new Enemy({health: 65, attackPower: 7})
  while(testEnemy.health > 0){
    console.log('player health: ', player.health, ' enemy health: ', testEnemy.health)
    player.attack(testEnemy)
  } console.log('the enemy was defeated!')
}


var introArray = ['this is part one', 'this is part 2', 'this is part 3']
var battleText = 'we are battling like champions!'
var indexIntro = -1
var introduction = function(){
  indexIntro ++
  var target = document.getElementById('story-text')
  target.innerHTML = introArray[indexIntro]

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
