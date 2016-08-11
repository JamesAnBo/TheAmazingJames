var index = require ('./views/index.hbs')

document.addEventListener('DOMContentLoaded', start)

//proof of concept below


function start(){
  var target = document.getElementById('story-text')
  target.innerHTML = index({name: 'testguy'})

}

var attackButton = document.getElementById("attackButton")
attackButton.onclick = attack();

function attack() {
  var damage = Math.floor(Math.random() * 10)
  console.log(damage);
}
