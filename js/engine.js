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
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
            window.location.reload(); // Merefresh halaman saat user memilih untuk menyimpan perubahan
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    });
});
*/