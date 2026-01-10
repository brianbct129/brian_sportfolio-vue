# Brian's Personal Portfolio (Vue 3)

Website portofolio pribadi yang modern dan interaktif, dibangun menggunakan **Vue 3** dan **Vite**. Proyek ini menampilkan profil profesional, pengalaman kerja, pendidikan, dan galeri proyek dengan animasi yang halus.

## ✨ Fitur Utama

- **⚡ Performa Tinggi**: Dibangun menggunakan Vue 3 dan Vite untuk waktu muat yang cepat dan pengembangan yang efisien.
- **🎨 Desain Responsif**: Tampilan yang menyesuaikan dengan sempurna di berbagai perangkat (Desktop, Tablet, Mobile).
- **🌓 Dark & Light Mode**: Dukungan tema gelap dan terang yang nyaman di mata.
- **✨ Animasi Interaktif**: Menggunakan **GSAP (GreenSock)** dan **ScrollTrigger** untuk efek transisi dan scroll yang memukau.
- **🖼️ Showcase Proyek**: Galeri proyek interaktif menggunakan **Swiper JS**.
- **📄 Download CV**: Fitur unduh CV langsung dari sidebar.

## 🛠️ Teknologi yang Digunakan

- **[Vue 3](https://vuejs.org/)**: Framework JavaScript progresif.
- **[Vite](https://vitejs.dev/)**: Build tool frontend generasi berikutnya.
- **[GSAP](https://greensock.com/gsap/)**: Standar industri untuk animasi web berkinerja tinggi.
- **[Swiper](https://swiperjs.com/)**: Modern mobile touch slider.
- **[Bootstrap](https://getbootstrap.com/)**: Framework CSS untuk styling dan layout responsif.

## 🚀 Cara Menjalankan Proyek

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal Anda:

### Prasyarat

Pastikan Anda telah menginstal **Node.js** (versi terbaru disarankan).

### Instalasi

1.  **Clone repository ini:**
    ```bash
    git clone https://github.com/username-anda/repo-name.git
    cd brian_sportfolio-vue
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    ```

3.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```
    Akses website di browser melalui alamat yang muncul di terminal (biasanya `http://localhost:5173`).

### Build untuk Produksi

Untuk membuat versi produksi yang siap di-deploy:

```bash
npm run build
```

Hasil build akan berada di folder `dist`.

## 📂 Struktur Proyek

```
brian_sportfolio-vue/
├── public/              # Aset statis publik
├── src/
│   ├── assets/          # CSS, Images, Fonts, Attachments (CV)
│   ├── components/      # Komponen Vue modular (Header, Sidebar, Sections)
│   ├── vendor/          # Library pihak ketiga (GSAP plugins, dll)
│   ├── App.vue          # Komponen root utama
│   └── main.js          # Entry point aplikasi
├── index.html           # File HTML utama
├── vite.config.js       # Konfigurasi Vite
└── package.json         # Dependensi dan skrip proyek
```

## 📝 Lisensi

Proyek ini dibuat untuk keperluan portofolio pribadi. Hak cipta sepenuhnya milik **Brian Cavarel Thomas**.

---
*Dibuat dengan ❤️ menggunakan Vue.js*
