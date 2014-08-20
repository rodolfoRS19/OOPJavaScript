/**
 * Created by Rodolfo on 14/08/14.
 */

/**
 *
 * Herecia de pseudo clase, donde se use la delcaración de la clase para llenarla de propiedades y metodos
 * en el objecto prototype que es el lugar donde se heredan los objectos.
 *
 * NOTA(Este tipo de herencia los objectos no estan creado, aqui se trada de emular una herencia por clases)
 *
 */

//Definicion de constructor para seudoclase
var Mammal = function(name){
    this.name = name;

};


//Crear metodo getName en la propieda prototype
Mammal.prototype.getName = function(){
    return this.name;
};

Mammal.prototype.setName = function(argName){
    this.name = argName;
}

Mammal.prototype.sayHello = function(){
    alert("hola");
};


var Cat = function(name){
    this.name = name
};

//Asigno la instancia de el objecto Mammal a la propiedad prototype de la seudoclase Cat
Cat.prototype = new Mammal();

var myCat = new Cat("felinus");

myCat.setName("Marcianus");
if(myCat.hasOwnProperty("name")){
    alert(myCat.getName());

}else{
    alert("no tengo ese metodo para llamar");
}
