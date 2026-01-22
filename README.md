# 🎮 Retro Portfolio

> Brutalist retro esintili, modern teknolojilerle inşa edilmiş kişisel portfolio sitesi.

![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)

---

## 📸 Önizleme

Retro, pixel-perfect, bruutalist tasarım estetiği:

- **Neon Sarı Vurgular** (`#ccff00`)
- **Hard Shadow Efektleri**
- **Noise Overlay Texture**
- **Custom Scrollbar Styling**
- **Marquee Animasyonları**

---

## 🏗️ Proje Yapısı

```
Retro-Portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global stiller, CSS değişkenleri, animasyonlar
│   ├── layout.tsx          # Root layout (metadata, fontlar, SEO)
│   ├── page.tsx            # Ana sayfa (dashboard view)
│   └── favicon.ico
├── components/
│   ├── common/             # Paylaşılan bileşenler
│   │   ├── FilterControls.tsx
│   │   └── SkillsTicker.tsx
│   ├── home/               # Ana sayfa bileşenleri
│   │   ├── ExperienceLog.tsx
│   │   ├── Footer.tsx
│   │   └── HeroBanner.tsx
│   ├── project/            # Proje bileşenleri
│   │   ├── ProjectCard.tsx
│   │   └── ProjectDetailView.tsx
│   └── sidebar/            # Sidebar bileşenleri
│       ├── AvatarCard.tsx
│       ├── BioSection.tsx
│       ├── ContactButtons.tsx
│       ├── ProfileHeader.tsx
│       └── Sidebar.tsx
├── lib/
│   └── data/               # Veri katmanı
│       ├── experience.ts   # İş/eğitim deneyimleri
│       ├── projects.ts     # Portfolio projeleri
│       └── skills.ts       # Yetenek listesi
├── types/                  # TypeScript tip tanımları
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ✨ Özellikler

### 🎨 Tasarım

- **Brutalist Estetik**: Hard shadow'lar, kalın border'lar, keskin köşeler
- **Retro Vibes**: Noise overlay, dot pattern background
- **Responsive**: Mobile-first, tablet ve desktop uyumlu
- **Typography**: Work Sans (display) + Space Mono (body) font kombinasyonu

### 🛠️ Teknik

- **Next.js 16 App Router**: Server Components, Streaming, Suspense
- **React 19**: Son sürüm hook'lar ve concurrent features
- **TypeScript**: Tam tip güvenliği
- **Tailwind CSS 4**: Modern utility-first styling
- **Lucide Icons**: Lightweight, customizable ikonlar

### 📱 Bileşenler

| Bileşen             | Açıklama                                      |
| ------------------- | --------------------------------------------- |
| `Sidebar`           | Profil bilgileri, avatar, bio, sosyal linkler |
| `HeroBanner`        | Hero section with call-to-action              |
| `SkillsTicker`      | Marquee animasyonlu yetenek bandı             |
| `ProjectCard`       | Proje önizleme kartları (mobile/web filtreli) |
| `ProjectDetailView` | Proje detay sayfası                           |
| `ExperienceLog`     | İş ve eğitim geçmişi timeline                 |

---

## 🚀 Kurulum

### Gereksinimler

- Node.js 18.17+
- npm, yarn, pnpm veya bun

### Adımlar

```bash
# 1. Repository'yi klonla
git clone https://github.com/username/Retro-Portfolio.git
cd Retro-Portfolio

# 2. Bağımlılıkları yükle
npm install

# 3. Development server'ı başlat
npm run dev
```

Tarayıcıda **[http://localhost:3000](http://localhost:3000)** adresini aç.

---

## 📜 Scriptler

| Script | Komut           | Açıklama                        |
| ------ | --------------- | ------------------------------- |
| Dev    | `npm run dev`   | Development server (hot reload) |
| Build  | `npm run build` | Production build oluştur        |
| Start  | `npm run start` | Production server başlat        |
| Lint   | `npm run lint`  | ESLint ile kod analizi          |

---

## 🎨 Tasarım Sistemi

### Renk Paleti

```css
--bg-paper: #f2f2f2 /* Kağıt beyazı arka plan */ --ink-black: #050505
  /* Mürekkep siyahı metin */ --neon-yellow: #ccff00 /* Neon sarı vurgular */
  --background: #d4d4d4 /* Gri arka plan */ --foreground: #1a1a1a
  /* Koyu ön plan */;
```

### Fontlar

- **Display**: Work Sans (400, 600, 900)
- **Mono**: Space Mono (400, 700)

### CSS Utilities

- `.hard-shadow`: Brutalist gölge efekti (hover/active states dahil)
- `.animate-marquee`: Sonsuz yatay kaydırma animasyonu
- `.noise-overlay`: Film grain noise texture
- `.hide-scrollbar`: Scrollbar gizleme helper

---

## 📁 Veri Yapısı

### Project Type

```typescript
interface Project {
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

### Experience Type

```typescript
interface Experience {
  id: number;
  type: "work" | "edu";
  role: string;
  org: string;
  date: string;
  desc: string;
}
```

---

## 🔧 Konfigürasyon

### SEO & Metadata

`app/layout.tsx` dosyasında kapsamlı SEO ayarları:

- Open Graph meta tags
- Twitter Card support
- Keyword optimizasyonu (TR/EN)
- Robots indexing

### Next.js Config

```typescript
// next.config.ts
const nextConfig = {
  // Konfigürasyonlar...
};
```

---

## 📄 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 👨‍💻 Geliştirici

**Rewound** - Full-Stack Developer

- 🌐 [Portfolio](https://rewound.dev)
- 🐦 [Twitter](https://twitter.com/rewound)
- 💼 [LinkedIn](https://linkedin.com/in/rewound)

---

<p align="center">
  <sub>Built with 💛 and lots of <code>box-shadow</code></sub>
</p>
