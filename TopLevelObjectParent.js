/**
 * Created by Rodolfo on 11/08/14.
 */

Object.prototype.coordinates = function(x, y){
    alert("position: " + "x = " + x + "y = " + y);
};

var newClass = function(){
    this.x = 0;
    this.y = 0;
};

var ancestorClass = function(){
   var z = 0;
}

var doCreateConcreteObject = function(){
}