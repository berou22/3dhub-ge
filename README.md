# 3DHub.ge — 3D Printer Online Store

Georgian e-commerce site for 3D printers, filament, accessories and 3D printing services.

## 🚀 Quick Start

1. Clone the repo
2. Open `index.html` in a browser **or** deploy to any static host

No build step required — pure HTML/CSS/JS.

## 📄 Pages

| URL | Page |
|-----|------|
| `index.html` | Home |
| `?page=catalog` | Catalog (filter by type) |
| `?page=catalog&type=printers` | Printers catalog |
| `?page=product&id=1` | Product detail |
| `?page=cart` | Shopping cart |
| `?page=checkout` | Checkout |
| `?page=services` | 3D Services |
| `?page=blog` | Blog |
| `?page=support` | Support / FAQ |
| `?page=wishlist` | Wishlist |
| `?page=search&q=bambu` | Search results |
| `?page=admin` | **Admin panel** |
| `?page=contact` | Contact |
| `?page=login` | Login |
| `?page=delivery` | Delivery & payment |

## 🛠 Admin Panel

Go to `?page=admin` — no password in demo mode.

Sections:
- **Dashboard** — revenue, orders, leads stats
- **Orders** — full table, status management, create order
- **Leads** — CRM for incoming requests
- **Products** — edit catalog, stock, prices
- **Customers** — client list
- **Settings** — site config, users, delivery, notifications

## 🌐 Hosting

Works on any static host:
- **GitHub Pages** — push repo, enable Pages in Settings
- **Netlify** — drag & drop the folder
- **Vercel** — `vercel --prod`
- Any shared hosting — upload via FTP

## 🌍 Languages

- 🇬🇪 Georgian (primary)
- 🇬🇧 English

Switch with GE/EN button in navbar. Language persists in localStorage.

## ✏️ Customization

- **Products**: edit `PRODUCTS` array in `js/core.js`
- **Translations**: edit `LANG` object in `js/core.js`
- **Colors**: edit CSS variables in `css/main.css` (`:root` block)
- **Reviews/FAQs**: edit `REVIEWS` and `FAQS` arrays in `js/core.js`

## 📦 Structure

```
3dhub/
├── index.html          ← Entry point + router
├── css/
│   └── main.css        ← Design system (~900 lines)
├── js/
│   ├── core.js         ← State, translations, cart, products data
│   ├── pages.js        ← All page renderers
│   └── admin.js        ← Admin panel
└── README.md
```

## 🔧 Tech Stack

- Vanilla HTML / CSS / JS (no framework, no build step)
- [Tabler Icons](https://tabler.io/icons) via CDN
- Google Fonts: Outfit + Noto Sans Georgian
- SPA routing via URL `?page=` params + History API
- State in localStorage (cart, wishlist, language)
