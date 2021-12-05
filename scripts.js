window.onload = function(){

    bugme() 
	
};

function bugme(){



	let button = document.querySelector('form');
    let login = button.getElementsByTagName('button')[0];

	function loginUser(){
		if (/*funtion to verify password*/ == true){
			$(".issues").show();
			$(".login").hide();
		}

		else{
			$("#loginAlert").innerHTML("Password is incorrect!");
	}
	}
	
	
	login.addEventListener('click', (event) => {
		event.preventDefault();
        loginUser();
        
        
    })   

	


        




















}
