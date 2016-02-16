//alert("hello there!");
var planet = function (name, couldSurvive) {
    this.name = name;
    this.couldSurvive = couldSurvive;
};

var mercury = new planet("Mercury", true);
var venus = new planet("Venus", true);
var mars = new planet("Mars", true);
var jupiter = new planet("Jupiter", false);
