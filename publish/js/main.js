document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("myform")
    .addEventListener("submit", async function (e) {
      e.preventDefault();
      const password = document.getElementById("exampleInputPassword1").value;

      function setLoggedInCookie() {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1); // Cookie berlaku selama 1 hari

        document.cookie = `loggedIn=true; expires=${expirationDate.toUTCString()}; path=/`;
      }

      const response = await fetch(".netlify/functions/Auth", {
        method: "POST",
        body: JSON.stringify({ password }),
      });

      const responseData = await response.json();

      console.log(responseData);

      if (responseData.message === 200) {
        setLoggedInCookie();
        location.href = "Koleksi.html";
      } else if (responseData.message === 201) {
        Swal.fire("Hi!", "Pesan: ada ada saja beliau ini kwkw", "success");
      } else {
        Swal.fire("Password Salah!", responseData.message, "error");
      }
    });

  const passwordField = document.getElementById("exampleInputPassword1");
  const showPasswordSwitch = document.getElementById("flexSwitchCheckDefault");

  showPasswordSwitch.addEventListener("change", function () {
    if (showPasswordSwitch.checked) {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  });

  const text = "Hai semua saya Amri Firdaus, seorang Web developer";
  let index = 0;
  const speedketik = 100;

  function ketik() {
    if (index < text.length) {
      document.getElementById("text-animasi").innerHTML += text.charAt(index);
      index++;
      setTimeout(ketik, speedketik);
    }
  }

  ketik();

  console.log(
    "%cwebsite dibuat oleh Amri Firdaus dengan framework Tailwind, makasi udah mampir wkwk :)",
    "color: white; background-color: #1a202c; font-size: 16px; padding: 10px; border-radius: 5px;"
  );
});
