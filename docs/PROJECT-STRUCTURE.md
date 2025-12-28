# Project Structure Documentation

## Complete Directory Structure

```
portofolio-daffautomo/
│
├── assets/                          # Static Assets
│   ├── css/
│   │   └── styles.css              # Main stylesheet (1346+ lines)
│   ├── js/
│   │   └── main.js                 # JavaScript with Intersection Observer
│   └── images/                     # Image assets (if any)
│
├── pages/                          # Additional Pages
│   ├── all-projects.html           # Project showcase page (6 projects)
│   └── projects/                   # Individual project detail pages
│       ├── cancer-detection.html   # Cancer Detection ML App
│       ├── lomath.html             # Lomath Educational Platform
│       ├── smpn3-website.html      # SMPN 3 School Website
│       ├── profile-website.html    # Client Profile Website (with live demo)
│       ├── bakul-application.html  # Bakul Recipe Android App
│       └── bakul-website.html      # Bakul Website Template
│
├── docs/                           # Documentation (THIS FOLDER)
│   ├── README.md                   # Documentation index
│   └── PROJECT-STRUCTURE.md        # This file
│
├── functions/                      # Firebase Cloud Functions
│   ├── src/
│   │   ├── index.ts               # Functions entry point
│   │   └── genkit-sample.ts       # Genkit sample code
│   ├── package.json               # Node dependencies
│   └── tsconfig.json              # TypeScript configuration
│
├── dataconnect/                    # Firebase Data Connect
│   ├── schema/
│   │   └── schema.gql             # GraphQL schema
│   ├── example/
│   │   ├── connector.yaml
│   │   ├── queries.gql
│   │   └── mutations.gql
│   ├── dataconnect.yaml           # Data Connect config
│   └── seed_data.gql              # Sample data
│
├── .firebase/                      # Firebase local cache
├── .git/                          # Git repository
│
├── index.html                      # Main landing page
├── 404.html                        # Custom 404 error page
│
├── firebase.json                   # Firebase hosting configuration
├── firestore.rules                # Firestore security rules
├── firestore.indexes.json         # Firestore indexes
├── storage.rules                  # Firebase Storage rules
│
├── .firebaserc                    # Firebase project config
├── .gitignore                     # Git ignore rules
└── README.md                      # Main project README

```

## Assets Structure

### CSS Architecture
- **styles.css** (1346+ lines)
  - CSS Variables for theming (light/dark mode)
  - Bento-style border radius design
  - Responsive breakpoints
  - Animation classes with Intersection Observer
  - Component styles (buttons, cards, navigation)
  - Detail page specific styles

### JavaScript
- **main.js**
  - Intersection Observer for scroll animations
  - Smooth scrolling behavior
  - Mobile menu toggle
  - Scroll reveal animations

## Pages Structure

### Main Pages
1. **index.html** - Portfolio landing page
   - Hero section
   - About section
   - Skills section
   - Experience section
   - Projects section (3 featured)
   - Contact section

2. **all-projects.html** - Complete project showcase
   - 6 project cards
   - Statistics section
   - Technology overview
   - Call to action

### Project Detail Pages
Each project has a dedicated detail page with:
- Header navigation (Back to Projects, Home, View Project)
- Project overview
- Key features/responsibilities
- Technical stack
- Results/highlights
- Footer navigation

## Configuration Files

### Firebase Configuration
- **firebase.json** - Hosting, functions, and service configuration
- **firestore.rules** - Database security rules
- **firestore.indexes.json** - Query optimization indexes
- **storage.rules** - File storage security rules

### Development Configuration
- **package.json** (in functions/) - Node.js dependencies
- **tsconfig.json** - TypeScript compiler options
- **.firebaserc** - Firebase project aliases
- **.gitignore** - Files to exclude from version control

## Key Features

### Performance Optimizations
- Preconnect to external resources
- DNS prefetch for fonts and CDNs
- Async CSS loading
- Deferred JavaScript execution
- Font display swap

### Animations
- Scroll-triggered with Intersection Observer (15% threshold)
- Smooth transitions (0.6s ease-out)
- Disabled loading animations (replaced with scroll-based)

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px
- Flexible grid layouts
- Touch-friendly navigation

## Project Statistics
- **Total Projects**: 6
- **Technologies Used**: 8+
- **Success Rate**: 100%
- **Lines of CSS**: 1346+
- **Detail Pages**: 6

## Navigation Flow

```
index.html
    ↓
    → all-projects.html
         ↓
         → cancer-detection.html
         → lomath.html
         → smpn3-website.html
         → profile-website.html (with live demo)
         → bakul-application.html
         → bakul-website.html
```

## File Naming Conventions

- **HTML Files**: lowercase with hyphens (kebab-case)
  - Example: `all-projects.html`, `cancer-detection.html`
  
- **CSS Classes**: lowercase with hyphens
  - Example: `.detail-nav`, `.btn-primary`, `.experience-card`
  
- **JavaScript Functions**: camelCase
  - Example: `initScrollAnimations()`, `setupMobileMenu()`

## Design System

### Colors
- **Primary**: #3b82f6 (Blue)
- **Secondary**: #8b5cf6 (Purple)
- **Accent**: #ec4899 (Pink)
- **Success**: #10b981 (Green)

### Border Radius (Bento Style)
- Small: 0.75rem
- Medium: 1rem
- Large: 1.5rem
- Extra Large: 2rem

### Spacing Scale
- XS: 0.5rem
- SM: 1rem
- MD: 1.5rem
- LG: 2rem
- XL: 3rem
- 2XL: 4rem

---

**Note**: This structure is designed to be scalable, maintainable, and professional. All paths are relative and work correctly across the entire project.

Last Updated: December 27, 2025
