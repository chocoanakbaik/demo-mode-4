# Connectly Login and Popup Simulation

Proyek ini adalah simulasi antarmuka edukasi untuk memperlihatkan bagaimana halaman login sosial, notifikasi palsu, dan popup agresif dapat digunakan sebagai pola manipulasi visual pada sebuah situs.

## Tujuan

- Menampilkan halaman login fiktif dengan merek rekaan **Connectly**.
- Memperlihatkan contoh popup dan notifikasi yang mengganggu pengalaman pengguna.
- Menjadi bahan demonstrasi untuk mengenali tanda-tanda antarmuka yang menekan pengguna agar bertindak cepat.

## Batas keselamatan

- Ini bukan halaman login Facebook atau layanan nyata lainnya.
- Jangan mengganti merek fiktif dengan logo, nama, atau tampilan identik milik layanan nyata.
- Tidak ada autentikasi atau akun yang terhubung.
- Kolom email dan kata sandi hanya elemen visual; nilainya tidak dibaca, dikirim, atau disimpan oleh kode aplikasi.
- Tidak ada backend, pengiriman formulir, penyimpanan browser, atau pengalihan ke situs lain.
- Semua tombol hanya menampilkan pesan simulasi pada halaman yang sama.

Pemeriksaan kode pada `assets/js/app.js` tidak menemukan pemanggilan `fetch`, `XMLHttpRequest`, `sendBeacon`, penyimpanan `localStorage`/`sessionStorage`, pembacaan nilai kolom kredensial, atau pengiriman formulir. Pemeriksaan ini berlaku untuk kode pada commit yang diaudit dan harus diulang jika perilaku aplikasi diubah.

## Struktur

- `index.html`: halaman visual Connectly.
- `assets/css/style.css`: tata letak dan gaya antarmuka.
- `assets/js/app.js`: interaksi lokal, popup simulasi, dan pesan demonstrasi.
- `netlify.toml`: konfigurasi hosting statis.

## Menjalankan secara lokal

Buka `index.html` menggunakan browser modern atau jalankan server statis lokal. Tidak diperlukan akun atau konfigurasi backend.

Gunakan hanya untuk edukasi dan pengujian antarmuka dalam lingkungan yang jelas diberi label sebagai simulasi.
