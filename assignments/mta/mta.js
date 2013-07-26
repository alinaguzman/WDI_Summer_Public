<<<<<<< HEAD
=======
// Refactor your code with underscore
// Prompt the user
// Please choose a startLine
// Please chooose a startStation
// Please choose an endLine
// Please choose an endStation
// Find the intersection
// Display the number of stops
// Track the total journeys taken
// Calculate total cost of journeys taken at $2.50 per ride.

function Train(name, stations) {
  this.name = name;
  this.stations = stations;
}

Train.prototype.distance = function(board, exit) {
  board = this.stations.indexOf(board);
  exit = this.stations.indexOf(exit);
  return Math.abs(board - exit);
};

>>>>>>> upstream/master
var lStations = [ "8th", "6th", "Union Square", "3rd", "1st" ];
var nStations = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ];
var sixStations = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ];
var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];
var sStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

function Train(name, stations) {
    this.name = name;
    this.stations = stations;
}

var lTrain = new Train('The L Train', lStations);
var nTrain = new Train('The N Train', nStations);
var sixTrain = new Train('The Six Train', sixStations);
var gTrain = new Train('The G Train', gStations);

<<<<<<< HEAD
Train.prototype.distance = function(board, exit) {
    board = this.stations.indexOf(board);
    exit = this.stations.indexOf(exit);
    return Math.abs(board - exit);
};


trains = [lTrain, nTrain, sixTrain, gTrain];

function displayLines(){
    var trainNames = "";
    for (var i = 0; i< trains.length; i++) {
        trainNames += trains[i].name + "\n";
    }
    return trainNames.trim();
}

var trainMsg = "Which train would you like to get on?\n" + displayLines();
firstTrain = parseFloat(prompt(trainMsg));

function displayStops() {
    var trainStops = "";
    for (var i = 0; i < trains[firstTrain].stations.length; i++ ){
           trainStops += trains[firstTrain].stations[i] + "\n";
    }

    _.each(trains, function(train){ console.log(train.name)});

    return trainStops;
}

var firstStopMsg = "Which stop would you like to get on?\n";
firstStop = prompt(firstStopMsg + displayStops());    //this returns a station name ex "8th"

var trainMsg2 = "Which train would you like to get off?\n" + displayLines();
lastTrain = parseFloat(prompt(trainMsg2));

function displaySecondStops() {
    var trainStops = "";
    for (var i = 0; i < trains[lastTrain].stations.length; i++) {
        trainStops += trains[lastTrain].stations[i] + "\n";
    }
    return trainStops;
}

var secondStopMsg = "Which stop would you like to get off?\n";
secondStop = prompt(secondStopMsg + displaySecondStops()); //returns a string station name

//Doesn't work for G train lol
if (firstTrain === lastTrain){
    alert(trains[firstTrain].distance(firstStop,secondStop) + " stops.");
} else {
    var first = Math.abs(trains[firstTrain].distance(firstStop, "Union Square"));
    var second = Math.abs(trains[lastTrain].distance(secondStop, "Union Square"));
    var totalDistance = Math.abs(first + second);

    totalDistance = Math.abs(first + second)
    alert(totalDistance + " stops.")
}
=======
var trains = [lTrain, nTrain, sixTrain, gTrain, sTrain];

var msg = "Which train would you \nlike to get on?" + displayLines();
var startTrain = prompt(msg);

var trains = [lTrain, nTrain, sixTrain, gTrain];

var msg = "Which train would you \nlike to get on?\n" + displayLines();
var startTrain = prompt(msg);

function displayLines() {
  var trainNames = "";
  for (var i = 0; i < trains.length; i++) {
    trainNames += trains[i].name + "\n";
  }

  forEach(trains, trainName);

  return trainNames.trim();
}


function trainName(train){
  return train.name + "\n"
}

function forEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

function map(array, func) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;
}

function displayStations() {
  var train = null;
  for (var j = 0; j < trains.length; j++) {
    if (trains[j].name === startTrain) {
      train = trains[j];
    }
  }
  var trainStations = "";
  for (var k = 0; k < train.stations.length; k++) {
    trainStations += train.stations[k] + "\n";
  }
  return trainStations.trim();
}

var msg2 = "Which station would you \nlike to get on?\n" + displayStations();
var startStation = prompt(msg2);
>>>>>>> upstream/master
