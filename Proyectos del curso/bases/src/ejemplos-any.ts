// Ejemplos de uso del tipo 'any' en TypeScript

// 1. Variable básica con any
let variableFlexible: any = 42;
variableFlexible = "ahora soy un string";
variableFlexible = true;
variableFlexible = { nombre: "Juan" };

// 2. Arrays con any
const arrayMixto: any[] = [1, "texto", true, { id: 1 }];

// 3. Funciones que aceptan any
function procesarCualquierValor(dato: any): void {
    console.log(typeof dato, dato);
}

// 4. Objetos con propiedades any
interface ConfiguracionFlexible {
    id: number;
    datos: any;
    configuracion: any;
}

const config: ConfiguracionFlexible = {
    id: 1,
    datos: { usuario: "admin", nivel: 5 },
    configuracion: ["config1", 123, true]
};

// 5. Uso de any en APIs dinámicas
function parsearRespuestaAPI(respuesta: any) {
    if (typeof respuesta === "string") {
        return JSON.parse(respuesta);
    }
    return respuesta;
}

// 6. Casting con any
const numeroComoString: string = "42";
const numero: number = (numeroComoString as any) as number;

// 7. Funciones que retornan any
function obtenerDatoDinamico(): any {
    const random = Math.random();
    if (random < 0.33) return "texto";
    if (random < 0.66) return 42;
    return { tipo: "objeto" };
}

// 8. Uso de any en eventos
function manejadorEventoGenerico(evento: any) {
    console.log("Tipo de evento:", evento.type);
    console.log("Objetivo:", evento.target);
}

// 9. Objetos dinámicos
const almacenDinamico: { [key: string]: any } = {};
almacenDinamico.numero = 42;
almacenDinamico.texto = "Hola";
almacenDinamico.objeto = { x: 1, y: 2 };

// 10. Uso de any en bibliotecas externas
interface BibliotecaExterna {
    datos: any;
    ejecutar: (config: any) => any;
}

// Ejemplos de uso
console.log("1. Variable flexible:", variableFlexible);
console.log("2. Array mixto:", arrayMixto);
procesarCualquierValor("test");
console.log("4. Configuración:", config);
console.log("7. Dato dinámico:", obtenerDatoDinamico());
console.log("9. Almacén dinámico:", almacenDinamico); 