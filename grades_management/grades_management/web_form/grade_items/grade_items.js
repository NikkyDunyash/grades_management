frappe.ready(function() {
	// bind events here
	frappe.web_form.after_save = () => {
		window.location.href = "/view_grades";
	}
})