<?php
require 'netlify/functions/connection.php';

// Sekarang Anda dapat menggunakan koneksi ke database di sini

// Query untuk mengambil data dari tabel
$sql = "SELECT * FROM nama"; // Ganti dengan nama tabel yang sesuai

$result = $conn->query($sql);

// Memeriksa apakah data ditemukan
if ($result->num_rows > 0) {
    // Menampilkan data
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Nama: " . $row["nama"] . "<br>";
    }
} else {
    echo "Tidak ada data yang ditemukan.";
}

// Menutup koneksi
$conn->close();
?>
