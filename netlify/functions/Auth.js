//build serverless netlify


const bcrypt = require('bcryptjs');

exports.handler = async (event) => {
    if (event.httpMethod === "POST") {
        const requestBody = JSON.parse(event.body);
        const password = requestBody.password;
        const hashedPassword = process.env.HASHED_PASSWORD;
        const input = password.toLowerCase();

        try {
            const passwordMatch = await bcrypt.compare(password, hashedPassword);

            if (passwordMatch) {
                return {
                    statusCode: 200,
                    body: JSON.stringify({ message: 200, passwordMatch: true, password, input }),
                };
            } else {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ message: "Password invalid.", passwordMatch: false, hashedPassword, password, bcrypt }),
                };
            }
        } catch (error) {
            console.error("Kesalahan saat membandingkan kata sandi:", error);
            return {
                statusCode: 500,
                body: JSON.stringify({ message: "Kesalahan dalam membandingkan kata sandi." }),
            };
        }
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Metode HTTP tidak didukung." }),
        };
    }
};
