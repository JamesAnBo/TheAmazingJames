var index = require ('./views/index.hbs')

document.addEventListener('DOMContentLoaded', start)

//proof of concept below


function start(){
  var target = document.getElementById('story-text')
  target.innerHTML = index({story: 'This is the story.'})

}
