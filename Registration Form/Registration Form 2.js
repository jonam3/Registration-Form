// calling details in registration form 
let validation_name = localStorage.getItem("local_name");
let validation_id = localStorage.getItem("local_id");
let validation_dob = localStorage.getItem("local_dob");
let validation_email = localStorage.getItem("local_email");
let validation_gender = localStorage.getItem("local_gender");
let validation_contact = localStorage.getItem("local_contact");
let validation_bloodgroup = localStorage.getItem("local_bg");
let validation_address = localStorage.getItem("local_address");
let validation_languageknown = localStorage.getItem("local_lang");

document.getElementById("name").innerHTML = validation_name;
document.getElementById("id").innerHTML = validation_id;
document.getElementById("dob").innerHTML = validation_dob;
document.getElementById("email").innerHTML = validation_email;
document.getElementById("gender").innerHTML = validation_gender;
document.getElementById("contact").innerHTML = validation_contact;
document.getElementById("bg").innerHTML = validation_bloodgroup;
document.getElementById("address").innerHTML = validation_address;
document.getElementById("lang").innerHTML = validation_languageknown;


function back(){

}
