// window.addEventListener("scroll",function(){
//     var header = this.document.querySelector("header");
//     header.classList.toggle("sticky",window.scrollY > 0)
// })


const form = document.getElementById('form');
const name = document.getElementById('name');
const last = document.getElementById('lastname');
const email = document.getElementById('email');
const text = document.getElementById('message');


form.addEventListener('submit',(e) =>{
    e.preventDefault()
    checkInputs();
});


function checkInputs(){
   const nameValue = name.value.trim();
   const lastValue = last.value.trim();
   const emailValue =  email.value.trim();
   const textValue = text.value.trim();


   if(nameValue === ''){
       //show error
       //add error class
       setErrroFor(name, 'Name cannot be blank!')
   }else{
       //add success class
       setSucessFor(name)
   }

   if(lastValue === ''){
    //show error
    //add error class
    setErrroFor(last, 'Last Name cannot be blank!')
}else{
    //add success class
    setSucessFor(last)
}

if(textValue === ''){
    //show error
    //add error class
    setErrroFor(message, 'Message cannot be blank!')
}else{
    //add success class
    setSucessFor(message)
}

   if(emailValue === ''){
       setErrroFor(email, 'Email cannot be blank!')
   }else if(!isEmail(emailValue)){
      setErrroFor(email,'Email is not valid')
   }else{
       setSucessFor(email)
   }



}


function setErrroFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message to small
    small.innerText = message;
   

    //add class
    formControl.className = 'form-outer error'
}


function setSucessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-outer success'
}

function isEmail(email){
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}