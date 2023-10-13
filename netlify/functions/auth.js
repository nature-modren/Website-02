//build serverless netlify 

exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    const requestBody = JSON.parse(event.body);

    // Di sini Anda dapat menambahkan logika validasi untuk password.
    // Misalnya, Anda dapat memeriksa apakah password cocok dengan kriteria tertentu.
    const password = requestBody.password;

    // Misalnya, validasi password minimal harus memiliki 6 karakter.
    if (password.length < 6) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Password harus memiliki minimal 6 karakter." }),
      };
    }

    // Jika validasi berhasil, Anda dapat melakukan tindakan selanjutnya di sini, misalnya menyimpan data atau mengirim respons sukses.
    // Gantilah bagian ini sesuai dengan kebutuhan Anda.

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Password valid." }),
    };
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Metode HTTP tidak didukung." }),
    };
  }
};
