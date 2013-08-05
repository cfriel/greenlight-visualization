var name = "visualization";
var version = "1.0";

visualization = function(){};

visualization.prototype = new visualization();

Visualization = visualization.prototype;

Meteor.startup(function(){
    
    console.log("loading visualization package");
    
    Greenlight.register_template(name, version, Visualization);
    
});