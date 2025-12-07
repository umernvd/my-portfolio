# Muhammad Umer Naveed - Portfolio Website

Personal portfolio website showcasing my skills, projects, and experience as a Software Engineer.

## 🚀 Live Demo
**[View Portfolio](https://umer-naveed.vercel.app/)**

## 🛠️ Built With
- **React 19.2.1** - UI library
- **TypeScript** - Type safety
- **Vite 6.2.0** - Build tool & dev server
- **Tailwind CSS** - Styling (via CDN)
- **Lucide React** - Icon library

## 📋 Features
- ✨ Responsive design for all devices
- 🌓 Dark mode support (system preference + manual toggle)
- 🎨 Smooth scroll animations with Intersection Observer
- 🔍 SEO optimized with comprehensive meta tags
- 📧 Contact form with submission handling
- 💼 Project showcase with external GitHub links
- 🛠️ Skills categorization with technology icons
- ⚡ Fast loading with optimized production builds
- 🎯 Error boundaries for graceful error handling

## 🏃‍♂️ Running Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/umernvd/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open browser to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

Production files will be in `/dist` directory.

Preview production build:
```bash
npm run preview
```

## 📁 Project Structure
```
/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation with dark mode toggle
│   ├── Hero.tsx        # Hero section with intro
│   ├── Skills.tsx      # Technical skills showcase
│   ├── Projects.tsx    # Featured projects
│   ├── Experience.tsx  # Work experience timeline
│   ├── Education.tsx   # Educational background
│   ├── Certifications.tsx  # Professional certifications
│   ├── Footer.tsx      # Contact form and footer
│   └── RevealOnScroll.tsx  # Scroll animation wrapper
├── hooks/              # Custom React hooks
├── public/             # Static assets (favicons, icons)
├── data.ts             # Portfolio content data
├── types.ts            # TypeScript interfaces
├── App.tsx             # Main app component
├── index.tsx           # App entry point
├── index.html          # HTML template
└── index.css           # Global styles
```

## 🎨 Customization

### Update Portfolio Content
Edit `data.ts` to modify:
- Personal information (name, email, phone, location)
- Skills (categorized by Frontend, Backend, Tools, Languages)
- Projects (title, description, tech stack, links)
- Work experience
- Education details
- Certifications

### Modify Styling
Theme colors are defined in `index.html` Tailwind config:
- **Primary Color**: `#556b2f` (Olive Green)
- **Beige Accent**: `#f3e9d2`
- **Dark Background**: `#1a2015`

To customize, update the Tailwind configuration in the `<script>` section of `index.html`.

## 🚀 Deployment

This project is optimized for deployment on:
- **Vercel** (Recommended - Zero config)
- **Netlify**
- **GitHub Pages**

### Deploy to Vercel
1. Push your code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Vercel auto-detects Vite configuration
4. Deploy! ✨

### Deploy to Netlify
1. Create `netlify.toml` in root:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```
2. Connect repository to Netlify
3. Deploy!

## 📝 License
This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact
**Muhammad Umer Naveed**
- 📧 Email: [muhammadumernaveed1234@gmail.com](mailto:muhammadumernaveed1234@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/umer-naveed](https://linkedin.com/in/umer-naveed)
- 🐙 GitHub: [github.com/umernvd](https://github.com/umernvd)
- 📍 Location: Lahore, Pakistan

---

⭐ If you like this project, please consider giving it a star on GitHub!

