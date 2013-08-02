var name = "visualization";
var version = "1.0";

Meteor.startup(function(){
    
    console.log("loading visualization package");
    
    Greenlight.register_template(name, version);
    
});