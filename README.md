# Catering Website – Client Customisation Guide

A 5-page premium glassmorphism catering website (HTML + Tailwind CSS + JavaScript).
Built for **Samadhan Catering Service** (Airoli, Navi Mumbai). Business details, photos and logo are the client's own.
Still template content (please confirm with the client): the **package names/features** (prices are hidden, the site shows "Request a Quote") and the **"How It Works"** steps.
Instagram is linked (header, footer, contact page). Testimonials stay hidden until the client has real ones.
The header **View Menu** button opens the menu PDF in an overlay: pages are `assets/menu/page-01..15.jpg` (settings in `menuPdf` in `config.js`). If the PDF changes, replace the PDF and re-export its pages with the same names.

## Files

```
index.html          Home
about.html          About Us
services.html      Services (services, menu, packages)
gallery.html        Gallery (category filters + photo viewer)
contact.html        Contact Us (details, enquiry form -> WhatsApp, map)
assets/
  js/config.js            <-- ALL client details live here (edit this first)
  js/main.js              Shared header / footer / floating buttons / renderers / forms
  js/tailwind-config.js   Colours, fonts, and reusable glass / button styles
  images/                 All photos, logo and favicon
```

There is no CSS file. Styling is Tailwind (loaded from the Tailwind CDN) plus the shared theme in
`assets/js/tailwind-config.js`. An internet connection is needed to load Tailwind and Google Fonts.

## 1. Business details  (`assets/js/config.js`)

| What | Where in `config.js` |
|---|---|
| Business name, descriptor, tagline, intro, owner, establishment year, areas served | `business` |
| Phone, WhatsApp number, email, address, working hours | `contact` |
| Instagram / Facebook / YouTube links (delete a line to hide one) | `social` |
| Home page welcome text, highlights, statistics | `home` |
| About page story, history timeline, mission, vision, "why choose us", team | `about` |
| Services (title, description, bullet points, image) | `services` |
| Veg / Non-Veg / Special menu items | `menu` |
| Package names, prices, features (set `showPrices: false` to hide prices) | `packages`, `showPrices` |
| Customer testimonials | `testimonials` |
| Gallery photos and categories | `gallery`, `galleryCategories` |

"Years of experience" is calculated automatically from `business.established`.

### WhatsApp number (important)
`contact.whatsapp` is the number that receives **every enquiry**. Use country code + number, digits only,
for example `919876543210`. This is used by:
- the enquiry / booking form (opens WhatsApp with the customer's details pre-filled),
- the floating WhatsApp button, header menu and all "WhatsApp Us" buttons.

`contact.phoneRaw` (e.g. `+919876543210`) powers every **Call Now** button.

### Google Maps
The map currently searches the business address. When the client sends the Google Maps link, paste it into `contact.mapLink` (the "Open in Google Maps" button). Set `contact.mapQuery` to the full business address (or business name + city) and
`contact.mapLink` to the "Share > Copy link" URL from Google Maps. No API key is needed.

### Testimonials
The `testimonials` list is empty, so the section is hidden. Add real reviews (`name`, `role`, `rating`, `text`) to show it.

### Prices
`showPrices` is `false`, so packages show "Request a Quote". Set it to `true` and fill in `packages` prices when the client provides them.
Edit `pricingNote` to change the small note under the packages.

## 2. Images  (`assets/images/`)

Images are the client's own photos. To swap one, replace a file **using the same file name** (keep `.jpg`), or change
the path in `config.js`. Recommended sizes:

| File | Used on | Suggested size |
|---|---|---|
| `logo.png` | Header, footer (the client's own logo; if the file name changes, update `business.logo`) | square-ish, transparent background |
| `favicon.png` | Browser tab icon | square |
| `hero.jpg` | Home hero | 1920 x 1080 |
| `intro-1.jpg`, `intro-2.jpg` | Home welcome section | 900 x 700 / 700 x 560 |
| `hero-about.jpg`, `hero-services.jpg`, `hero-gallery.jpg`, `hero-contact.jpg` | Page banners | 1920 x 640 |
| `about-owner.jpg` | About page owner / chef photo | 900 x 1100 (portrait) |
| `about-journey.jpg` | About page history background | 1800 x 760 |
| `team-1.jpg` ... `team-3.jpg` | Team photos (optional) | 600 x 720 (portrait) |
| `service-wedding.jpg`, `service-party.jpg`, `service-corporate.jpg`, `service-engagement.jpg` | Services | 1000 x 760 |
| `cta-bg.jpg` | Call-to-action banner background | 1920 x 700 |
| `gallery-01.jpg` ... `gallery-12.jpg` | Gallery | any ratio, about 1200 px on the long side |

**Gallery:** to add a photo, copy a line in the `gallery` list in `config.js`, change `src`, `alt` and `cat`
(`cat` must match a name in `galleryCategories`). `ratio` sets the tile shape, e.g. `aspect-square`,
`aspect-[4/3]`, `aspect-[3/4]`. To rename or add categories, edit `galleryCategories`.

**Team section is optional:** set `about.team` to `[]` to hide it.

## 3. How the booking / enquiry form works

On the Contact page the customer fills in name, phone, event type, date, guests, venue, food preference,
package and message. On submit, WhatsApp opens with a ready-to-send message addressed to
`contact.whatsapp`, containing all the submitted details. The customer presses Send in WhatsApp.
(Nothing is stored on the website.) Links such as `contact.html?service=wedding` and
`contact.html?package=Signature` pre-select the form fields; the "Request a Quote" and "Choose package"
buttons use this.

Change the message heading with `whatsappMessages.enquiryTitle`, the dropdown options with `eventTypes`
and `foodPreferences`, and the field layout / message format in `contact.html` and `main.js`
(`buildMessage`).

## 4. Colours and fonts

Edit `assets/js/tailwind-config.js`:
- Theme matches the Samadhan logo: logo yellow (`gold`, `#F2B91B`), logo brown (`forest`, `#5B3A0C` / deep `#3A2406`) for dark panels, leaf green (`sage`, `#3F7A3E`) for buttons, plus a warm cream background.
- Fonts: Cormorant Garamond (headings), Jost (body), Great Vibes (script accents). To change them, update the
  Google Fonts `<link>` in each page's `<head>` and the `fontFamily` entries.
- Reusable styles `glass`, `glass-dark`, `btn-gold`, `btn-glass`, `btn-sage`, `field` are defined once there.

## 5. Page title / SEO

Each page has a `<title>` and `<meta name="description">` in its `<head>`. The visible title is built from
`data-title` on `<body>` plus the business name. Update the meta descriptions to the client's wording.

## 6. Going live

Upload the whole folder to any static host (Netlify, Vercel, GitHub Pages, cPanel hosting).
Keep the folder structure unchanged. Test the WhatsApp number from a phone before launch.
