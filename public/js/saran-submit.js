document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch("/", {
    method: "POST",
    body: formData,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })
    .then((response) => {
      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Form submitted successfully.",
          icon: "success",
          confirmButtonText: "Ok",
        });
        this.reset(); // Reset form setelah submit
      } else {
        Swal.fire({
          title: "Error!",
          text: "There was a problem submitting your form.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "There was a problem submitting your form.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    });
});
