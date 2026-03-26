# 📊 Habit Tracker App

Aplikasi web sederhana untuk mencatat aktivitas harian (habit tracker) yang dilengkapi dengan fitur checklist, catatan (note), penyimpanan data, serta riwayat aktivitas per hari.

Aplikasi ini dibuat menggunakan **JavaScript murni (vanilla JS)** tanpa framework, dengan fokus pada manipulasi DOM, pengelolaan state, dan penyimpanan data menggunakan localStorage.

---

## 🚀 Fitur Utama

### ✅ Checklist Harian

* Terdapat 4 aktivitas utama:

  * Belajar JavaScript
  * Gym / Boxing
  * Belajar Cyber
  * Nugas
* Setiap aktivitas dapat dicentang sebagai tanda telah dikerjakan

---

### 📝 Catatan (Note)

* Saat checklist dicentang, akan muncul input untuk menambahkan catatan
* Catatan tersimpan secara real-time
* Catatan tidak hilang meskipun checklist di-uncheck (selama masih di hari yang sama)

---

### 💾 Penyimpanan Data (LocalStorage)

* Data aktivitas disimpan di browser menggunakan localStorage
* Data tetap tersimpan meskipun halaman di-refresh
* Menggunakan JSON untuk proses penyimpanan dan pengambilan data

---

### 📅 Reset Harian Otomatis

* Setiap hari, semua checklist dan catatan akan di-reset
* Sistem mendeteksi perubahan tanggal untuk melakukan reset otomatis

---

### 📜 Riwayat Aktivitas (History)

* Aktivitas yang telah dilakukan akan disimpan sebagai riwayat harian
* Terdapat halaman history yang menampilkan data berdasarkan tanggal
* Setiap tanggal dapat diklik untuk melihat:

  * Aktivitas yang dicentang
  * Catatan yang ditulis

---

## 🧠 Konsep yang Dipelajari

Project ini mengimplementasikan berbagai konsep penting dalam pengembangan web, antara lain:

* DOM Manipulation
* Event Handling
* State Management menggunakan Object & Array
* JSON (parse & stringify)
* LocalStorage (data persistence)
* Dynamic Rendering
* Date-based Logic (reset harian)
* Conditional UI Rendering

---

## 🛠️ Teknologi yang Digunakan

* HTML
* CSS
* JavaScript (Vanilla JS)

---

## 📂 Struktur Project

```plaintext
habit-tracker/ 
│ 
├── index.html # Halaman utama 
├── history.html # Halaman riwayat habit 
├── style.css # Styling aplikasi 
├── script.js # Logic utama aplikasi 
├── history.js # Logic untuk halaman history 
└── README.md # Dokumentasi project
```

---

## ▶️ Cara Menjalankan

1. Download atau clone repository ini
2. Buka file `index.html` di browser
3. Aplikasi siap digunakan

---

## 🎯 Tujuan Project

Project ini dibuat sebagai latihan dan pengembangan skill dalam:

* Membangun aplikasi interaktif tanpa framework
* Memahami alur data (data flow) dalam aplikasi
* Menghubungkan UI dengan logic program
* Mengelola state dan penyimpanan data di browser

---

## ✨ Pengembangan Selanjutnya

Beberapa fitur yang dapat ditambahkan di masa depan:

* Statistik aktivitas harian
* Progress bar
* Dark mode
* Responsive design
* Export / import data

---

## 🙌 Penutup

Project ini merupakan bagian dari proses belajar dan pengembangan kemampuan dalam web development, khususnya di bidang frontend menggunakan JavaScript.

---
