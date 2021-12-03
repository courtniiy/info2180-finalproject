window.onload = function(){
    bugme()
};

function bugme(){

	let button = document.querySelector('form');
    let login = button.getElementsByTagName('button')[0];
	let issues = document.getElementsByClassName("issues")
    let new_issue = document.getElementsByClassName("new_issue")
	let add_user = document.getElementsByClassName("add_user");
	
	console.log(login);
	function loginuser(){
		let user = document.getElementById('login_username').value;
		let passw = document.getElementById('login_password').value;
		console.log(user);
		console.log(passw);
		console.log(new_issue);
		console.log(add_user);
	
		console.log(issues);

	issues.id ="unhidden";
	console.log(issues);


	}


	login.addEventListener('click', (event) => {
		
		event.preventDefault();
        loginuser();
		
        
        
    })




















}
