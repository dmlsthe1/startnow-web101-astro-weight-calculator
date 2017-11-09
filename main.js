var planets = [
    ["Pluto", 0.06],
    ["Neptune", 1.148],
    ["Uranus", 0.917],
    ["Saturn", 1.139],
    ["Jupiter", 2.640],
    ["Mars", 0.3895],
    ["Moon", 0.1655],
    ["Earth", 1],
    ["Venus", 0.9032],
    ["Mercury", 0.377],
    ["Sun", 27.9]
] // var planets

var selectElement = document.getElementById("planets");

planets.reverse().forEach(function(planet) {
    var option = document.createElement("option");
    option.value = planet[0];
    option.innerHTML = planet[0];
    selectElement.appendChild(option);
}); // end of planets.forEach

function calculateWeight(weight, planetName) {
    for (var i = 0; i < planets.length; i++) {
        if (planetName === planets[i][0]) {
            return weight * planets[i][1];
        }
    }
} // end of calculateWeight

function handleClickEvent(event) {
    event.preventDefault();
    var userWeight = document.getElementById("user-weight").value;
    var planetName = document.getElementById("planets").value;
    var result = calculateWeight(parseInt(userWeight), planetName);
    var fullResult = "If you were on " + planetName + ", you would weigh " + result + "lbs!";
    document.getElementById("output").innerHTML = fullResult;
} // end of handleClickEvent

function togglePluto() {
    var planetSelection = document.getElementById("planets");
    var checkedOrNot = document.getElementById("check-pluto");
    console.log(checkedOrNot.checked);
    if (!checkedOrNot.checked) {
        for (var i = 0; i < planetSelection.children.length; i++) {
            if ("Pluto" === planetSelection.children[i].getAttribute("value")) {
                return planetSelection.removeChild(planetSelection.children[i]);
            }   
        }
    }
    var option = document.createElement("option");
    option.value = "Pluto";
    option.innerHTML = "Pluto";
    selectElement.appendChild(option);
}

var buttonId = document.getElementById("calculate-button");
buttonId.addEventListener("click", handleClickEvent);
var checkPluto = document.getElementById("check-pluto");
checkPluto.addEventListener("click", togglePluto);