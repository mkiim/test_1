
function check(){
  let flag = 0;
  if (document.contact.name.value == "") { 
		flag = 1;
	}
	else if(document.contact.email.value == ""){ 
		flag = 1;
	}
	else if(document.contact.textarea.value == ""){ 
		flag = 1;
	}
	if(flag){
		window.alert('必須項目に未入力がありました'); 
		return false; 
	}
	else{
		return true; 
	}
}
	const target = document.getElementById("hamburger_box");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("hamburger_eat");
  nav.classList.toggle('in');
});