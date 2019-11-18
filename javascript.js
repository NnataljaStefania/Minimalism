
onload = () => {
	let form = document.getElementById('formId');
	form.noValidate = true;
	form.addEventListener('submit', function(event){
		if (!event.target.checkValidity()) {
			event.preventDefault();
			alert('Please, fill the form.');
		}	event.preventDefault();
		alert('Submitted');
		document.getElementById('emailId').value='';
		
}, form.noValidate =  false);

}  

