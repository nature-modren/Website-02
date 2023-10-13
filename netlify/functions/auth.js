//build serverless netlify

exports.handler = async (event) => {
    if (event.httpMethod === "POST") {
        const requestBody = JSON.parse(event.body);
        const password = requestBody.password;

        if (password === "12345678") {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "Password valid" }),
            };
        } else if (password === "friend") {
            
            return {
                statusCode: 201,
                body: JSON.stringify({ message: ":v ada ada saja beliau ini" }),
            };
        } else if (password === "password3") {
            
            return {
                statusCode: 202,
                body: JSON.stringify({ message: "Kata sandi lainnya" }),
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