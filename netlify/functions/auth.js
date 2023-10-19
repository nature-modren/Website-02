//build serverless netlify

bcrypt = require('bcrypt');

exports.handler = async (event) => {
    if (event.httpMethod === "POST") {
        const requestBody = JSON.parse(event.body);
      
  password = requestBody.password;
  hashedPassword = process.env.HASHED_PASSWORD;


  input = password.toLowerCase();


  passwordMatch = bcrypt.compare(input,hashedPassword);

        if (passwordMatch) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 200 ,passwordMatch,bcrypt, password}),
            };
        } else if (password === "friend") {
            
            return {
                statusCode: 201,
                body: JSON.stringify({ message: 201 }),
            };
        } else if (password === "password3") {
            
            return {
                statusCode: 202,
                body: JSON.stringify({ message: "Kata sandi lainnya",passwordMatch }),
            };
        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Password invalid.",passwordMatch,hashedPassword,password ,bcrypt }),
            };
        }
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Metode HTTP tidak didukung."}),
        };
    }
};