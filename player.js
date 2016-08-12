var Player = function(props) {
  console.log('player props', props)
  this.health = props.health
  this.attackPower = props.attackPower
}

Player.prototype.attack = function (enemy) {
  enemy.health -= this.attackPower
  this.health -= enemy.attackPower
}

module.exports = Player
