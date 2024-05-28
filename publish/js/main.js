document.addEventListener("DOMContentLoaded", function () {
  if (!checkLoginStatus()) {
    // Jika pengguna belum login, alihkan ke halaman login atau tampilkan pesan.
    location.href = "halamanLogin.html"; // Ganti dengan halaman login yang sesuai.
  }
});

function checkLoginStatus() {
  // Fungsi ini memeriksa status login. Anda dapat memeriksa cookie sesi atau token di sini.
  // Jika login valid, kembalikan true; jika tidak, kembalikan false.
  // Contoh sederhana: Periksa apakah cookie sesi "loggedIn" ada.
  return document.cookie.includes("loggedIn=true");
}

//File validation

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
      location.href = "halamanKoleksi.html";
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

window.onload = function () {
  openingwindow();

  const openingwindow = () => {
    let element = document.getElementById("textjudul");
    if (element.classList.contains("animate__slideOutRight"))
      element.classList.remove("animate__slideOutRight");
    else {
      element.classList.add("animate__slideInLeft");
    }
  };

  const closingwindow = () => {
    let element = document.getElementById("textjudul");
    if (element.classList.contains("animate__slideInLeft")) {
      element.classList.remove("animate__slideInLeft");
    } else {
      element.classList.add("animate__slideOutRight");
    }
  };

  document
    .getElementById("tautan1")
    .addEventListener("click", function (event) {
      event.preventDefault();

      closingwindow();

      setTimeout(function () {
        window.location.href = "Index.html";
      }, 1000);
    });

  document
    .getElementById("tautan2")
    .addEventListener("click", function (event) {
      event.preventDefault();

      closingwindow();

      setTimeout(function () {
        window.location.href = "koleksi.html";
      }, 1000);
    });

  document
    .getElementById("tautan3")
    .addEventListener("click", function (event) {
      event.preventDefault();

      closingwindow();

      setTimeout(function () {
        window.location.href = "kontak.html";
      }, 1000);
    });
};

const text = "Hai semua saya Amri Firdaus,seorang Web developer";
let index = 0;
let speedketik = 100;

function ketik() {
  if (index < text.length) {
    document.getElementById("text-animasi").innerHTML += text.charAt(index);
    index++;
    setTimeout(ketik, speedketik);
  }
}

ketik();
