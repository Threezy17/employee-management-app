function viewDetails() {
	// Implementation for viewing contact details
	alert("View contact details here.");
}

function editContact() {
	// Implementation for editing contact
	alert("Edit contact here.");
}

function deleteContact() {
	// Implementation for deleting contact
	let deleteConfirmation = confirm(
		"Are you sure you want to delete this contact?",
	);
	if (deleteConfirmation) {
		alert("Contact deleted.");
	} else {
		alert("Deletion cancelled.");
	}
}
