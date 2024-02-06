const password = document.getElementById('pw')
const passwordConfirm = document.getElementById('pwc')
const errorpw = document.getElementById('errorpw')

function validateForm(){
   if((passwordConfirm.value != password.value) || password.value == "" || passwordConfirm.value == ""){
      errorpw.innerHTML = '* Passwords do not match';
      console.log('no good');
      return false;
   }else{
      return true;
   }
   
}
