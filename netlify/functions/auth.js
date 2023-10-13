//build serverless netlify


bcrypt = require('bcrypt');

exports.handler = async (event) => {
    if (event.httpMethod === "POST") {
        const requestBody = JSON.parse(event.body);
        const password = requestBody.password;

const passwordToHash = password; // Kata sandi yang ingin Anda hash
const saltRounds = 10; // Jumlah putaran salt (biasanya antara 10-12)

// Menghasilkan salt
const salt = bcrypt.genSaltSync(saltRounds);

// Menghasilkan hash kata sandi dengan salt
const passPassword = bcrypt.hashSync(passwordToHash, salt);

const hashedPassword = process.env.HASHED_PASSWORD;
passwordMatch = await bcrypt.compare(passPassword,hashedPassword)
   
        if (passwordMatch) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 200 }),
            };
        } else if (password === "friend") {
            
            return {
                statusCode: 201,
                body: JSON.stringify({ message: 201 }),
            };
        } else if (password === "password3") {
            
            return {
                statusCode: 202,
                body: JSON.stringify({ message: "Kata sandi lainnya" }),
            };
        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Password invalid.",passwordMatch,hashedPassword,password ,bcrypt, passPassword }),
            };
        }
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Metode HTTP tidak didukung."}),
        };
    }
};