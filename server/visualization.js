var name = "visualization";
var version = "1.0";

visualization = function(){};

visualization.prototype = new visualization();

visualization.prototype.metadata = function()
{
    
    return {
	description : "Deprecated."
    };
}();


Greenlight.Packages.Visualization = visualization.prototype;

Meteor.startup(function(){
    
    Greenlight.log("loading visualization package");
    
    Greenlight.register_package(name, version, Greenlight.Packages.Visualization);
    
});