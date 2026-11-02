// Declarar las referencias a los elementos del DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('#submit');
const list = document.querySelector('#list');

// Crear el evento 'click' para el botón de agregar
button.addEventListener('click', function() {
    
    // Validar que el input no esté vacío usando .trim()[cite: 2]
    if (input.value.trim() !== '') {
        
        // Crear los elementos de la lista y el botón de borrar
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        // Asignar el texto del input al elemento li y un icono/texto al botón de eliminar
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        
        // Agregar el botón de eliminar dentro del elemento li[cite: 2]
        li.append(deleteButton);
        
        // Agregar el elemento li a la lista ul[cite: 2]
        list.append(li);
        
        // Añadir el evento para que el botón de eliminar borre el capítulo[cite: 2]
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        
        // Limpiar el campo de entrada y regresar el foco (cursor)[cite: 2]
        input.value = '';
        input.focus();
        
    } else {
        // Si está vacío, simplemente devolvemos el foco al input
        input.focus();
    }
});