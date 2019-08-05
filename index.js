function dwarfRollCall(dwarf) {
  var arr = [];
  for (var i = dwarf.length / 2; i < dwarf.length; i += 1) {
    var char = dwarf[i];
    arr.push(`${i + 1}. ${char} `);
  }
  return arr.join('');
}


function summonCaptainPlanet(calls) {
  var arr = [];
  for (var i = 0; i < calls.length; i += 1) {
    var ele = calls[i];
    arr.push(ele.toUpperCase() + '!');
  }
  return arr;
}


function longPlaneteerCalls(words) {
  if (words.length > 4) {
    return true;
  }else{
    return false;
  }
}


function findTheCheese(food) {
  var cheese = ['cheddar', 'gouda', 'camembert'];
  for (var i = 0; i < food.length; i += 1) {
    for (var j = 0; j < cheese.length; j += 1) {
      if (food[i] === cheese[j]) {
        return cheese[j];
      }
    }
  }
  return 'no cheese!';
}





