var index = require ('./views/index.hbs')
var Enemy = require ('./enemy.js')
var Player = require ('./player.js')

document.addEventListener('DOMContentLoaded', start)

//proof of concept below


function start(){
  var target = document.getElementById('story-text')
  target.innerHTML = index({name: 'testguy'})
  var player = new Player({health: 100, attackPower: 50})
  var testEnemy = new Enemy({health: 65, attackPower: 7})
  while(testEnemy.health > 0){
    console.log('player health: ', player.health, ' enemy health: ', testEnemy.health)
    player.attack(testEnemy)
  } console.log('the enemy was defeated!')
}
