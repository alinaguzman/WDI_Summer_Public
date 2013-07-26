var lStations = [ "8th", "6th", "Union Square", "3rd", "1st" ];
var nStations = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ];
var sixStations = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ];
var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

function Train(name, stations) {
    this.name = name;
    this.stations = stations;
}

var lTrain = new Train('The L Train', lStations);
var nTrain = new Train('The N Train', nStations);
var sixTrain = new Train('The Six Train', sixStations);
var gTrain = new Train('The G Train', gStations);

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