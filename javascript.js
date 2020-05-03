
onload = () => {
	let form = document.getElementById('formId');
	form.noValidate = true;
	form.addEventListener('submit', function(event){
		if (!event.target.checkValidity()) {
			event.preventDefault();
			alert('Please, fill the form.');
		}	event.preventDefault();
		
		let regex = /^\w{1,17}@\w+\.\w{2,4}$/;
		let emailId = document.getElementById('emailId');
			
			if (!regex.test(emailId.value)) { 
				alert('Please, fill the email.');
				
			} else { 
				form.submit();
				alert('Submitted.');
			}
		
		event.preventDefault();
		emailId.value='';
		
}, form.noValidate =  false);

}  

