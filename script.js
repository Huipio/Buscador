function searchWords() {
    // Obtener el valor del input de búsqueda
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
  
    // Obtener todos los elementos de párrafo en los que buscar
    var paragraphs = document.getElementsByTagName("p");
  
    // Recorrer cada párrafo para buscar y resaltar las palabras
    for (var i = 0; i < paragraphs.length; i++) {
      // Obtener el contenido del párrafo en minúsculas para una búsqueda sin distinción de mayúsculas
      var paragraphText = paragraphs[i].textContent.toLowerCase();
  
      // Verificar si la palabra de búsqueda está presente en el párrafo
      if (paragraphText.includes(searchInput)) {
        // Crear una expresión regular para encontrar todas las instancias de la palabra de búsqueda
        var regex = new RegExp(searchInput, "g");
  
        // Reemplazar todas las instancias de la palabra de búsqueda con un marcado amarillo
        var highlightedText = paragraphs[i].innerHTML.replace(regex, '<span style="background-color: yellow;">$&</span>');
  
        // Establecer el contenido del párrafo con las palabras resaltadas
        paragraphs[i].innerHTML = highlightedText;
      }
    }
  
    // Redirigir a la primera instancia de la palabra de búsqueda (si hay alguna)
    var firstInstance = document.querySelector('span[style="background-color: yellow;"]');
    if (firstInstance) {
      window.location.hash = firstInstance.id;
    }
  }
  