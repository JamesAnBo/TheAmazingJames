var index = require ('./views/index.hbs')
var Enemy = require ('./enemy.js')
var Player = require ('./player.js')

document.addEventListener('DOMContentLoaded', start)

//proof of concept below


function start(){
  var target = document.getElementById('story-text')
  target.innerHTML = index({name: 'testguy'})
  var player = new Player({health: 1000,  minAttackPower: 50, maxAttackPower: 75})
  var testEnemy = new Enemy({health: 650,  minAttackPower: 15, maxAttackPower: 20})
  while(testEnemy.health > 0){
    var startingPlayerHealth = player.health
    var startingEnemyHealth = testEnemy.health
    console.log('player health: ', startingPlayerHealth, ' enemy health: ', startingEnemyHealth)
    player.attack(testEnemy)
    console.log('player took ', startingPlayerHealth - player.health ,' damage! Enemy took ',startingEnemyHealth - testEnemy.health, ' damage!')
  } console.log('the enemy was defeated!')
}
