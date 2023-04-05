// Task 3: Print Project Data to Page
// Create a function that will read the saved projects from localStorage.

// Create a table row (<tr>) element and save it to a variable.

// If the project is past due, give the row a class so that the row for the project will have a light red background. If the project is due today, give the row a class so that the row will have a light yellow background.

// Create a table detail (<td>) element for each of the corresponding project fields in Task 1.

// Append each <td> element to the <tr>.

// Append each <tr> to the <tbody> element on the page.

// Don't forget to clear the <tbody> before adding all the rows.

// Add a call to the function when the page loads.

// Update the function responsible for capturing form data so that it calls the function for printing the data.

var savedProject = '';

function readSavedProject(){
    savedProject = JSON.parse(localStorage.getItem("saved"));
    
    textarea.val(savedProject);

};

var newTR = $('<tr>');
newTR = savedProject;

clickBtn.on('click', function(event){
event.preventDefault();
var text = DOM-FOR-TEXTAREA.val();

});
