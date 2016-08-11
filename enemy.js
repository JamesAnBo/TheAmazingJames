var Enemy = function(props) {
  console.log('enemy props', props)
  this.health = props.health
  this.attackPower = props.attackPower
}

module.exports = Enemy
