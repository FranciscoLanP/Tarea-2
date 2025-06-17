
// Definición de un enum llamado AudioLevel
enum AudioLevel{
    min = 1,
    medium, // asigna 2 automáticamente ya que sigue el orden del anterior si no se le asigna nada
    max = 10
}

let currentAudio = AudioLevel.max // asigna el valor max del enum AudioLevel a currentAudio
console.log (currentAudio); // muestra el valor del enum correspondiente a max
console.log (AudioLevel); // muestra todos los valores del enum