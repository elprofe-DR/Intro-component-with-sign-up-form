let errorFirstName = document.getElementById('errorMessage_Fn');
let errorLastName = document.getElementById('errorMessage_Ln');
let errorEmailAddress = document.getElementById('error_EmailAddress');
let errorPassword = document.getElementById('errorMessage_Pw');

errorFirstName.hidden = true;
errorLastName.hidden = true;
errorEmailAddress.hidden = true;
errorPassword.hidden = true;

let inputVariab = document.getElementsByClassName('fuck');
//
let arrToIterateThrough = [errorMessage_Pw, errorLastName, errorEmailAddress, errorPassword];
//
let button = document.querySelector('.btn');
///////////////////////////////////////////////////////////////////////
function checkIfEmpty(e) {
  if (inputVariab[0].value === "" || inputVariab[0].value === null) {
    errorFirstName.hidden = false;
    e.preventDefault();
  } else if (inputVariab[1].value === "" || inputVariab[1].value === null) {
    errorLastName.hidden = false;
    e.preventDefault();
  } else if (inputVariab[2].value === "" || inputVariab[2].value === null) {
    errorEmailAddress.hidden = false;
    e.preventDefault();
  } else if (inputVariab[3].value === "" || inputVariab[3].value === null) {
    errorPassword.hidden = false;
    e.preventDefault();
  }
};

button.addEventListener('click', checkIfEmpty);
