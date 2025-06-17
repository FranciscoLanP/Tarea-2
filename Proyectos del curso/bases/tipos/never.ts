//explica esto de abajo
// El tipo never se utiliza para indicar que una función nunca devuelve un valor, ya sea porque lanza una excepción o porque entra en un bucle infinito.

// El tipo never es un subtipo de todos los tipos y no puede ser asignado a ninguna variable, ya que indica que la función no puede completar su ejecución normalmente.
// En este caso, la función error lanza una excepción y nunca devuelve un valor, por
// lo tanto, su tipo de retorno es never.
// const error = (message: string):never => {
// throw new Error (message)
// }

// error("Auxilio")
// console.log("Hola Mundo")


const error = (message: string):(never | number) => {
if (false){
    throw new Error(message);   

}
return 1;
}

error("Auxilio")
console.log("Hola Mundo")