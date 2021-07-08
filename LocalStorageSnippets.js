// Set Modal Pop Up with expiration Date WordPress

window.setTimeout(function(){ 
	// First check, if localStorage is supported.
	if (window.localStorage) {
		// Get the expiration date of the previous popup.
		var nextPopup = localStorage.getItem( 'ModalPopUp' );

		if (nextPopup > new Date()) {
			return;
		}

		// Store the expiration date of the current popup in localStorage.
		var expires = new Date();
		expires = expires.setMinutes(expires.getMinutes() + 2);

		localStorage.setItem( 'ModalPopUp', expires );
	}
    jQuery(document).ready(function ($) {
	$("#exampleModalCenter").modal('show');
    });
}, 100);
