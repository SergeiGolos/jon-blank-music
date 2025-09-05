# Jon Blanck Music 🎷

A modern, fast-loading professional website for Jon Blanck - chart-topping jazz saxophonist, versatile keyboardist, composer, and dedicated music educator. Built with Qwik for optimal performance and user experience.

## About Jon Blanck

Jon Blanck is a highly accomplished musician based in Seymour, CT, whose career spans multiple genres and roles:

- **Chart-topping Recording Artist**: Music Director for the Verve Jazz Ensemble with albums reaching #1, #5, #6, and #8 on USA jazz radio play charts
- **Multi-Genre Performer**: Experience across jazz, funk, classical, and commercial music with artists like P-Funk Allstars, New Haven Symphony Orchestra, and more
- **Dedicated Educator**: Comprehensive music instruction in saxophone, piano, music theory, improvisation, and modern production techniques
- **Session Musician**: Appeared on over 40 albums and recorded for networks including PBS

## Features

- 🎵 **Professional Portfolio**: Showcase of recordings, performances, and achievements
- 📚 **Music Education Hub**: Lesson offerings, scheduling, and educational resources
- 🚀 **High Performance**: Lightning-fast loading with Qwik framework and optimal SEO
- 📱 **Responsive Design**: Beautiful experience across all devices
- 🎨 **Modern UI**: Clean, professional design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18.17.0 or higher)
- npm or yarn package manager

### Installation and Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SergeiGolos/jon-blank-music.git
   cd jon-blank-music
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This generates static files in the `dist/` directory optimized for deployment.

## Project Structure

```
├── .blackboard/               # Project specifications and design docs
├── .ground/                   # Project-wide standards and content sources
├── .instructions/             # Development agent instructions
├── public/                    # Static assets (images, icons, etc.)
├── src/
│   ├── components/
│   │   └── sections/          # Page section components
│   ├── routes/
│   │   └── index.tsx          # Main homepage
│   ├── assets/                # Shared assets
│   └── global.css             # Global styles
├── server/                    # SSR build output
├── dist/                      # Production build output
├── package.json
├── vite.config.ts
└── README.md
```

## Development Commands

### Core Development

- `npm run dev` - Start development server with hot reload at http://localhost:5173
- `npm run build` - Build optimized production version
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code quality checks
- `npm run fmt` - Format code with Prettier

### Build Details

- `npm run build.client` - Build client-side bundle
- `npm run build.server` - Build server-side rendering bundle
- `npm run build.types` - Type-check TypeScript without emitting files

## Customizing Content

### Key Files to Modify

#### 1. Biographical Content

- **File**: `.ground/jon-blank-bio.md`
- **Purpose**: Central source of truth for Jon's professional biography
- **Updates**: Modify this file to update career highlights, achievements, and background information

#### 2. Product Information

- **File**: `.ground/product.md`
- **Purpose**: Defines the website's vision, target users, and success metrics
- **Updates**: Adjust vision statements, user personas, and success criteria

#### 3. Homepage Sections

- **File**: `src/routes/index.tsx`
- **Purpose**: Main page layout and section organization
- **Updates**: Add/remove sections, modify navigation, adjust meta tags

#### 4. Individual Components

- **Location**: `src/components/sections/`
- **Key Components**:
  - `hero-section.tsx` - Main introduction and call-to-action
  - `music-section.tsx` - Albums, videos, and streaming links
  - `lessons-section.tsx` - Educational offerings and scheduling
  - `contact-section.tsx` - Contact information and forms
  - `footer.tsx` - Site footer with location and copyright

### Updating Dynamic Content

#### Chart Albums

- **File**: Create/modify data files as needed for chart information
- **Component**: `src/components/sections/music/chart-albums.tsx`
- **Updates**: Add new albums, update chart positions, modify streaming links

#### Video Performances

- **Location**: Video data is embedded in components
- **Updates**: Modify video URLs, titles, and descriptions in the music section components

#### Lesson Information

- **Component**: `src/components/sections/lessons-section.tsx`
- **Updates**: Modify lesson types, pricing, availability, and scheduling information

### Styling and Branding

- **Global Styles**: `src/global.css`
- **Component Styles**: Tailwind CSS classes within component files
- **Colors**: Modify the gradient backgrounds and color scheme in components
- **Typography**: Adjust font classes and text styling

### Assets

- **Location**: `public/` directory
- **Add**: Photos, album covers, icons, and other media
- **Reference**: Use `/filename.ext` in components to reference public assets

## Deployment

### Automatic GitHub Pages Deployment

The repository includes GitHub Actions workflow for automatic deployment:

1. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. **Deploy on push to main:**

   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

3. **Check deployment status** in the Actions tab
4. **Site will be live** at: `https://SergeiGolos.github.io/jon-blank-music`

### Manual Deployment

The built static files in `dist/` can be deployed to any static hosting service:

- Netlify
- Vercel
- AWS S3
- Traditional web hosting

## Technical Architecture

- **Framework**: Qwik for optimal performance and resumability
- **Styling**: Tailwind CSS for rapid, consistent styling
- **TypeScript**: Full type safety and developer experience
- **Static Generation**: Pre-rendered for fast loading and SEO
- **Responsive**: Mobile-first design approach

## Content Management Philosophy

This site follows a "content-as-code" approach where:

- All content is version-controlled and reviewable
- Changes are deployed through standard development workflows
- Content updates benefit from the same quality controls as code
- The `.ground/` directory serves as the single source of truth for biographical and product information

## Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/update-content`
3. **Make your changes** following the file structure above
4. **Test locally**: `npm run dev` to verify changes
5. **Build and verify**: `npm run build` to ensure production build works
6. **Submit a pull request** with clear description of changes

## Support and Resources

### Qwik Framework

- [Qwik Documentation](https://qwik.dev/)
- [Qwik City Guide](https://qwik.dev/qwikcity/overview/)

### Styling and Design

- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Tailwind Component Examples](https://tailwindui.com/)

### Development Tools

- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Built with ❤️ using Qwik, TypeScript, and Tailwind CSS

© 2024 Jon Blanck Music. Professional musician and educator based in Seymour, CT.
