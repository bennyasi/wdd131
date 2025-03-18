const input = document.querySelector('#favchap');  // Select input field
const button = document.querySelector('.button'); // Select button
const list = document.querySelector('#list'); // Select parent list container (ul or ol)

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {  // Ensure input is not empty
        const li = document.createElement('li'); // Create list item
        const deleteButton = document.createElement('button'); // Create delete button

        li.textContent = input.value; // Set list item text
        deleteButton.textContent = '❌'; // Set button text

        li.append(deleteButton); // Add delete button to li
        list.append(li); // Add li to the list

        deleteButton.addEventListener('click', function () {
            list.removeChild(li); // Remove item when ❌ is clicked
        });

        input.value = ''; // Clear input field
        input.focus(); // Refocus on input field
    } else {
        alert("Please enter a chapter!"); // Warn user if input is empty
    }
});
