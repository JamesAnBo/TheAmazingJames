var Enemy = function(props) {
  console.log('enemy props', props)
  this.health = props.health
  this.minAttackPower = props.minAttackPower
  this.maxAttackPower = props.maxAttackPower
  var quote = function() {
    var random = Math.floor(Math.random() * 5)
    if (random == 1) {
      return "Beware the SCRUNDGE!"
    } else if (random == 2) {
      return "Max is a Scrundge"
    } else if (random == 3) {
      return "Mmm, that's a good cuppa joe"
    }
  }
  console.log(quote() || "")
}

Enemy.prototype.getAttackDamage = function () {
  var range = this.maxAttackPower - this.minAttackPower
  return this.minAttackPower + Math.floor(Math.random()*range)
}

module.exports = Enemy
