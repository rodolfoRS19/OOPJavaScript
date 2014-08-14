/**
 * Created by Rodolfo on 13/08/14.
 */


/**
 *Tecnica en javascript para hacer a una funcion recordar los valores anterios
 * (Se dota de memoraria a las funciones)
 *
 */


//El algoritmo trabaja, pero se hace de una forma poco eficiente.

var fibonacci = function (n) {

    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

for (var i = 0; i <= 10; i += 1) {

    document.writeln('// ' + i + ': ' + fibonacci(i));
};




var fibonacci = function ( ) {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}( );