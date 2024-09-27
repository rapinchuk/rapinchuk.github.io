document.addEventListener("DOMContentLoaded", function(event) { 
    //password toggle view
    const eye = document.querySelector('.toggle-password');
    const passwordField = document.querySelector('#password');
    eye.addEventListener('click',(e)=>{
        e.preventDefault();
        if(passwordField.type =='text'){
            passwordField.type='password';
        }else {
            passwordField.type='text';
        }
        eye.classList.toggle("field-icon--active");
    }) 

 



  });