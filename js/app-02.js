/* 02 - FORM VALIDATION :: YOUR CODE BELOW */
var form = document.getElementById("registration-form");

form.addEventListener('submit', function(e){
  e.preventDefault();

  var userName = document.querySelector("input[name='username']");
  var validationUserName = document.querySelector('.validation--username');
  var userPassword = document.querySelector("input[name='userpassword']");
  var validationUserPassword = document.querySelector('.validation--user-password');
  var confirmPassword = document.querySelector("input[name='confirmpassword']");
  var validationConfirmPassword = document.querySelector('.validation--confirm-password');
  var taxId = document.querySelector("input[name='taxid']");
  var validationTaxId = document.querySelector('.validation--tax-id');
  var account = document.querySelector("select[name='account']");
  var validationAccount = document.querySelector('.validation--account');
  var termsOfService = document.querySelector("input[name='termsofservice']");
  var validationTermsOfService = document.querySelector('.validation--terms-of-service');
  var validationEntireForm = document.querySelector(".validation--entire-form");
  var success = 0;

  //Username
  if(userName.value === ""){
    validationUserName.textContent = 'Username cannot be blank';
  }
  else{
    validationUserName.textContent = 'Success';
    success++;
  }

  //Password
  if(userPassword.value.length < 8){
    validationUserPassword.textContent = 'Password must have a minimum of 8 characters';
  }
  else{
    validationUserPassword.textContent = 'Success';
    success++;
  }

  //Confirm Password
  if(userPassword.value !== confirmPassword.value || confirmPassword.value === ""){
    validationConfirmPassword.textContent = 'Passwords must match';
  }
  else{
    validationConfirmPassword.textContent = 'Success';
    success++;
  }

  //Tax ID Number
  if(taxId.value === ""){
    validationTaxId.textContent = 'Must provide Tax ID number';
  }
  else if(isNaN(taxId.value) || taxId.value.length !== 10){
    validationTaxId.textContent = 'Tax ID number is only numbers and is 10 digits';
  }
  else{
    validationTaxId.textContent = 'Success';
    success++;
  }

  //Account Type
  if(account.selectedIndex === 0){
    validationAccount.textContent = 'Must select account type';
  }
  else {
    validationAccount.textContent = 'Success';
    success++;
  }

  //Confirmation
  if(termsOfService.checked === false){
    validationTermsOfService.textContent = 'Must approve terms of service';
  }
  else {
    validationTermsOfService.textContent = 'Success';
    success++;
  }

  //Submit
  if(success === 6){
    validationEntireForm.textContent = 'Form complete';
  }

  // if(validationUserName.textContent === 'Success' &&
  // validationUserPassword.textContent === 'Success' &&
  // validationConfirmPassword.textContent === 'Success' &&
  // validationTaxId.textContent === 'Success' &&
  // validationAccount.textContent === 'Success' &&
  // validationTermsOfService.textContent === 'Success'){
  //   validationEntireForm.textContent = 'Form complete';
  // }

  // console.log({
  //   "User Name": userName.value,
  //   "User Password": userPassword.value,
  //   "Confirm Password": confirmPassword.value,
  //   "Tax ID": taxId.value,
  //   "Account": account.selectedIndex,
  //   "Terms Of Service": termsOfService.checked
  // });

});
