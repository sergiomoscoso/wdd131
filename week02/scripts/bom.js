// 1. Select the input, button, and list elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 2. Create a click event listener for the Add Chapter button
button.addEventListener('click', function() {
    
    // 3. Check if the input is not blank before proceeding
    if (input.value.trim() !== '') {
        
        // Create the list item and delete button elements
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        // Populate the li text with the input value
        li.textContent = input.value;
        
        // Set up the delete button text and accessibility label
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
        
        // Append the delete button to the li, and the li to the list
        li.append(deleteButton);
        list.append(li);
        
        // Add a click event listener to the delete button to remove the item
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        
        // Clear the input value and return the focus (cursor) to the input field
        input.value = '';
        input.focus();
        
    } else {
        // If the input is blank, just return focus to the input field
        input.focus();
    }
});