//build serverless netlify 

function setLoggedInCookie(){ 
const expirationDate = new Date(); 

expirationDate.setDate(expirationDate.getDate() + 1); // Cookie berlaku selama 1 hari

  document.cookie = `loggedIn=true; expires=${expirationDate.toUTCString()}; path=/`;
};




exports.handler = async (event) => { 
   if (event.httpMethod === "POST") { 
     const requestBody = JSON.parse(event.body); 
  
     const password = requestBody.password; 
     
     if (password === "12345678") { 
       setLoggedInCookie()
       return { 
         statusCode: 200, 
         body: JSON.stringify({ message: "Password valid" }), 
        
       }; 
     } else if (password === "friend") {
       // Jika password adalah "friend", tampilkan pesan "hi"
       return { 
         statusCode: 201, 
         body: JSON.stringify({ message: ":v ada ada saja beliau ini" }), 
       }; 
     } else { 
       return { 
         statusCode: 400, 
         body: JSON.stringify({ message: "Password invalid." }), 
       }; 
     } 
   } else { 
     return { 
       statusCode: 405, 
       body: JSON.stringify({ message: "Metode HTTP tidak didukung." }), 
     }; 
   } 
 };

