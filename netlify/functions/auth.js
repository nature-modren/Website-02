//build serverless netlify

const bcrypt = require('bcrypt');
const saltRounds = 10; // Jumlah salt rounds, bisa disesuaikan

exports.handler = async (event) => {
    // Ambil environment variable hash dari Netlify
    const netlifyHash = process.env.NETLIFY_HASH; // Ganti NETLIFY_HASH dengan nama environment variable yang sesuai

    if (event.httpMethod === "POST") {
        const requestBody = JSON.parse(event.body);
        const inputPassword = requestBody.password;

        // Hash kata sandi yang diterima dari metode POST
        const hashedPassword = await hashPassword(inputPassword);

        // Bandingkan hashedPassword dengan netlifyHash
        if (await bcrypt.compare(hashedPassword, netlifyHash)) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "Password cocok" }),
            };
        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Password tidak cocok" }),
            };
        }
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Metode HTTP tidak didukung." }),
        };
    }
};

// Fungsi untuk menghash kata sandi
async function hashPassword(password) {
    return bcrypt.hash(password, saltRounds);
}
