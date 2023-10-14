//build serverless netlify

exports.handler = async (event) => {
    if (event.httpMethod === "POST") {
        const requestBody = JSON.parse(event.body);
        const password = requestBody.password;


        if (password === "password3" || password === "Password3") {
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