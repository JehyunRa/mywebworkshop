//temporary variables to hold mouse x-y pos.s
var x = 0;
var y = 0;
var tempX = 0;

function showCoor(event) {
  x = event.clientX;
  y = event.clientY;
  moveDiv(x);
  var coor = "Coordinates: ("+x+","+y+")";
  document.getElementById("demo").innerHTML = coor;
}
function clearCoor() {
  document.getElementById("demo").innerHTML = "demo";
}

//objects
var objectArray = ['object01', 'object02', 'object03', 'object04', 'object05'];
var parallaxArray = [0.3, 0.5, 0.1, 0.8, 3]
var objectPositionX = [250, 400, 300, -150, -1000]

function moveDiv(x) {
  for (var i = 0; i < objectArray.length; i++) {
    tempX =x*parallaxArray[i]+objectPositionX[i];
    document.getElementById(objectArray[i]).style.left = tempX + 'px';
  }
}

/* phased out until figuring out how to connect javascript to html

//set-up to use getMouseXY function on MouseMove
document.onmousemove = getMouseXY();

//main function to retrieve mouse x-y pos.s
function getMouseXY(e) {
  tempX = event.clientX + document.body.scrollLeft
  tempY = event.clientY + document.body.scrollTop
  moveDiv(tempX);
  return true;
}
*/