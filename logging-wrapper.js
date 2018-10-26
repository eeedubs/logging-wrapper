

var wrapLog = function (callback, name) {
  /* your code here */
  return function (x, y, z){
    var cbResults = callback(x, y, z);
    var cbName = name;
    var cbInput = "(" + x + ", " + y;
    if (z !== undefined){
      cbInput += ", " + z + ")";
    }
    else {
      cbInput += ")"
    }
    console.log(cbName + cbInput + " => " + cbResults);
  }
}

// this function performs and returns an area calculation
var area = function (x, y) {
  return x * y;
};

//
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

// this function performs and returns a volume calculation
var volume = function (x, y, z) {
  return x * y * z;
};

var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24