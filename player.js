var Player = function(props) {
  console.log('player props', props)
  this.health = props.health
  this.maxAttackPower = props.maxAttackPower
  this.minAttackPower = props.minAttackPower
}

Player.prototype.getAttackDamage = function () {
  var range = this.maxAttackPower - this.minAttackPower
  return this.minAttackPower + Math.floor(Math.random()*range)
}

Player.prototype.attack = function (enemy) {
  enemy.health -= this.getAttackDamage()
  this.health -= enemy.getAttackDamage()
  console.log('attack happened! enemy health:', enemy.health, ' player health: ', this.health)
}

module.exports = Player
