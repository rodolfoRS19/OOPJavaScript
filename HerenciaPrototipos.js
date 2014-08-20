/**
 * Created by Rodolfo on 14/08/14.
 */

/**
 * Herencia de prototipos de enfoca en objetos de javascript y no en  las seudoclases
 *
 * var SeudoClase = function(name){
 *      this.nane;
 * }
 *
 * var SeudoClaseHija = function(name){
 *      this.nane;
 * }
 *
 * SeudoClase.prototype.setName = function(argName){this.name = name}
 * SeudoClaseHija.prototype = new SeudoClase;
 *
 * var Object = new SeudoClase("maria");
 *
 * Object.prototype.myMethod = function(){alert("simulando herencia de prototipo");}
 *
 */