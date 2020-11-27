function CheckFirstName(){
	let fname = $('#firstName').val();
	let reg = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
	if(reg.test(fname))
		$('#fNameError').text('');
	else
		$('#fNameError').text('Name is not Valid');

}

function CheckLastName(){
	let fname = $('#lastName').val();
	let reg = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
	if(reg.test(fname))
		$('#lNameError').text('');
	else
		$('#lNameError').text('Name is not Valid');
		
}
function CheckEmailAddress(){
	let email = $('#emailAddress').val();
	let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if(reg.test(email))
		$('#emailAddressError').text('');
	else
		$('#emailAddressError').text("This expression matches email addresses, and checks that they are of the proper form. It checks to ensure the top level domain is between 2 and 4 characters long, but does not check the specific domain against a list (especially since there are so many of them now).");
		
}

function CheckPassword(){
	let password = $('#password').val();
	let reg = /^[a-zA-Z]\w{3,14}$/ ;
	if(reg.test(password))
		$('#passwordError').text('');
	else
		$('#passwordError').text("The password's first character must be a letter, it must contain at least 4 characters and no more than 15 characters and no characters other than letters, numbers and the underscore may be used");
}
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function CheckConformPassword(){
	let password = $('#password').val();
	let conformPassword = $('#conformPassword').val();
	if(password == conformPassword) 
		$('#conformPasswordError').text("");
	else 
		$('#conformPasswordError').text("Password Not match");
	
}
function CheckGender(){
        var gender = $("input[type='radio']:checked").val();
      if(gender == Male || gender == Female)
       $('#genderError').text('');
       else
       $('#genderError').text('select gender');  

}
$('#firstName').keyup(function(){
	CheckFirstName();
})

$('#lastName').keyup(function(){
	 CheckLastName();
})
$('#emailAddress').keyup(function(){
	 CheckEmailAddress();
})

$('#password').keyup(function(){
	CheckPassword();
})

$('#conformPassword').keyup(function(){
	CheckConformPassword();
})
$('#register').click(function(){
	CheckGender();
})