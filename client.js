var index = require ('./views/index.hbs')

document.addEventListener('DOMContentLoaded', start)

//proof of concept below


function start(){
  var target = document.getElementById('story-text')
  target.innerHTML = index({name: 'testguy'})

}

var introButton = document.getElementById("introButton")

// var introArray = ['this is part one', 'this is part 2', 'this is part 3']
var introduction = function(){
 for (var i = 0; i < intro.length; i++) {
   intro[i]
 }
 console.log(introduction)
}

introButton.addEventListener('click', introduction)
