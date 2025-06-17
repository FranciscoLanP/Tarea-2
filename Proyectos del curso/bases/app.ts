(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
    const existe:boolean = false;
   
  
    // Tuplas
    const parejaHeroe: [string, string] = [batman,superman];
    const villano:[string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
    

    //Enumeraciones
    enum Fuerza{
      fuerzaFlash = 1,
      fuerzaSuperman = 5,
      fuerzaBatman = 10,
      fuerzaAcuaman = 15
    }
    const fuerzaFlash:Fuerza = Fuerza.fuerzaFlash;
    const fuerzaSuperman:Fuerza = Fuerza.fuerzaSuperman;
    const fuerzaBatman: Fuerza = Fuerza.fuerzaBatman;
    const fuerzaAcuaman: Fuerza = Fuerza.fuerzaAcuaman;



    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  console.log(activar_batiseñal());

    function pedir_ayuda(): void {
      console.log(  'Auxilio!!!');
    }
    
    
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number =  (poder as string).length; 
    console.log( largoDelPoder );
  
  })()
  
enum enumeracion {
  a=10,
  b,
  c=9,
  d
}
console.log(enumeracion.d); 