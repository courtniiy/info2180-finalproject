window.onload = function(){

    bugme() 
	
};

function bugme(){


	let logged_in = false;


	function empty(txt) 
	{
	 if (txt.length == 0)
	   {   
		  return true; 
	   }  	
	   else{
		   return false; 
	 } }
 
	 function validateEmail(email){
		 let regex = /\S+@\S+\.\S+/;
		 return regex.test(email);
				 }
 
	 function validPassword(pword){
		 let regex =	/^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,15})$/;
		 return regex.test(pword);
 
	 }
	


	$( "#userLogin" ).click(function() {
		email = document.getElementById("login_username").value;
		password = document.getElementById("login_username").value;
		if ( empty(email) ){
			alert("Email Address field is emty");
		}

		else if (validateEmail(email)== false){
			alert("Please enter a valid email address");
		}

		else if (empty(password)){
			alert("Password field is emty");
		}

		else if (validPassword(password) == false){
			alert("Password not valid!");
		}

		else{

			/*if function to verify login details */
			logged_in = true;
			$(".login").hide();
			$('.issues').show();

			/*else alert("Invalid login details!") */
		}

		
		
		
	  
	});


	$( ".log-out" ).click(function() {
			if (logged_in == true){
			logged_in = false;
			$(".login").show();
			$('.issues').hide();
			$('.add_user').hide();
			$('.new_issue').hide();

			}

			else{
				alert("Already logged out");
			}
			
			
		  
		});

	$('.home_btn').click(function() {

		if (logged_in==true){
			$('.issues').show();
			$('.add_user').hide();
			$('.new_issue').hide();
			$('.login').hide();
			
		}

		else{
			alert("Must be logged in to view issues!")
		}
	});

	$('.add_user_home').click(function() {

		if (logged_in==true){
			$('.add_user').show();
			$('.new_issue').hide();
			$('.login').hide();
			$('.issues').hide();
			
		}

		else{
			alert("Must be logged in to add users!")
		}
	});


	$('.new_issue_home').click(function() {

		if (logged_in==true){
			$('.new_issue').show();
			$('.login').hide();
			$('.issues').hide();
			$('.add_user').hide();

		}

		else{
			alert("Must be logged in to create new issues!")
		}
	});




				

	$("add_user_submit").click(function() {

		email = document.getElementById("adduseremail").value;
		password = document.getElementById("adduserpassword").value;
		firstname = document.getElementById("adduserfirstname").value;
		lastname = document.getElementById("adduserlastname").value;

		if (empty(firstname)){
			alert("First name field is emty");
		}

		else if (empty(lastname)){
			alert("Last name field is emty");
		}
		else if (empty(email)){
				alert("Email Address field is emty");
			}

		else if (validateEmail(email)== false){
				alert("Please enter a valid email address");
			}

		else if (empty(password)){
				alert("Password field is emty");
			}

		else if (validPassword(password) == false){
				alert("Password not valid!");
			}

		else{

			let new_user = [firstname, lastname, email
			,password	];

			/*function to add user to database */
		}
		
				});



		
	
	
	
	

	


        




















}
