window.onload = function(){

    bugme() 
	
};

function bugme(){


	let logged_in = false;


	function empty(txt) 
	{
	 if (txt.length === 0)
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

		if (empty($("#login_username").text())){
			alert("Email Address field is emty");
		}

		else if (validateEmail($("#login_username").text())== false){
			alert("Please enter a valid email address");
		}

		else if (empty($("#login_password").text())){
			alert("Password field is emty");
		}

		else if (validPassword($("#login_password").text()) == false){
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

		if (empty($("#adduserfirstname").text())){
			alert("First name field is emty");
		}

		else if (empty($("#adduserlastname").text())){
			alert("Last name field is emty");
		}
		else if (empty($("#adduseremail").text())){
				alert("Email Address field is emty");
			}

		else if (validateEmail($("#adduseremail").text())== false){
				alert("Please enter a valid email address");
			}

		else if (empty($("#adduserpassword").text())){
				alert("Password field is emty");
			}

		else if (validPassword($("#adduserpassword").text()) == false){
				alert("Password not valid!");
			}

		else{

			let new_user = [$("#adduserfirstname").text(), $("#adduserlastname").text(), $("#adduseremail").text()
			("#adduserpassword").text()	];

			/*function to add user to database */
		}
		
				});



		
	
	
	
	

	


        




















}
