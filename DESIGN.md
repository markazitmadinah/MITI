# DESIGN.md — Company Profile IT & Digital Solutions

## 1. Project Overview

Website ini merupakan **company profile perusahaan IT** yang menyediakan layanan:

- Website Development
- Web Application Development
- Mobile Application Development
- Business Automation
- AI Integration
- Custom Digital Solutions
- System Development
- API & Third-party Integration

### Design Character

Website harus terasa:

- Modern
- Clean
- Minimal
- Professional
- Premium
- Technology-oriented
- Reliable
- Simple
- Spacious
- Editorial

Referensi visual utama mengikuti karakter gambar referensi:

- White space yang luas
- Typography besar dan tegas
- Soft blue accent
- Product/application mockup
- Rounded corners
- Subtle border
- Soft shadow
- Minimal animation
- Layout editorial panjang
- Visual hierarchy kuat

Website **tidak boleh terlihat seperti dashboard admin** atau template IT generik.

Target impression:

> Premium technology company that builds digital products.

---

# 2. Design Direction

Gunakan formula visual:

```text
Minimal
+
Technology
+
Premium
+
Whitespace
+
Strong Typography
```

Whitespace merupakan bagian penting dari desain.

Jangan memenuhi halaman dengan terlalu banyak:

- Text
- Card
- Icon
- Gradient
- Animation
- Decorative elements

---

# 3. Color System

## 3.1 Main Colors

```css
--color-background: #FFFFFF;
--color-background-soft: #F8FAFC;
--color-background-blue: #F1F7FF;
```

| Color | Penggunaan |
|---|---|
| `#FFFFFF` | Background utama |
| `#F8FAFC` | Section alternatif |
| `#F1F7FF` | Section bernuansa teknologi |

## 3.2 Text Colors

```css
--color-text-primary: #111111;
--color-text-secondary: #555555;
--color-text-muted: #8A8A8A;
```

### Primary Text

`#111111`

Digunakan untuk:

- Hero heading
- Section heading
- Card heading
- Navigation
- CTA utama

### Secondary Text

`#555555`

Digunakan untuk:

- Paragraph
- Description
- Supporting text

### Muted Text

`#8A8A8A`

Digunakan untuk:

- Caption
- Metadata
- Label
- Small text

---

# 4. Brand / Accent Color

Gunakan biru sebagai identitas teknologi.

```css
--color-primary: #1677FF;
--color-primary-dark: #0B5ED7;
--color-primary-soft: #EAF3FF;
```

Gunakan blue pada:

- CTA tertentu
- Link
- Badge
- Icon tertentu
- Highlight text
- Decorative element
- Gradient
- Small visual accent

Blue tidak boleh mendominasi seluruh website.

Warna dominan tetap:

```text
White + Black + Soft Blue
```

---

# 5. Gradient

Gradient harus sangat soft.

## Primary Gradient

```css
background: linear-gradient(
    180deg,
    #FFFFFF 0%,
    #F4F9FF 55%,
    #EAF3FF 100%
);
```

## Hero Glow

```css
background: radial-gradient(
    circle,
    rgba(22, 119, 255, 0.12) 0%,
    rgba(22, 119, 255, 0.05) 35%,
    transparent 70%
);
```

Gradient hanya digunakan untuk:

- Background ambience
- Glow di belakang mockup
- Section highlight
- Decorative background

Hindari gradient yang terlalu kontras.

---

# 6. Typography

## Primary Font

Gunakan:

```text
Inter
```

Alternatif:

```text
Geist
Plus Jakarta Sans
Manrope
```

Prioritas:

```text
Inter
```

Karakter font:

- Modern
- Professional
- Readable
- Cocok untuk technology company
- Cocok untuk heading besar
- Cocok untuk UI

---

# 7. Typography Scale

## Hero Heading

Desktop:

```css
font-size: 64px;
line-height: 1.05;
font-weight: 600;
letter-spacing: -0.04em;
```

Tablet:

```css
font-size: 48px;
```

Mobile:

```css
font-size: 38px;
line-height: 1.08;
```

Hero heading maksimal:

```text
2–3 lines
```

Contoh:

> We Build Digital  
> Products That Move  
> Business Forward.

---

## Section Heading

Desktop:

```css
font-size: 42px;
line-height: 1.1;
font-weight: 600;
letter-spacing: -0.03em;
```

Mobile:

```css
font-size: 32px;
```

---

## Card Heading

```css
font-size: 20px;
line-height: 1.3;
font-weight: 600;
```

---

## Body

```css
font-size: 16px;
line-height: 1.7;
font-weight: 400;
```

---

## Small Text

```css
font-size: 13px;
line-height: 1.5;
```

---

# 8. Global Container

Maximum content width:

```css
max-width: 1200px;
margin: 0 auto;
```

Desktop:

```css
padding-left: 32px;
padding-right: 32px;
```

Tablet:

```css
padding-left: 24px;
padding-right: 24px;
```

Mobile:

```css
padding-left: 20px;
padding-right: 20px;
```

Content tidak boleh memenuhi seluruh layar.

Berikan ruang kosong di kiri dan kanan.

---

# 9. Grid System

## Desktop

```text
12 column grid
```

Column gap:

```css
column-gap: 24px;
```

## Tablet

```text
8 column grid
```

## Mobile

```text
1 column
```

---

# 10. Border Radius

```css
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-pill: 999px;
```

Penggunaan:

| Element | Radius |
|---|---:|
| Small UI | 10px |
| Card | 16px |
| Large card / section | 24px |
| Button / badge | 999px |
| Product mockup | 20–24px |

---

# 11. Border

Default:

```css
border: 1px solid #EAEAEA;
```

Card:

```css
border: 1px solid #E8EDF3;
```

Hindari border hitam tebal.

---

# 12. Shadow

Default:

```css
box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
```

Floating element:

```css
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
```

Shadow harus sangat halus.

---

# 13. Spacing System

Gunakan spacing system:

```text
4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
120px
```

Utamakan:

```text
12px
16px
24px
32px
48px
64px
80px
120px
```

Hindari spacing random seperti:

```text
17px
27px
39px
53px
```

kecuali ada alasan layout yang jelas.

---

# 14. Vertical Rhythm

Gunakan pola:

```text
Section Label
      ↓
    12px
      ↓
Section Heading
      ↓
    20px
      ↓
Description
      ↓
    40px
      ↓
Content
```

Untuk card:

```text
Icon
 ↓
24px
 ↓
Title
 ↓
12px
 ↓
Description
 ↓
24px
 ↓
Link
```

---

# 15. Section Spacing

## Desktop

### Hero

```css
padding-top: 100px;
padding-bottom: 80px;
```

### Normal Section

```css
padding: 120px 0;
```

### Large Section

```css
padding: 140px 0;
```

### Small Section

```css
padding: 80px 0;
```

## Tablet

```css
padding: 96px 0;
```

## Mobile

```css
padding: 72px 0;
```

---

# 16. Navigation

## Desktop Layout

```text
┌───────────────────────────────────────────────────────┐
│ LOGO      Services  Solutions  About  Contact  CTA   │
└───────────────────────────────────────────────────────┘
```

Navbar height:

```css
height: 72px;
```

Container:

```css
max-width: 1200px;
```

### Logo

Position:

```text
Left
```

Size:

```css
height: 24px–28px;
```

### Navigation

Position:

```text
Center
```

Gap:

```css
gap: 24px;
```

Font:

```css
font-size: 14px;
font-weight: 500;
```

Menu:

```text
Services
Solutions
About
Process
Contact
```

### Navbar CTA

Position:

```text
Right
```

Example:

```text
Let's Talk
```

Style:

```css
padding: 11px 18px;
border-radius: 999px;
background: #111111;
color: #FFFFFF;
```

---

# 17. Hero Section

Hero merupakan bagian paling penting.

## Layout

```text
                    DIGITAL SOLUTIONS

             We Build Digital Products
             That Move Business Forward.

      We create websites, applications, automation
      and AI-powered solutions for modern businesses.

             [ Start a Project ] [ Explore Services ]


                     PRODUCT MOCKUP

                ┌─────────────────────┐
                │                     │
                │    APPLICATION      │
                │      MOCKUP         │
                │                     │
                └─────────────────────┘
```

### Alignment

```text
Center
```

Content width:

```css
max-width: 850px;
```

### Desktop Spacing

```css
padding-top: 100px;
padding-bottom: 80px;
```

### Tablet

```css
padding-top: 80px;
padding-bottom: 70px;
```

### Mobile

```css
padding-top: 72px;
padding-bottom: 64px;
```

---

# 18. Hero Badge

Example:

```text
DIGITAL PRODUCT & IT SOLUTIONS
```

Style:

```css
font-size: 12px;
font-weight: 500;
letter-spacing: 0.04em;
background: #F1F7FF;
color: #1677FF;
padding: 8px 14px;
border-radius: 999px;
```

Margin bottom:

```css
margin-bottom: 20px;
```

---

# 19. Hero Headline

Recommended:

```text
We Build Digital
Products That Move
Business Forward.
```

Style:

```css
font-size: 64px;
font-weight: 600;
line-height: 1.05;
letter-spacing: -0.04em;
color: #111111;
```

Highlight hanya beberapa kata:

```text
We Build
Digital Products
That Move Business Forward.
```

`Digital Products` dapat menggunakan:

```text
#1677FF
```

Jangan memberi warna pada seluruh heading.

---

# 20. Hero Description

Width:

```css
max-width: 600px;
```

Alignment:

```text
center
```

Example:

> We design and build websites, applications, automation systems, and AI-powered solutions that help businesses work smarter.

Style:

```css
font-size: 16px;
line-height: 1.7;
color: #555555;
```

Margin top:

```css
margin-top: 24px;
```

---

# 21. Hero CTA

Margin top:

```css
margin-top: 32px;
```

Gap:

```css
gap: 12px;
```

Primary:

```text
Start a Project →
```

Secondary:

```text
Explore Services
```

## Primary Button

```css
background: #111111;
color: #FFFFFF;
padding: 12px 20px;
border-radius: 999px;
font-size: 14px;
font-weight: 500;
```

## Secondary Button

```css
background: #FFFFFF;
color: #111111;
border: 1px solid #E5E5E5;
padding: 12px 20px;
border-radius: 999px;
font-size: 14px;
font-weight: 500;
```

---

# 22. Hero Product Visual

Setelah CTA tampilkan visual besar.

Visual dapat berupa:

- Website mockup
- Mobile application
- Automation workflow
- AI interface
- Web application
- Multiple product screens

Contoh:

```text
              ┌─────────────────────┐
              │                     │
              │    PRODUCT MOCKUP    │
              │                     │
              └─────────────────────┘
```

Berikan soft blue glow di belakangnya.

```css
background: radial-gradient(
    circle,
    rgba(22, 119, 255, 0.12),
    transparent 70%
);
```

---

# 23. Trust / Service Strip

Setelah hero gunakan section kecil:

```text
WE HELP BUSINESSES WITH

Web Development
·
App Development
·
Automation
·
AI Integration
·
Digital Solutions
```

Margin top:

```css
margin-top: 70px;
```

Font:

```css
font-size: 13px;
color: #8A8A8A;
```

---

# 24. About Section

Gunakan layout dua kolom.

```text
┌───────────────────────────┬──────────────────────────┐
│                           │                          │
│ ABOUT US                  │                          │
│                           │       VISUAL             │
│ Technology should make   │       / MOCKUP           │
│ your business simpler.   │                          │
│                           │                          │
│ Description...            │                          │
│                           │                          │
└───────────────────────────┴──────────────────────────┘
```

Desktop:

```text
45% text
55% visual
```

Gap:

```css
gap: 64px;
```

Section:

```css
padding: 120px 0;
```

---

# 25. About Heading

Example:

```text
Technology should make
your business simpler.
```

Style:

```css
font-size: 42px;
line-height: 1.1;
font-weight: 600;
letter-spacing: -0.03em;
```

Paragraph:

```css
max-width: 520px;
font-size: 16px;
line-height: 1.7;
color: #555555;
```

---

# 26. Services Section

Label:

```text
WHAT WE BUILD
```

Heading:

```text
Digital solutions built
around your business.
```

Description:

> From websites and applications to automation and AI integration, we create solutions designed to solve real business problems.

---

# 27. Services Grid

Desktop:

```text
┌─────────────────────────┐  ┌─────────────────────────┐
│ WEB DEVELOPMENT         │  │ APPLICATION DEVELOPMENT │
│                         │  │                         │
│ Description...          │  │ Description...          │
│                         │  │                         │
│ Learn More →            │  │ Learn More →            │
└─────────────────────────┘  └─────────────────────────┘

┌─────────────────────────┐  ┌─────────────────────────┐
│ BUSINESS AUTOMATION     │  │ AI SOLUTIONS            │
│                         │  │                         │
│ Description...          │  │ Description...          │
│                         │  │                         │
│ Learn More →            │  │ Learn More →            │
└─────────────────────────┘  └─────────────────────────┘
```

Grid:

```css
grid-template-columns: repeat(2, 1fr);
gap: 20px;
```

---

# 28. Service Card

```css
padding: 32px;
min-height: 260px;
background: #FFFFFF;
border: 1px solid #EAEAEA;
border-radius: 20px;
```

Structure:

```text
Icon
↓
24px
↓
Title
↓
12px
↓
Description
↓
24px
↓
Learn More
```

Hover:

```css
transform: translateY(-4px);
border-color: #D8E8FF;
box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
transition: 0.25s ease;
```

---

# 29. Services Content

## Web Development

> Modern websites designed to communicate your brand and convert visitors into customers.

## Application Development

> Custom web and mobile applications built around your business processes.

## Business Automation

> Automate repetitive workflows and make your business operations more efficient.

## AI Solutions

> Integrate AI into your products and workflows to create smarter digital experiences.

---

# 30. How We Work Section

Background:

```css
background: #F8FAFC;
```

Heading:

```text
How We Work
```

Subheading:

```text
From idea to launch.
```

Layout:

```text
01              02              03              04

Discover   →    Design    →     Build     →     Launch
```

---

# 31. Process

## 01 — Discover

> We understand your business, users, problems, and goals.

## 02 — Design

> We turn ideas into clear digital experiences.

## 03 — Build

> We develop reliable and scalable digital products.

## 04 — Launch

> We deploy, test, monitor, and continuously improve the solution.

---

# 32. Process Spacing

Section:

```css
padding: 120px 0;
```

Grid:

```css
gap: 24px;
```

Number:

```css
font-size: 14px;
color: #1677FF;
font-weight: 600;
```

Heading:

```css
font-size: 20px;
font-weight: 600;
```

Description:

```css
font-size: 15px;
line-height: 1.6;
color: #555555;
```

---

# 33. Technology Section

Heading:

```text
Built With Modern Technology
```

Description:

> We use reliable and modern technologies to build scalable digital products.

Technology list:

```text
Laravel
PHP
React
Next.js
Node.js
MySQL
REST API
AI
Automation
Cloud
```

Style:

```css
border: 1px solid #EAEAEA;
border-radius: 999px;
padding: 10px 16px;
background: #FFFFFF;
font-size: 14px;
```

Layout:

```text
[ Laravel ] [ PHP ] [ React ] [ Next.js ]
[ Node.js ] [ MySQL ] [ AI ] [ APIs ]
[ Automation ] [ Cloud ]
```

Jangan menampilkan terlalu banyak logo teknologi.

---

# 34. Featured Solution Section

Gunakan layout seperti product showcase pada referensi.

```text
┌────────────────────────────────────────────────────┐
│                                                    │
│ FEATURED SOLUTION                                  │
│                                                    │
│ Built for real-world                              │
│ business problems.                                │
│                                                    │
│ We create digital products that help businesses   │
│ operate better, faster, and smarter.              │
│                                                    │
│ [ Explore Solution → ]                             │
│                                                    │
│                              ┌─────────────────┐   │
│                              │                 │   │
│                              │ PRODUCT MOCKUP  │   │
│                              │                 │   │
│                              └─────────────────┘   │
│                                                    │
└────────────────────────────────────────────────────┘
```

Desktop:

```text
45% text
55% visual
```

Gap:

```css
gap: 64px;
```

---

# 35. Values Section

Gunakan 4 value:

```text
01
Custom Solutions

02
Modern Technology

03
Business Focused

04
Long-term Support
```

Layout:

```text
┌────────────────────────┐  ┌────────────────────────┐
│ 01                     │  │ 02                     │
│ Custom Solutions       │  │ Modern Technology      │
└────────────────────────┘  └────────────────────────┘

┌────────────────────────┐  ┌────────────────────────┐
│ 03                     │  │ 04                     │
│ Business Focused       │  │ Long-term Support      │
└────────────────────────┘  └────────────────────────┘
```

Card sederhana.

Tidak perlu shadow berat.

---

# 36. Portfolio Section

Jika perusahaan belum mempunyai portfolio project yang dapat dipublikasikan:

**Jangan membuat project palsu.**

Gunakan section:

```text
BUILDING WHAT'S NEXT

We're currently working on new digital
products and solutions.

Want to build something with us?

[ Start a Project ]
```

Alternatif yang dapat ditampilkan:

- Concept Project
- Experimental Project
- Internal Product
- Demo Application
- Product in Development

Jika project konsep, berikan label:

```text
CONCEPT
```

atau:

```text
EXPERIMENTAL
```

atau:

```text
IN DEVELOPMENT
```

---

# 37. CTA Section

CTA harus menjadi salah satu section paling kuat secara visual.

Background:

```css
background: #111111;
```

Text:

```css
color: #FFFFFF;
```

Layout:

```text
┌─────────────────────────────────────────────┐
│                                             │
│               HAVE AN IDEA?                 │
│                                             │
│          Let's build it together.           │
│                                             │
│   Tell us what you're trying to build and   │
│   we'll help turn it into reality.          │
│                                             │
│            [ Start a Project → ]            │
│                                             │
└─────────────────────────────────────────────┘
```

Padding:

```css
padding: 120px 40px;
```

Border radius:

```css
border-radius: 24px;
```

---

# 38. CTA Typography

Desktop:

```css
font-size: 48px;
line-height: 1.1;
font-weight: 600;
letter-spacing: -0.03em;
```

Mobile:

```css
font-size: 34px;
```

Recommended heading:

```text
Let's build
something useful.
```

---

# 39. Footer

Layout:

```text
┌───────────────────────────────────────────────────────┐
│ LOGO                                                  │
│                                                       │
│ Building digital solutions                            │
│ for modern businesses.                                │
│                                                       │
│ Services          Company          Social             │
│ Web Development   About            Instagram          │
│ App Development   Contact          LinkedIn           │
│ Automation        Privacy          WhatsApp           │
│ AI Solutions                                          │
│                                                       │
│───────────────────────────────────────────────────────│
│                                                       │
│ © 2026 Company Name          All rights reserved.     │
└───────────────────────────────────────────────────────┘
```

Footer:

```css
background: #FFFFFF;
border-top: 1px solid #EAEAEA;
padding: 64px 0 32px;
```

---

# 40. Image Treatment

Semua product image harus:

- High quality
- Clean
- Minimal
- Tidak terlalu banyak decoration
- Tidak menggunakan stock photo generic
- Memiliki whitespace

Image:

```css
border-radius: 20px;
```

Product mockup:

```css
border-radius: 24px;
```

Gunakan screenshot produk sebagai visual utama jika tersedia.

---

# 41. Background Decoration

Gunakan dekorasi secara minimal.

Contoh:

- Soft blue glow
- Blurred circle
- Light gradient
- Subtle grid

Glow:

```css
filter: blur(60px);
opacity: 0.4;
```

Jangan gunakan:

- Neon glow
- Banyak blob
- Excessive glassmorphism
- Background terlalu ramai
- Terlalu banyak floating object

---

# 42. Animation

Animation harus subtle.

## Fade Up

```text
opacity:
0 → 1

transform:
translateY(20px) → translateY(0)
```

Duration:

```css
0.6s
```

Easing:

```css
ease-out
```

## Hover

Button:

```css
transform: translateY(-1px);
```

Card:

```css
transform: translateY(-4px);
```

Image:

```css
transform: scale(1.02);
```

Transition:

```css
transition: all 0.25s ease;
```

Jangan gunakan:

- Bounce
- Spin
- Shake
- Excessive Parallax
- Animasi yang mengganggu readability

---

# 43. Responsive Design

## Desktop ≥ 1024px

```text
Container: 1200px
Grid: 12 columns
Hero: center
Services: 2 columns
About: 2 columns
Featured Solution: 2 columns
Values: 2 columns
```

## Tablet 768–1023px

```text
Container: 90%
Grid: 8 columns
Services: 2 columns
About: 1 column
Featured Solution: 1 column
```

## Mobile < 768px

```text
Container: calc(100% - 40px)

Navigation:
Logo + hamburger

Hero:
1 column

Services:
1 column

About:
1 column

Process:
1 column

Technology:
wrap

Featured Solution:
1 column

Values:
1 column

CTA:
1 column
```

---

# 44. Mobile Navigation

Desktop:

```text
Logo
Services
Solutions
About
Contact
CTA
```

Mobile:

```text
Logo                         ☰
```

Menu menjadi mobile drawer / dropdown.

CTA tetap tersedia di dalam mobile menu.

---

# 45. Mobile Hero

Hero:

```css
padding-top: 72px;
```

Heading:

```css
font-size: 38px;
line-height: 1.08;
```

CTA dibuat stacked:

```text
┌──────────────────────────┐
│     Start a Project      │
└──────────────────────────┘

┌──────────────────────────┐
│    Explore Services      │
└──────────────────────────┘
```

Button:

```css
width: 100%;
max-width: 320px;
```

---

# 46. Mobile Services

Desktop:

```text
2 × 2
```

Mobile:

```text
1
1
1
1
```

Gap:

```css
16px;
```

Card padding:

```css
24px;
```

---

# 47. Mobile About

Desktop:

```text
Text | Visual
```

Mobile:

```text
Text

Visual
```

Gap:

```css
40px;
```

---

# 48. Mobile CTA

CTA:

```text
Full width
```

Padding:

```css
72px 24px;
```

Heading:

```css
font-size: 34px;
```

Button:

```text
100% width
```

---

# 49. Overall Page Structure

```text
01. Navbar
        ↓
02. Hero
        ↓
03. Service / Trust Strip
        ↓
04. About / Company Introduction
        ↓
05. Services
        ↓
06. How We Work
        ↓
07. Technology
        ↓
08. Featured Solution
        ↓
09. Values
        ↓
10. Portfolio / Work
        ↓
11. CTA
        ↓
12. Footer
```

---

# 50. Visual Hierarchy

Prioritas visual:

```text
1. Hero Headline
2. Hero Product Visual
3. Section Heading
4. CTA
5. Service Cards
6. Supporting Text
7. Navigation
8. Metadata
```

Dalam 5–10 detik pertama user harus memahami:

```text
WHO WE ARE
     ↓
WHAT WE BUILD
     ↓
HOW WE HELP
     ↓
HOW TO CONTACT US
```

---

# 51. Content Direction

Copywriting harus:

- Singkat
- Profesional
- Direct
- Tidak terlalu formal
- Tidak terlalu banyak jargon
- Business-oriented

Hindari paragraf panjang.

Contoh buruk:

> Kami adalah perusahaan yang bergerak di bidang teknologi informasi yang menyediakan berbagai macam layanan teknologi yang dapat membantu perusahaan...

Contoh yang lebih baik:

> We build digital products that help businesses work smarter.

---

# 52. Recommended Hero Copy

### Heading

> We Build Digital Products That Move Business Forward.

### Description

> We design and build websites, applications, automation systems, and AI-powered solutions for modern businesses.

### CTA

```text
Start a Project →
```

```text
Explore Services
```

---

# 53. Recommended About Copy

### Heading

> Technology should make your business simpler.

### Description

> We combine design, development, automation, and modern technology to create digital solutions that solve real business problems.

---

# 54. Recommended Process Copy

### Discover

> We understand your business, users, and goals.

### Design

> We turn ideas into clear digital experiences.

### Build

> We develop reliable and scalable digital products.

### Launch

> We deploy, test, and continuously improve the solution.

---

# 55. Recommended CTA Copy

### Label

```text
HAVE AN IDEA?
```

### Heading

> Let's build something useful.

### Description

> Tell us what you're trying to build and we'll help turn the idea into reality.

### Button

```text
Start a Project →
```

---

# 56. Design Principles

## Principle 01 — Less is More

Jangan memenuhi halaman dengan elemen.

Whitespace adalah bagian dari desain.

## Principle 02 — Typography First

Gunakan typography sebagai visual utama.

Tidak semua section membutuhkan gambar.

## Principle 03 — Product Visual

Jika menggunakan screenshot aplikasi, jadikan sebagai centerpiece dan berikan ruang di sekitarnya.

## Principle 04 — Consistency

Semua:

- Border radius
- Spacing
- Typography
- Button
- Card
- Color

harus konsisten.

## Principle 05 — Premium

Premium tidak berarti banyak efek.

Premium dicapai melalui:

```text
Typography
+
Spacing
+
Alignment
+
Whitespace
+
Consistency
```

---

# 57. DO

Gunakan:

- White space besar
- Typography besar
- Black + white
- Soft blue
- Rounded card
- Subtle border
- Minimal shadow
- Clean mockup
- Simple animation
- Clear CTA
- Consistent spacing
- Strong visual hierarchy

---

# 58. DON'T

Jangan gunakan:

- Terlalu banyak gradient
- Terlalu banyak warna
- Neon
- Excessive glassmorphism
- Card terlalu kecil
- Text terlalu padat
- Shadow berat
- Icon terlalu besar
- Animasi berlebihan
- Stock photo generic
- Layout seperti dashboard
- Section terlalu rapat
- Project palsu
- Fake testimonials
- Fake client logos

---

# 59. Final Visual Direction

Overall website harus terasa seperti:

```text
Modern
   +
Minimal
   +
Technology
   +
Premium
   +
Editorial
```

Visual flow:

```text
White Background
       ↓
Large Typography
       ↓
Soft Blue Accent
       ↓
Large Product Mockup
       ↓
Generous Whitespace
       ↓
Minimal Cards
       ↓
Strong CTA
```

Target impression:

> This company builds serious digital products.

Bukan:

> This is a generic IT service website.

---

# 60. Final Page Wireframe

```text
┌─────────────────────────────────────────────────────────┐
│ LOGO       Services  Solutions  About  Contact   CTA   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                  DIGITAL SOLUTIONS                      │
│                                                         │
│              We Build Digital Products                 │
│              That Move Business Forward.                │
│                                                         │
│       Websites • Apps • Automation • AI                 │
│                                                         │
│          [ Start a Project ] [ Explore Services ]       │
│                                                         │
│                  ┌───────────────┐                      │
│                  │               │                      │
│                  │ PRODUCT       │                      │
│                  │ MOCKUP        │                      │
│                  │               │                      │
│                  └───────────────┘                      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                  WHAT WE BUILD                          │
│                                                         │
│         Digital solutions built around                 │
│              your business.                             │
│                                                         │
│   ┌───────────────────┐  ┌───────────────────┐          │
│   │ Web Development   │  │ App Development   │          │
│   │ Description...    │  │ Description...    │          │
│   └───────────────────┘  └───────────────────┘          │
│                                                         │
│   ┌───────────────────┐  ┌───────────────────┐          │
│   │ Automation        │  │ AI Solutions      │          │
│   │ Description...    │  │ Description...    │          │
│   └───────────────────┘  └───────────────────┘          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                     ABOUT US                            │
│                                                         │
│   Technology should make your business simpler.        │
│                                                         │
│   Description...                    ┌───────────────┐    │
│                                     │    VISUAL     │    │
│                                     │    MOCKUP     │    │
│                                     └───────────────┘    │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                     HOW WE WORK                         │
│                                                         │
│       01          02          03          04            │
│    Discover →   Design →    Build →     Launch          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│              BUILT WITH MODERN TECHNOLOGY              │
│                                                         │
│      [Laravel] [PHP] [React] [Next.js] [AI]            │
│      [Node.js] [MySQL] [API] [Automation]              │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                 FEATURED SOLUTION                       │
│                                                         │
│   Built for real-world business problems.              │
│                                                         │
│   Description...                  ┌───────────────┐      │
│                                  │    MOCKUP     │      │
│                                  └───────────────┘      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                     OUR VALUES                          │
│                                                         │
│   ┌──────────────────┐  ┌──────────────────┐            │
│   │ 01               │  │ 02               │            │
│   │ Custom Solutions │  │ Modern Technology│            │
│   └──────────────────┘  └──────────────────┘            │
│                                                         │
│   ┌──────────────────┐  ┌──────────────────┐            │
│   │ 03               │  │ 04               │            │
│   │ Business Focused │  │ Long-term Support│            │
│   └──────────────────┘  └──────────────────┘            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                  BUILDING WHAT'S NEXT                   │
│                                                         │
│       We're currently working on new digital           │
│       products and solutions.                           │
│                                                         │
│                [ Start a Project ]                      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                   HAVE AN IDEA?                         │
│                                                         │
│              Let's build something useful.              │
│                                                         │
│              [ Start a Project → ]                      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ LOGO                                                    │
│                                                         │
│ Building digital solutions for modern businesses.      │
│                                                         │
│ Services          Company          Social               │
│ Web Development   About            Instagram            │
│ App Development   Contact          LinkedIn             │
│ Automation        Privacy          WhatsApp             │
│ AI Solutions                                             │
│                                                         │
│─────────────────────────────────────────────────────────│
│ © 2026 Company Name                  All Rights Reserved│
└─────────────────────────────────────────────────────────┘
```

---

# 61. Design Tokens

```css
:root {

    /* Colors */

    --background: #FFFFFF;
    --background-soft: #F8FAFC;
    --background-blue: #F1F7FF;

    --text-primary: #111111;
    --text-secondary: #555555;
    --text-muted: #8A8A8A;

    --primary: #1677FF;
    --primary-dark: #0B5ED7;
    --primary-soft: #EAF3FF;

    --border: #EAEAEA;
    --border-soft: #E8EDF3;


    /* Typography */

    --font-primary: "Inter", sans-serif;


    /* Radius */

    --radius-sm: 10px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --radius-pill: 999px;


    /* Spacing */

    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-7: 32px;
    --space-8: 40px;
    --space-9: 48px;
    --space-10: 64px;
    --space-11: 80px;
    --space-12: 120px;


    /* Container */

    --container-width: 1200px;


    /* Transition */

    --transition-fast: 0.2s ease;
    --transition-normal: 0.25s ease;
    --transition-slow: 0.6s ease;
}
```

---

# 62. Final Implementation Rule

Prioritaskan:

```text
1. Typography
2. Whitespace
3. Layout
4. Product Visual
5. Color
6. Animation
```

Bukan:

```text
1. Animation
2. Gradient
3. Decoration
4. Color
5. Layout
```

Website harus tetap terlihat bagus meskipun seluruh animation dimatikan.

Jika desain hanya terlihat bagus karena animation dan efek visual, berarti desain belum cukup kuat.

---

# 63. Final Brand Impression

Website harus menyampaikan tiga hal dalam waktu singkat:

```text
WE BUILD
Digital Products
```

```text
WE SOLVE
Business Problems
```

```text
WE USE
Modern Technology
```

Overall impression:

```text
Clean
Modern
Reliable
Technical
Professional
Premium
Simple
```
