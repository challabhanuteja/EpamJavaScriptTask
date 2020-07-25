function checkName(){
    let st = document.getElementById("name").value;
    let reg = RegExp("^[a-zA-Z ]{1,30}$");
    if(!reg.test(st))
    {
        document.getElementById("inv-name").innerHTML = "Invalid Name";
        console.log("Invalid name");
    }
    else
    {
        document.getElementById("inv-name").innerHTML = "";
    }

}
function checkPassword(){
    let st = document.getElementById("password").value;
    let reg = RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$");
    if(!reg.test(st))
    {
        document.getElementById("inv-password").innerHTML = "Invalid Password";
        console.log("Invalid Password");
    }
    else
    {
        document.getElementById("inv-password").innerHTML = "";
    }

}
function checkEmail(){
    let st = document.getElementById("email").value;
    let reg = RegExp("^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$");
    if(!reg.test(st))
    {
        document.getElementById("inv-email").innerHTML = "Invalid Email";
        console.log("Invalid email");
    }
    else
    {
        document.getElementById("inv-email").innerHTML = "";
    }

}
function checkDOB(){
    let st = document.getElementById("date").value;
    if(!isValidDate(st))
    {
        document.getElementById("inv-dob").innerHTML = "Invalid Date of Birth";
        console.log("Invalid dob");
    }
    else
    {
        document.getElementById("inv-dob").innerHTML = "";
    }

}
function checkPhone(){
    let st = document.getElementById("phone").value;
    let reg = RegExp("^[0-9]{10}$");
    if(!reg.test(st))
    {
        document.getElementById("inv-phone").innerHTML = "Invalid Phone Number";
        console.log("Invalid phone");
    }
    else
    {
        document.getElementById("inv-phone").innerHTML = "";
    }
}

function isValidDate(s) {
    if ( ! /^\d\d\/\d\d\/\d\d\d\d$/.test(s) ) {
        return false;
    }
    const parts = s.split('/').map((p) => parseInt(p, 10));
    parts[0] -= 1;
    const d = new Date(parts[2], parts[0], parts[1]);
    return d.getMonth() === parts[0] && d.getDate() === parts[1] && d.getFullYear() === parts[2];
}

function validateForm()
{
    checkName();
    checkPassword();
    checkEmail();
    checkDOB();
    checkPhone();
}