document.addEventListener("DOMContentLoaded", function () {
  try {
    const form = document.getElementById("myform");
    const passwordField = document.getElementById("exampleInputPassword1");
    const showPasswordSwitch = document.getElementById(
      "flexSwitchCheckDefault"
    );
    const textElement = document.getElementById("text-animasi");

    if (form) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const password = passwordField.value;

        function setLoggedInCookie() {
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 1); // Cookie berlaku selama 1 hari

          document.cookie = `loggedIn=true; expires=${expirationDate.toUTCString()}; path=/`;
        }

        const response = await fetch(".netlify/functions/Auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
    }

    if (showPasswordSwitch && passwordField) {
      showPasswordSwitch.addEventListener("change", function () {
        passwordField.type = showPasswordSwitch.checked ? "text" : "password";
      });
    }

    const text = "Hai semua saya Amri Firdaus, seorang Web Developer";
    let index = 0;
    const speedketik = 100;

    function ketik() {
      if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(ketik, speedketik);
      }
    }

    if (textElement) {
      ketik();
    }

    const navBeranda = document.getElementById("navBeranda");
    const navKeahlian = document.getElementById("navKeahlian");
    const navSaran = document.getElementById("navSaran");

    navBeranda.addEventListener("click", function () {
      window.location.href = "Index.html";
    });

    navKeahlian.addEventListener("click", function () {
      window.location.href = "keahlian.html";
    });

    navSaran.addEventListener("click", function () {
      window.location.href = "Saran.html";
    });




    import { getStore } from "@netlify/blobs";

const store = getStore("image");

console.log(store);
    
    console.log(
      "%cwebsite dibuat oleh Amri Firdaus dengan framework Tailwind, makasi udah mampir wkwk :)",
      "color: white; background-color: #1a202c; font-size: 16px; padding: 10px; border-radius: 5px;"
    );
  } catch (error) {
    console.log(error);
  }
});
