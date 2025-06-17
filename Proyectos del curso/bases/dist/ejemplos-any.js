"use strict";
// Ejemplos de uso del tipo 'any' en TypeScript
// 1. Variable básica con any
let variableFlexible = 42;
variableFlexible = "ahora soy un string";
variableFlexible = true;
variableFlexible = { nombre: "Juan" };
// 2. Arrays con any
const arrayMixto = [1, "texto", true, { id: 1 }];
// 3. Funciones que aceptan any
function procesarCualquierValor(dato) {
    console.log(typeof dato, dato);
}
const config = {
    id: 1,
    datos: { usuario: "admin", nivel: 5 },
    configuracion: ["config1", 123, true]
};
// 5. Uso de any en APIs dinámicas
function parsearRespuestaAPI(respuesta) {
    if (typeof respuesta === "string") {
        return JSON.parse(respuesta);
    }
    return respuesta;
}
// 6. Casting con any
const numeroComoString = "42";
const numero = numeroComoString;
// 7. Funciones que retornan any
function obtenerDatoDinamico() {
    const random = Math.random();
    if (random < 0.33)
        return "texto";
    if (random < 0.66)
        return 42;
    return { tipo: "objeto" };
}
// 8. Uso de any en eventos
function manejadorEventoGenerico(evento) {
    console.log("Tipo de evento:", evento.type);
    console.log("Objetivo:", evento.target);
}
// 9. Objetos dinámicos
const almacenDinamico = {};
almacenDinamico.numero = 42;
almacenDinamico.texto = "Hola";
almacenDinamico.objeto = { x: 1, y: 2 };
// NOTA: Aunque 'any' es flexible, se recomienda usarlo con moderación
// ya que elimina las ventajas del sistema de tipos de TypeScript.
// Siempre que sea posible, es mejor usar tipos más específicos o 'unknown'. 
