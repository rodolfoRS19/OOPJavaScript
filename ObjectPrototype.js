/**
 * Created by Rodolfo on 12/08/14.
 */

var myOuterFunction = function(){
    var tmpMessage;
    return {
        getMessage :function(){
            return tmpMessage;
        },
        setMessage:function(argMessage){
            tmpMessage = argMessage;
        }
    }
}();

myOuterFunction.setMessage("Yeah Baby!!")

console.log(myOuterFunction.getMessage());

