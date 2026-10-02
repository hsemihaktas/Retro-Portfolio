# 🕹️ Retro Portfolio

> **Neo-Brutalist & Retro Arcade** estetiğiyle tasarlanmış, modern web teknolojileri (**Next.js 16**, **React 19**, **Tailwind CSS 4**) üzerinde koşan yüksek performanslı kişisel portfolyo platformu.

<p align="center">
  <img src="https://raw.githubusercontent.com/hsemihaktas/My-assets/main/retro-portfolio/preview.webp" alt="Retro Portfolio Preview" width="100%" />
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16.1.4-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.2.3-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS 4" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-ccff00?style=for-the-badge&labelColor=000000&color=ccff00" alt="MIT License" /></a>
</p>

---

## 📌 İçindekiler

- [Genel Bakış](#-genel-bakış)
- [Öne Çıkan Özellikler](#-öne-çıkan-özellikler)
- [Teknoloji Yığını](#-teknoloji-yığını)
- [Proje Dizin Yapısı](#-proje-dizin-yapısı)
- [Tasarım Sistemi](#-tasarım-sistemi)
- [Hızlı Başlangıç & Kurulum](#-hızlı-başlangıç--kurulum)
- [Kullanılabilir Komutlar](#-kullanılabilir-komutlar)
- [Veri Modelleri & Özelleştirme](#-veri-modelleri--özelleştirme)
- [SEO & Performans](#-seo--performans)
- [Lisans](#-lisans)

---

## 💡 Genel Bakış

**Retro Portfolio**, 90'ların sonu ile 2000'lerin başındaki arcade oyun makineleri ve teknik dokümantasyon panellerinden ilham alan, sert hatlı (**neo-brutalist**) ve piksel hassasiyetli bir tasarım diline sahiptir. 

Ağır görsel efektler yerine saf CSS ve SVG filtreleriyle zenginleştirilmiş noise (film greni) dokuları, yüksek kontrastlı renk paleti, keskin gölgeler (`hard-shadow`) ve mikro-etkileşimlerle donatılmıştır. Aynı zamanda modern **Next.js 16 (Turbopack)** ve **React 19** mimarisi sayesinde sıfır gecikme hissi ve anlık istemci geçişleri sunar.

---

## ✨ Öne Çıkan Özellikler

### 🎨 Görsel & Tasarım Estetiği
- **Brutalist / Industrial Tasarım:** Keskin 3-4px siyah kenarlıklar, yumuşatılmamış açılar ve yüksek derinlik hissi veren katı gölgeler (`box-shadow: 6px 6px 0px black`).
- **Retro Noise & Grid:** CSS SVG tabanlı statik noise filtresi ve arka planda hafif retro noktalı desen (`radial-gradient`).
- **Özel Tipografi:** Başlıklar için keskin ve güçlü **Work Sans**, veri/kod ve gövde metinleri için retro-teknik **Space Mono**.
- **İnteraktif Mikro-Etkileşimler:** Butonlarda ve kartlarda brutalist hover / active kayma efektleri.
- **Sonsuz Kayan Ticker:** CSS keyframe animasyonuyla çalışan akıcı yetenek bandı (`SkillsTicker`).
- **Özel Retro Scrollbar:** Klasik işletim sistemlerini anımsatan kontrastlı kaydırma çubuğu tasarımı.

### ⚡ Fonksiyonel & Teknik Yetenekler
- **Filtrelenebilir Proje Vitrini:** Projeleri `All`, `Web` ve `Mobile` kategorilerine göre anlık filtreleme imkânı.
- **Dinamik Detay Görünümü (`ProjectDetailView`):** Projeye tıklandığında sayfadan ayrılmadan açılan kapsamlı detay paneli:
  - **Web Çerçevesi (`WebFrame`):** Klasik tarayıcı penceresi simülasyonu (kırmızı, sarı, yeşil kontrol butonları ve sahte adres çubuğu).
  - **Mobil Çerçevesi (`MobileFrame`):** Mobil cihaz mockup görünümü.
  - Canlı demo, kaynak kod ve market bağlantıları (App Store, Play Store, GitHub).
- **Zaman Tüneli (`ExperienceLog`):** İş ve eğitim tecrübelerini kronolojik olarak sunan ayrıştırılmış timeline bileşeni.
- **Kişisel Kimlik Paneli (`Sidebar`):** Seviye göstergesi (`LVL.24`), lokasyon, unvan rozetleri, interaktif sosyal medya butonları ve doğrudan iletişim aksiyonu.
- **Next.js 16 Hydration Guard:** Tarayıcı eklentilerinin oluşturabileceği öznitelik farklarına karşı dayanıklı SSR konfigürasyonu (`suppressHydrationWarning`).

---

## 🛠️ Teknoloji Yığını

| Alan | Teknoloji | Açıklama |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16 (Turbopack)](https://nextjs.org/) | App Router, SSR, Turbopack hızlı derleme motoru |
| **Kütüphane** | [React 19](https://react.dev/) | React Server Components & güncel istemci hook'ları |
| **Programlama Dili** | [TypeScript 5](https://www.typescriptlang.org/) | Sıkı tip denetimi ve güvenli veri modelleri |
| **Stil / CSS** | [Tailwind CSS 4](https://tailwindcss.com/) | En güncel v4 `@theme inline` mimarisi & saf CSS değişkenleri |
| **İkon Seti** | [Lucide React](https://lucide.dev/) | Hafif, ölçeklenebilir ve tutarlı SVG ikon paketi |
| **Tipografi** | [Google Fonts](https://fonts.google.com/) | `Work Sans` (Display/Headings) + `Space Mono` (Body/Code) |

---

## 📂 Proje Dizin Yapısı

```bash
Retro-Portfolio/
├── app/
│   ├── favicon.ico             # Tarayıcı sekme ikonu
│   ├── globals.css             # Tailwind 4 konfigürasyonu, animasyonlar, retro değişkenler
│   ├── layout.tsx              # Root Layout, font tanımlamaları, global SEO meta etiketleri
│   └── page.tsx                # Ana sayfa (Dashboard ve dinamik detay görünümü yönetimi)
├── components/
│   ├── common/
│   │   ├── FilterControls.tsx  # All / Mobile / Web kategori filtreleme butonları
│   │   └── SkillsTicker.tsx    # Sonsuz döngüde kayan marquee yetenek şeridi
│   ├── home/
│   │   ├── ExperienceLog.tsx   # İş ve eğitim geçmişi listesi (Timeline)
│   │   ├── Footer.tsx          # Alt bilgi ve telif/teknik rozetler
│   │   └── HeroBanner.tsx      # SVG tipografik "Software Engineer" başlık bölümü
│   ├── project/
│   │   ├── MobileFrame.tsx     # Mobil uygulama önizleme mockup çerçevesi
│   │   ├── ProjectCard.tsx     # Proje listeleme kartı (3D brutalist gölge efektli)
│   │   ├── ProjectDetailView.tsx # Seçilen projenin detaylı analiz sayfası
│   │   └── WebFrame.tsx        # Web projesi önizleme tarayıcı mockup çerçevesi
│   └── sidebar/
│       ├── AvatarCard.tsx      # Profil fotoğrafı ve retro çerçeve
│       ├── BioSection.tsx      # Kısa biyografi ve uzmanlık metni
│       ├── ContactButtons.tsx  # Sosyal ağlar (GitHub, LinkedIn, X) ve iletişim butonu
│       ├── ProfileHeader.tsx   # İsim, unvan, seviye ve şehir rozetleri
│       └── Sidebar.tsx         # Tüm sidebar bileşenlerini toplayan ana panel
├── lib/
│   └── data/
│       ├── experience.ts       # İş ve eğitim geçmişi verileri
│       ├── projects.ts         # Portfolyoda sergilenen projelerin listesi ve detayları
│       └── skills.ts           # Marquee bandında dönen yetenek listesi
├── types/
│   └── index.ts                # TypeScript arayüzleri (`Project`, `Experience` vb.)
├── next.config.ts              # Next.js yapılandırması
├── package.json                # Proje bağımlılıkları ve çalıştırma scriptleri
├── postcss.config.mjs          # PostCSS / Tailwind CSS eklenti ayarı
└── tsconfig.json               # TypeScript derleyici kuralları
```

---

## 🎨 Tasarım Sistemi

Projede kullanılan temel tasarım belirteçleri (`design tokens`):

### Renk Paleti

```css
:root {
  --neon-yellow: #ccff00;  /* Vurgu, etiketler ve CTA butonları */
  --ink-black:   #050505;  /* Metinler, kalın border'lar ve sert gölgeler */
  --bg-paper:    #f2f2f2;  /* Arka plan kağıt tonu */
  --background:  #d4d4d4;  /* Dış çerçeve masaüstü zemin rengi */
  --foreground:  #1a1a1a;  /* Koyu panel elementleri */
}
```

### Tipografi Matrisi

| Kullanım Alanı | Font Ailesi | Ağırlıklar | Karakteristik |
| :--- | :--- | :--- | :--- |
| **Başlıklar & İsimler** | `Work Sans` | `600`, `900 (Black)` | Geometrik, tok, yüksek kontrastlı |
| **Gövde Metinleri & Kodlar**| `Space Mono` | `400 (Regular)`, `700 (Bold)` | Teknik daktilo/terminal hissi, tek aralıklı |

### Özel CSS Yardımcıları

- `.hard-shadow`: Sert kenarlı `box-shadow` ve buton etkileşimleri için tıklama derinliği simülasyonu.
- `.noise-overlay`: Ekranın tamamını kaplayan `%3` opaklıkta SVG gürültü katmanı.
- `.animate-marquee`: Sonsuz yatay kaydırma animasyonu (20s döngü).

---

## 🚀 Hızlı Başlangıç & Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

### Ön Koşullar

- **Node.js**: `v18.18.0` veya üzeri önerilir.
- **Paket Yöneticisi**: `npm`, `pnpm`, `yarn` veya `bun`.

### Adım Adım Kurulum

1. **Depoyu Klonlayın:**
   ```bash
   git clone https://github.com/hsemihaktas/Retro-Portfolio.git
   cd Retro-Portfolio
   ```

2. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda Görüntüleyin:**
   Tarayıcınızı açıp [http://localhost:3000](http://localhost:3000) adresine gidin.

---

## 📜 Kullanılabilir Komutlar

| Komut | Açıklama |
| :--- | :--- |
| `npm run dev` | Turbopack destekli geliştirme sunucusunu başlatır (`localhost:3000`). |
| `npm run build` | Üretime (Production) hazır optimize edilmiş derleme oluşturur. |
| `npm run start` | Oluşturulan production derlemesini yerel sunucuda çalıştırır. |
| `npm run lint` | ESLint ile kod standartlarını ve tip hatalarını denetler. |

---

## ⚙️ Veri Modelleri & Özelleştirme

Site içeriğini kendi bilgilerinize göre güncellemek oldukça kolaydır. Tüm veriler `lib/data/` klasöründe merkezi olarak tutulmaktadır:

### 1. Projeleri Güncelleme (`lib/data/projects.ts`)

```typescript
export interface Project {
  id: string;
  type: "mobile" | "web";
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  status: "Released" | "In Dev" | "Prototype";
  image: string;
  links: {
    appStore?: string;
    playStore?: string;
    store?: string;
    demo?: string;
    github?: string;
  };
}
```

### 2. Deneyimleri Düzenleme (`lib/data/experience.ts`)

```typescript
export interface Experience {
  id: number;
  type: "work" | "edu";
  role: string;
  org: string;
  date: string;
  desc: string;
}
```

### 3. Profil & İletişim Bilgileri

- **İsim, Şehir ve Seviye:** `components/sidebar/ProfileHeader.tsx`
- **Profil Fotoğrafı:** `components/sidebar/AvatarCard.tsx`
- **Sosyal Ağ Bağlantıları & E-posta:** `components/sidebar/ContactButtons.tsx`
- **Biyografi Metni:** `components/sidebar/BioSection.tsx`

---

## 🔍 SEO & Performans

- **Özelleştirilmiş Metadata:** `app/layout.tsx` içerisinde Open Graph (Facebook/LinkedIn), Twitter Cards, arama motoru indeksleme (`robots.txt` yönergeleri) ve anahtar kelime optimizasyonu yapılandırılmıştır.
- **Yüksek Performans:** Next.js 16'nın Turbopack motoru ve dinamik bileşen ayrıştırması sayesinde hızlı ilk yükleme (FCP) ve yüksek Lighthouse puanları hedeflenmiştir.

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) kapsamında lisanslanmıştır. Dilediğiniz gibi klonlayabilir, kendi portfolyonuz için özelleştirebilir ve kullanabilirsiniz.

---

<p align="center">
  <sub>Tasarım ve kodlama: <b>Rewound</b> • Neo-brutalism ve bolca <code>box-shadow</code> ile üretildi ⚡</sub>
</p>
