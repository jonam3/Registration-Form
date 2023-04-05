// function
function validation() {
  let err = 0;

  // variables
  var name1 = document.getElementById("name").value;
  var id1 = document.getElementById("id").value;
  var dob1 = document.getElementById("dob").value;
  var email1 = document.getElementById("email").value; 
  var genderM = document.getElementById("male");
  var genderF = document.getElementById("female");
  var gender123 = document.getElementsByName('gender');
  var contact1 = document.getElementById("contact").value;
  var bg1 = document.getElementById("bg").value;
  var address1 = document.getElementById("address").value;
  
 
  
  

  // // regex validation
  var namecheck1 = /^[A-Za-z_\s]{3,20}$/;
  var idcheck1 = /^[a-z_]{0,2}-{1}[0-9]{0,5}$/;
  var emailcheck1 = /^[A-Za-z_0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  var contactcheck1 = /^[7-9]{1}[0-9]{9}$/;
  var bgcheck1 = /^[A|B|AB|O][ ][\+\-]$/;
  var addresscheck1 = /^[0-9a-zA-Z\s,-./]{8,}$/;

  // local storage
  localStorage.setItem("local_name", name1)
  localStorage.setItem("local_id", id1)
  localStorage.setItem("local_dob", dob1)
  localStorage.setItem("local_email", email1)
  localStorage.setItem("local_contact", contact1)
  localStorage.setItem("local_bg", bg1)
  localStorage.setItem("local_address", address1)

  // local storage for gender
  if(genderM.checked){
    localStorage.setItem("local_gender", genderM.value)
  }
  else if(genderF.checked){
    localStorage.setItem("local_gender",genderF.value)
  }
  

  // local storage for language known
  let checkbox1 = document.getElementsByName("Language");
  let  language_known = "";

  for(i=0;i<checkbox1.length;i++)
  {
    if(checkbox1[i].checked == true)
    {
      language_known = language_known + checkbox1[i].value + "  " + "  ";
    }
  }
  localStorage.setItem("local_lang",language_known)

 

  // condition check with OR operator

  if (name1 == '' || !namecheck1.test(name1)) {
    document.getElementById('nameerror').innerHTML = "*Enter your valid Name must be above 3 character";
    document.getElementById('name').style.borderColor = "red";
    ++err
  } else {
    document.getElementById('nameerror').innerHTML = "";
    document.getElementById('name').style.borderColor = "green";
  }

  if (id1 == '' || !idcheck1.test(id1)) {
    document.getElementById('iderror').innerHTML = "*enter your valid id";
    document.getElementById('id').style.borderColor = "red";
    ++err
  } else {
    document.getElementById('iderror').innerHTML = "";
    document.getElementById('id').style.borderColor = "green";
  }

  if (dob1 == '') {
    document.getElementById('doberror').innerHTML = "*enter your valid dob";
    document.getElementById('dob').style.borderColor = "red";
    ++err
  } else {
    document.getElementById('doberror').innerHTML = "";
    document.getElementById('dob').style.borderColor = "green";
  }

  if (email1 == '' || !emailcheck1.test(email1)) {
    document.getElementById('emailerror').innerHTML = "*Enter your valid email id must contain @ and '.com'";
    document.getElementById('email').style.borderColor = "red";
    ++err
  } else {
    document.getElementById('emailerror').innerHTML = "";
    document.getElementById('email').style.borderColor = "green";
  }

  if (!(gender123[0].checked || gender123[1].checked)) {
    document.getElementById("gendererror").innerHTML = "select your gender";
    ++err
  } else {
    document.getElementById("gendererror").innerHTML = "";
  }

  if (contact1 == '' || !contactcheck1.test(contact1)) {
    document.getElementById('contacterror').innerHTML = "*Enter your valid contact no";
    document.getElementById('contact').style.borderColor = "red";
    ++err
  } else {
    document.getElementById('contacterror').innerHTML = "";
    document.getElementById('contact').style.borderColor = "green";
  }

  if (bg1 == '' || !bgcheck1.test(bg1)) {
    document.getElementById('bgerror').innerHTML = "*Enter your valid blood group";
    document.getElementById('bg').style.borderColor = "red";
    ++err
  } else {
    document.getElementById('bgerror').innerHTML = "";
    document.getElementById('bg').style.borderColor = "green";
  }

  if (address1 == '' || !addresscheck1.test(address1)) {
    document.getElementById('addresserror').innerHTML = "*Enter your valid address";
    document.getElementById('address').style.borderColor = "red";
    ++err
  } else {
    document.getElementById('addresserror').innerHTML = "";
    document.getElementById('address').style.borderColor = "green";
  }

  if(!(checkbox1[0].checked || checkbox1[1].checked || checkbox1[2].checked || checkbox1[3].checked)) {
    document.getElementById("langerror").innerHTML = "select language you known";
    ++err
  } else {
    document.getElementById("langerror").innerHTML = "";
      
   }
  
  if (err == 0) { return true; } else { return false; }
}



// // regex validation
var namecheck = /^[A-Za-z_\s]{3,20}$/;
var idcheck = /^[a-z_]{0,2}-{1}[0-9]{0,5}$/;
var emailcheck = /^[A-Za-z_0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
var contactcheck = /^[7-9]{1}[0-9]{9}$/;
var bgcheck = /^[A|B|AB|O][ ][+-]$/
var addresscheck = /^[0-9a-zA-Z\s,-./]{8,}$/

// condition if /else
function nameCheck() {
  var name = document.getElementById("name").value;
  if (namecheck.test(name)) {
    document.getElementById('nameerror').innerHTML = "";
    document.getElementById('name').style.borderColor = "green";
  } else {
    document.getElementById('nameerror').innerHTML = "*Enter your valid Name must be above 3 character";
    document.getElementById('name').style.borderColor = "red";
    return false;
  }
}

function idCheck() {
  var id = document.getElementById("id").value;
  if (idcheck.test(id)) {
    document.getElementById('iderror').innerHTML = "";
    document.getElementById('id').style.borderColor = "green";
  } else {
    document.getElementById('iderror').innerHTML = "*enter your valid id";
    document.getElementById('id').style.borderColor = "red";
    return false;
  }
}

function dobCheck() {
  var dob = document.getElementById("dob").value;
  if (dob) {
    document.getElementById('doberror').innerHTML = "";
    document.getElementById('dob').style.borderColor = "green";
  } else {
    document.getElementById('doberror').innerHTML = "*enter your valid dob";
    document.getElementById('dob').style.borderColor = "red";
    return false;
  }
}

function emailCheck() {
  var email = document.getElementById("email").value;
  if (emailcheck.test(email)) {
    document.getElementById('emailerror').innerHTML = "";
    document.getElementById('email').style.borderColor = "green";
  } else {
    document.getElementById('emailerror').innerHTML = "*email must contain @ and '.com'";
    document.getElementById('email').style.borderColor = "red";
    return false;
  }
}

function genderv() {
let gender = document.getElementsByName('gender');
 if ((gender[0].checked || gender[1].checked)) {
    document.getElementById("gendererror").innerHTML = "";
  } else {
    document.getElementById("gendererror").innerHTML = " select your gender";
    return false; 
  }
}

function contactCheck() {
  var contact = document.getElementById("contact").value;
  if (contactcheck.test(contact)) {
    document.getElementById('contacterror').innerHTML = "";
    document.getElementById('contact').style.borderColor = "green";
  } else {
    document.getElementById('contacterror').innerHTML = "*must contain 10 numbers ";
    document.getElementById('contact').style.borderColor = "red";
    return false;
  }
}

function bgCheck() {
  var bg = document.getElementById("bg").value;
  if (bgcheck.test(bg)) {
    document.getElementById('bgerror').innerHTML = "";
    document.getElementById('bg').style.borderColor = "green";
  } else {
    document.getElementById('bgerror').innerHTML = "*enter your blood group";
    document.getElementById('bg').style.borderColor = "red";
    return false;
  }
}

function addressCheck() {
  var address = document.getElementById("address").value;
  if (addresscheck.test(address)) {
    document.getElementById('addresserror').innerHTML = "";
    document.getElementById('address').style.borderColor = "green";
  } else {
    document.getElementById('addresserror').innerHTML = "*enter your valid address";
    document.getElementById('address').style.borderColor = "red";
    return false;
  }
}

function languagess() {
  let checkbox = document.getElementsByName('Language');
   if ((checkbox[0].checked || checkbox[1].checked || checkbox[2].checked || checkbox[3].checked)) {
      document.getElementById("langerror").innerHTML = "";
    } else {
      document.getElementById("langerror").innerHTML = " select language you known";
      return false; 
    }
  }







