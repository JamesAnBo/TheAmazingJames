var Enemy = function(props) {
  console.log('enemy props', props)
  this.health = props.health
  this.minAttackPower = props.minAttackPower
  this.maxAttackPower = props.maxAttackPower
}

Enemy.prototype.getAttackDamage = function () {
  var range = this.maxAttackPower - this.minAttackPower
  return this.minAttackPower + Math.floor(Math.random()*range)
}

module.exports = Enemy
