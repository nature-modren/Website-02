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
*/


document.getElementById('myform').addEventListener('submit',function(e){
           e.preventDefault();
            Password = document.getElementById('exampleInputPassword1').value;
            
            if(Password === 'kelvin'){
            location.href="Index-003.html"
            }else if(Password === 'Kelvin'){
            location.href="Index-003.html"
            }else{
              Swal.fire('Password Salah!')
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
    
