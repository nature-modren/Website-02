/*window.addEventListener('beforeunload', function (e) {
    e.preventDefault(); // Mencegah refresh otomatis
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
      /* if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
            window.location.reload(); // Merefresh halaman saat user memilih untuk menyimpan perubahan
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    });
});



document.getElementById('myform').addEventListener('submit',function(e){
           e.preventDefault();
            Password = document.getElementById('exampleInputPassword1').value;
            
            if(Password === '123456'){
            location.href="Index-003.html"
            }else if(Password === '123456'){
            location.href="Index-003.html"
            }else{
              Swal.fire('Password Salah! Pass ="123456"')
      };
       });
       
       
  const pass = document.getElementById('exampleInputPassword1');
  const  tombol = document.getElementById('flexSwitchCheckDefault');

tombol.addEventListener('change',function(){
 if(tombol.checked){
     pass.type = 'text'
 }else{
     pass.type = 'password'
     }
   });
    


document.getElementById('myform').addEventListener('submit', async function(e){
  e.preventDefault();
  const password = document.getElementById('exampleInputPassword1').value;

  // Kirim permintaan POST ke fungsi Netlify dengan password yang dimasukkan
  const response = await fetch('/.netlify/functions/auth', {
    method: 'POST',
    body: JSON.stringify({ password }),
  });

  const responseData = await response.json();

  if (response.ok) {
    // Jika respons berhasil, arahkan ke halaman lain
    location.href = "Index-003.html";
  } else {
    // Jika respons gagal, tampilkan pesan kesalahan dengan SweetAlert
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
}); */


document.getElementById('myform').addEventListener('submit', async function(e){
  e.preventDefault();
  const password = document.getElementById('exampleInputPassword1').value;

  const response = await fetch('/.netlify/functions/auth', {
    method: 'POST',
    body: JSON.stringify({ password }),
  });

  const responseData = await response.json();

  if (responseData.statusCode === "200") {
      location.href = "Index-003.html";
      
    } else if (responseData.statusCode === "201") {
 
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