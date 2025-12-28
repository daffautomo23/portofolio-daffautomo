# 💼 Portfolio Daffa Utomo - Software Engineer

Modern, interactive, and responsive professional portfolio website with automatic Dark/Light Mode support.

[![Firebase](https://img.shields.io/badge/Firebase-Ready-orange?logo=firebase)](https://firebase.google.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌟 Key Features

### ✨ Automatic Dark/Light Mode
- Follows system theme preference automatically
- Uses CSS `prefers-color-scheme` media query
- Smooth theme transitions
- Optimized color contrast for both modes

### 🎯 Scroll-Triggered Animations
- Intersection Observer API for performance
- Animations trigger only when elements enter viewport
- Smooth fade-in and slide-up effects
- 15% visibility threshold for natural triggering

### 📱 Responsive Design
- Mobile-first approach
- Perfect on all devices (Phone, Tablet, Laptop, Desktop)
- Adaptive layouts with CSS Grid and Flexbox
- Touch-friendly navigation

### 🚀 Performance Optimized
- Resource hints (preconnect, dns-prefetch)
- Async CSS and deferred JavaScript loading
- Font display swap for better LCP
- Clean and efficient code

### 🎨 Modern UI/UX
- Bento-style design with rounded corners
- Gradient accents and smooth animations
- Professional card-based layouts
- Interactive hover effects

## 📂 Project Structure

```
portofolio-daffautomo/
├── index.html                      # Main landing page
├── 404.html                        # Custom error page
├── firebase.json                   # Firebase configuration
│
├── assets/                         # Static assets
│   ├── css/
│   │   └── styles.css             # Main stylesheet (1346+ lines)
│   ├── js/
│   │   └── main.js                # JavaScript with Intersection Observer
│   └── images/                    # Image assets
│
├── pages/                         # Additional pages
│   ├── all-projects.html          # Project showcase (6 projects)
│   └── projects/                  # Individual project pages
│       ├── cancer-detection.html
│       ├── lomath.html
│       ├── smpn3-website.html
│       ├── profile-website.html   # With live demo
│       ├── bakul-application.html
│       └── bakul-website.html
│
├── docs/                          # 📚 Documentation
│   ├── README.md                  # Documentation index
│   ├── PROJECT-STRUCTURE.md       # Complete structure guide
│   ├── FEATURES.md                # Feature documentation
│   ├── CHANGELOG.md               # Version history
│   ├── DEPLOYMENT.md              # Deployment guide
│   ├── LAYOUT-GUIDE.md            # Layout guidelines
│   └── CHECKLIST.md               # Development checklist
│
├── functions/                     # Firebase Cloud Functions
│   ├── src/
│   │   ├── index.ts
│   │   └── genkit-sample.ts
│   ├── package.json
│   └── tsconfig.json
│
└── dataconnect/                   # Firebase Data Connect
    ├── schema/
    │   └── schema.gql
    ├── example/
    └── dataconnect.yaml
```

## � Documentation

All detailed documentation has been organized in the `docs/` folder:

- **[Documentation Index](./docs/README.md)** - Start here for all docs
- **[Project Structure](./docs/PROJECT-STRUCTURE.md)** - Complete directory structure
- **[Features Guide](./docs/FEATURES.md)** - Detailed feature documentation
- **[Changelog](./docs/CHANGELOG.md)** - Version history
- **[Deployment Guide](./docs/DEPLOYMENT.md)** - How to deploy
- **[Layout Guide](./docs/LAYOUT-GUIDE.md)** - Design guidelines
- **[Checklist](./docs/CHECKLIST.md)** - Development tasks

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Variables
- **JavaScript (Vanilla)** - Pure JS with Intersection Observer API
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts (Poppins)** - Typography with display=swap

### Backend & Services
- **Firebase Hosting** - Deployment and hosting
- **Firebase Functions** - Serverless backend (TypeScript)
- **Firebase Firestore** - NoSQL database
- **Firebase Storage** - File storage
- **Firebase Data Connect** - GraphQL API

### Development Tools
- **TypeScript** - Type-safe backend code
- **Node.js** - Runtime for functions
- **Git** - Version control
- **VS Code** - Code editor

## 🎯 Portfolio Projects

### 1. Cancer Detection Application (August 2024)
- Machine Learning powered Android app
- Technologies: Kotlin, Android SDK, TensorFlow, REST API
- Medical APIs integration for diagnosis

### 2. Lomath Educational Platform (April - July 2024)
- Formula library with interactive quizzes
- Technologies: PHP, MySQL, Bootstrap, JavaScript
- Admin CMS for content management

### 3. SMPN 3 Tambun Utara Website (April - June 2024)
- Official school website
- Technologies: HTML5, CSS3, JavaScript, API Integration
- Responsive design optimized for all devices

### 4. Client Profile Website (June 2024) 🔴 LIVE
- Professional profile with course materials
- Technologies: HTML5, CSS3, Bootstrap, JavaScript
- **[View Live Demo](https://cutliza28.000webhostapp.com/)**

### 5. Bakul Recipe Application (June - July 2022)
- Android recipe and culinary articles app
- Technologies: Java, Android Studio, Figma
- UI/UX focused development

### 6. Bakul Website Template (Oct 2021 - Jan 2022)
- Culinary-themed website template
- Technologies: HTML5, CSS3, JavaScript, Figma
- Figma to code translation

## 📊 Project Statistics
- **Total Projects**: 6+
- **Technologies Used**: 8+
- **Success Rate**: 100%
- **Lines of Code**: 10,000+

## 🎨 Design System

### Color Palette
**Light Mode:**
- Primary: `#3b82f6` (Blue)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#ec4899` (Pink)
- Success: `#10b981` (Green)

**Dark Mode:**
- Automatically adapts based on system preference
- Optimized contrast ratios for accessibility

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Base Size**: 16px
- **Scale**: Responsive (14px mobile → 16px desktop)

### Spacing Scale
- XS: `0.5rem` (8px)
- SM: `1rem` (16px)
- MD: `1.5rem` (24px)
- LG: `2rem` (32px)
- XL: `3rem` (48px)
- 2XL: `4rem` (64px)

### Border Radius (Bento Style)
- Small: `0.75rem` (12px)
- Medium: `1rem` (16px)
- Large: `1.5rem` (24px)
- Extra Large: `2rem` (32px)

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/daffautomo23/portofolio-daffautomo.git
cd portofolio-daffautomo
```

2. **Open in browser**
Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

3. **View in browser**
Navigate to `http://localhost:8000`

### Firebase Deployment

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**
```bash
firebase login
```

3. **Deploy**
```bash
# Deploy everything
firebase deploy

# Deploy only hosting
firebase deploy --only hosting

# Deploy only functions
firebase deploy --only functions
```

### Firebase Functions Development

1. **Navigate to functions folder**
```bash
cd functions
```

2. **Install dependencies**
```bash
npm install
```

3. **Run locally**
```bash
npm run serve
```

4. **Build TypeScript**
```bash
npm run build
```

## 🧪 Testing

### Run Firebase Emulators
```bash
firebase emulators:start
```

This will start:
- Hosting: http://localhost:5000
- Functions: http://localhost:5001
- Firestore: http://localhost:8080
- Firestore UI: http://localhost:4000

## ✏️ Customization Guide

### Update Personal Information
Edit `index.html`:
- Hero section: Update name, title, description
- About section: Modify summary
- Skills section: Add/remove technology tags
- Contact section: Update social media links

### Add New Project
1. Create new HTML file in `pages/projects/`
2. Copy structure from existing project page
3. Update content with project details
4. Add project card to `pages/all-projects.html`
5. Optionally add to featured projects in `index.html`

### Change Color Theme
Edit `assets/css/styles.css`:
```css
:root {
  --accent-primary: #your-color;
  --accent-secondary: #your-color;
  /* Update other variables as needed */
}
```

### Add New Page
1. Create HTML file in `pages/` folder
2. Include necessary CSS and JS files
3. Follow existing structure for consistency
4. Update navigation links if needed

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) { ... }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { ... }

/* Desktop */
@media (min-width: 1025px) { ... }
```

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Optimizations

- Resource hints (preconnect, dns-prefetch)
- Async CSS loading with fallback
- Deferred JavaScript execution
- Font display swap for better LCP
- Intersection Observer for scroll animations
- Efficient CSS with variables
- Minimal dependencies

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Daffa Utomo**
- GitHub: [@daffautomo23](https://github.com/daffautomo23)
- Portfolio: [Live Demo](https://your-domain.web.app)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📞 Contact

For any questions or inquiries, please reach out through:
- Email: [Your Email]
- LinkedIn: [Your LinkedIn]
- Instagram: [Your Instagram]

---

**Made with ❤️ by Daffa Utomo**

Last Updated: December 27, 2025

### Mobile Features
- Hamburger menu dengan animasi
- Touch-friendly buttons
- Optimized spacing untuk layar kecil
- Full-width cards pada mobile

## 🔒 Security

- Form validation
- Secure links dengan rel="noopener noreferrer" untuk external links
- No inline JavaScript untuk keamanan
- Firebase Hosting dengan SSL otomatis

## 📊 Performance

- Lazy loading untuk gambar (jika ditambahkan)
- CSS minification untuk production
- Efficient animations dengan CSS transforms
- Optimized font loading

## 🌐 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Opera (Latest)

## 📞 Contact

Untuk pertanyaan atau kolaborasi, hubungi melalui:
- Email: your.email@example.com
- LinkedIn: [Your Profile]
- GitHub: [Your Profile]

## 📄 License

© 2025 Daffa Utomo. All rights reserved.

## 🙏 Acknowledgments

- Font Awesome untuk icon library
- Google Fonts untuk typography
- Firebase untuk hosting
- Community untuk inspirasi design

---

**Built with 💙 by Daffa Utomo**

*Software Engineer | Odoo Specialist | Laravel Developer*
