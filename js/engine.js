//File validation 

document.getElementById('myform').addEventListener('submit', async function(e){
  e.preventDefault();
  const password = document.getElementById('exampleInputPassword1').value;


function setLoggedInCookie() {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1); // Cookie berlaku selama 1 hari

    document.cookie = `loggedIn=true; expires=${expirationDate.toUTCString()}; path=/`;
};



  const response = await fetch('.netlify/functions/auth', {
    method: 'POST',
    body: JSON.stringify({ password }),
  });

  const responseData = await response.json();

     console.log(responseData)

  if (responseData.message === 200) {     
      setLoggedInCookie();
      location.href = "Index-003.html";
      


    } else if (responseData.message === 201) {
 
Swal.fire('Hi!', 'Pesan: ada ada saja beliau ini kwkw', 'success');
  } else {
    Swal.fire('Password Salah!', responseData.message, 'error');
  }

});

const passwordField = document.getElementById('exampleInputPassword1');
const showPasswordSwitch = document.getElementById('flexSwitchCheckDefault');

showPasswordSwitch.addEventListener('change', function() {
  if (showPasswordSwitch.checked) {
    passwordField.type = 'text';
  } else {
    passwordField.type = 'password';
  }
});


//pengetesan kode scanning github
console.og("uaagha")
<@#@>@jwjwhwhwhwj
ieoeje()

