
window.addEventListener('scroll', function() {
    const imagen = document.getElementById('foto');
    imagen.classList.remove("fotoinicia0");
    imagen.classList.add("fotoinicia");
    setTimeout(function() {
        imagen.classList.remove("fotoinicia");
    imagen.classList.add("fotoinicia0");
      }, 4000);

    

  var miDiv = document.getElementById('hobbies');
  var rect = hobbies.getBoundingClientRect();

  // Comparar la posición con respecto a la parte superior del navegador
  var posicionHastaArriba = rect.top;

    console.log(posicionHastaArriba);
    // Puedes realizar acciones aquí
    if(posicionHastaArriba < 200.734375){
        
        
        console.log(typeof posicionHastaArriba);
    }
  
});