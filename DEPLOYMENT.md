# Panduan Deploy ke Vercel

## Cara Deploy Proyek CloudSup ke Vercel

### Prasyarat
1. Akun GitHub (untuk menyimpan repository)
2. Akun Vercel (bisa daftar di https://vercel.com)

### Langkah-langkah Deployment

#### 1. Push Project ke GitHub (Jika belum)

```bash
# Inisialisasi git jika belum
git init

# Tambahkan semua file
git add .

# Commit file
git commit -m "Initial commit - Ready for Vercel deployment"

# Buat repository di GitHub, lalu push
git remote add origin https://github.com/username/cloudsup.git
git branch -M main
git push -u origin main
```

#### 2. Deploy via Vercel Dashboard

**A. Login ke Vercel**
- Buka https://vercel.com/login
- Login dengan GitHub, GitLab, atau Bitbucket

**B. Import Project**
- Klik tombol **"Add New Project"**
- Klik **"Import"** untuk import dari GitHub
- Pilih repository `cloudsup`

**C. Configure Project**
Vercel akan otomatis mendeteksi konfigurasi:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

**D. Deploy**
- Klik tombol **"Deploy"**
- Tunggu proses build selesai (biasanya 1-2 menit)

#### 3. Deploy via Vercel CLI (Alternatif)

**A. Install Vercel CLI**
```bash
npm install -g vercel
```

**B. Login ke Vercel**
```bash
vercel login
```

**C. Deploy**
```bash
# Deploy ke production
vercel --prod

# Atau deploy preview terlebih dahulu
vercel
```

**D. Follow the prompts**
- Set up and deploy? **Y**
- Which scope? Pilih scope yang sesuai
- Link to existing project? **N** (untuk project pertama)
- What's your project's name? `cloudsup`
- In which directory is your code located? `./` atau `C:\laragon\www\cloudsup`

### 4. Konfigurasi yang Sudah Disiapkan

File `vercel.json` sudah dibuat dengan konfigurasi:
- ✅ Output directory: `dist`
- ✅ Build command: `npm run build`
- ✅ SPA routing dengan rewrites ke `index.html`

### 5. Environment Variables (Jika Diperlukan)

Jika project menggunakan environment variables, tambahkan di:
- **Vercel Dashboard** → **Project Settings** → **Environment Variables**

Contoh:
```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=CloudSup
```

### 6. Update Deployments

Setiap kali ada perubahan di repository:
1. Commit dan push ke GitHub
2. Vercel akan otomatis deploy ulang
3. Atau manual deploy:
   ```bash
   vercel --prod
   ```

### 7. Custom Domain (Opsional)

Untuk menambahkan custom domain:
1. **Vercel Dashboard** → **Project Settings** → **Domains**
2. Tambahkan domain Anda
3. Ikuti instruksi untuk setup DNS

### 8. Preview Deployments

Vercel otomatis membuat preview URL untuk setiap pull request:
- Setiap PR akan mendapat URL unik
- Berguna untuk testing sebelum merge ke production

### Troubleshooting

**Build gagal?**
```bash
# Test build lokal
npm run build

# Cek error
npm run lint
```

**Routing tidak bekerja?**
- Pastikan file `vercel.json` ada
- Config rewrites sudah di-setup

**Environment variables tidak terbaca?**
- Pastikan nama variable dimulai dengan `VITE_`
- Redeploy setelah menambah variable

### Checklist Sebelum Deploy

- [ ] Build lokal berhasil: `npm run build`
- [ ] Tidak ada error TypeScript: `npm run build`
- [ ] File `vercel.json` sudah dibuat
- [ ] Repository sudah di-push ke GitHub
- [ ] Environment variables sudah disetup (jika ada)

### URL Setelah Deploy

Setelah deploy, Anda akan mendapat URL:
```
https://cloudsup.vercel.app
```

atau custom domain jika sudah disetup.

## Catatan Penting

1. **Build sudah berhasil** ✅
   - Semua TypeScript errors sudah diperbaiki
   - Build command: `npm run build`
   - Output: `dist/` folder

2. **Routing SPA**
   - Semua routes di-rewrite ke `index.html`
   - Sesuai untuk React Router

3. **Auto Deploy**
   - Setiap push ke `main` akan auto deploy
   - Pull requests akan mendapat preview URL

4. **Performance**
   - Vite sudah optimize untuk production
   - Assets akan di-compress otomatis

## Kontak Support

Jika ada masalah saat deploy:
- Vercel Docs: https://vercel.com/docs
- Create issue di GitHub
- Vercel Support: https://vercel.com/support

