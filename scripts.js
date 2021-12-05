window.onload = function(){

    bugme() 
	
};

function bugme(){


	let logged_in = false;
	let button = document.querySelector('form');
    let login = button.getElementsByTagName('button')[0];
	let issues= document.getElementsByClassName("issues");


	function show_many(a){
		for (let element of a) { 
			element.show();		
		}
	}

	function loginUser(){
		
		show_many(issues);
		$(".login").hide();
		logged_in = true;
			
	}

	login.addEventListener('click', (event) => {
		event.preventDefault();
        loginUser();
        
        
    }) 



	$( ".log-out" ).click(function() {
			$("#issues").hide();
			$(".login").show();
			logged_in = false;
			console.log($('.login'));
		  
		});

	$('home_btn').click(function() {

		if (logged_in==true){
			$('.issues').show();
		}

		else{
			alert("Must be logged in to view issues!")
		}
	});

	$('.add_user_home').click(function() {

		if (logged_in==true){
			$('.add_user').show();
		}

		else{
			alert("Must be logged in to add users!")
		}
	});


	$('.new_issue_home').click(function() {

		if (logged_in==true){
			$('.new_issue').show();
		}

		else{
			alert("Must be logged in to create new issues!")
		}
	});

		
	
	
	
	

	


        




















}
