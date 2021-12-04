window.onload = function(){

    bugme() 
	
};

function bugme(){



	let button = document.querySelector('form');
    let login = button.getElementsByTagName('button')[0];

	function loginUser(){
		$("jobdetails").setAttribute("id", "unhide");
	}
	
	
	login.addEventListener('click', (event) => {
        loginUser();
        event.preventDefault();
        
    })   

	


        




















}
