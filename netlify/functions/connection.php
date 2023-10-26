<?php
// Informasi koneksi database
$host = "db4free.net"; // Ganti sesuai dengan host database Anda
$username = "treadmill"; // Ganti sesuai dengan username MySQL Anda
$password = "n939MJA8ui"; // Ganti sesuai dengan kata sandi MySQL Anda
$database = "flypaper"; // Ganti sesuai dengan nama database Anda

// Membuat koneksi
$conn = new mysqli($host, $username, $password, $database);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
