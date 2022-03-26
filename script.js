/*getting all required tags and id from html doc*/
const form = document.querySelector('#form');
const fName = document.querySelector('#fName');
const fError = document.getElementById('fError');
const lName = document.querySelector('#lName')
const lError = document.getElementById('lError')
const email = document.querySelector('#email')
const eError = document.getElementById('eError')
const password = document.querySelector('#password')
const pError = document.getElementById('pError')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.getElementById('img4')


//adding eventlistener to form on submit
form.addEventListener('submit', e => {
  e.preventDefault() //prevents form from being submitted
  
  checkFname() //calls checkFname function
  checkLname() //call this function
  checkEmail() //calls this function 
  checkPass()  //calla this function
  
  
  //on key up, check the inputs on each function
  fName.onkeyup = () => {checkFname()};
  lName.onkeyup = () => {checkLname()};
  email.onkeyup = () => {checkEmail()};
  password.onkeyup = () => {checkPass()};


// cbeck first name function
  function checkFname(){
    const fValue = fName.value.trim();//trims value removing whitespace
    
    if (fValue === "" ) {
      fError.innerText = "First name cannot be empty";
      fName.classList.add('error');
      img1.classList.add('imgerror')
    }
    else{
      fError.innerText = ""
      fName.classList.remove('error');
      img1.classList.remove('imgerror')
    }
  }
  
  
  //check last name function
  function checkLname(){
    const lValue = lName.value.trim();
    
    if(lValue === ""){
      lError.innerText = "Last name cannot be empty";
      lName.classList.add('error');
      img2.classList.add('imgerror')
    }
    else{
      lError.innerText = ""
      lName.classList.remove('error');
      img2.classList.remove('imgerror')
    }
  }
  
  
  //check email function
  function checkEmail(){
    const emailvalue = email.value.trim();
    
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //email pattern validation 

    if(emailvalue === ""){
      eError.innerText = "Email cannot be empty";
      email.classList.add('error');
      img3.classList.add('imgerror')
    }
    //else if emailvalue does not match pattern
    else if(!emailvalue.match(pattern)){
      eError.innerText = "Looks like this is not an email"
      email.classList.add('error');
      img3.classList.add('imgerror')
    }
    else{
      eError.innerText = ""
      email.classList.remove('error');
      img3.classList.remove('imgerror')
    }
  }
  
  
  //check password function
  function checkPass(){
    const pValue = password.value.trim();
    
    if(pValue === ""){
      pError.innerText = "Password cannot be empty"
      password.classList.add('error')
      img4.classList.add('imgerror')
    }
    else{
      pError.innerText = ""
      password.classList.remove('error')
      img4.classList.remove('imgerror')
    }
  }

})