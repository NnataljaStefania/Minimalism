
onload = () => {
	let form = document.getElementById('formId');
	form.noValidate = true;
	form.addEventListener('submit', function(event){
		if (!event.target.checkValidity()) {
			event.preventDefault();
			alert('Please, fill the form.');
		}	event.preventDefault();
		
		let regex = /^\w{2,10}@\w+\.\w{2,4}$/;
		let emailId = document.getElementById('emailId');
			
			if (!regex.test(emailId.value)) { 
				
				form.submit();
				alert('Submitted.');
				
				} else { 
					alert('Please, fill the email.');
				}
		
		emailId.value='';
		
}, form.noValidate =  false);

}  

