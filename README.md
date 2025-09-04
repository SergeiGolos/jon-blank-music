# Copilot Do Qwik ⚡️

A Qwik City application template integrated with GitHub Copilot agents for streamlined development workflows. This project demonstrates how to use Copilot to manage development tasks through GitHub issues and automatically deploy to GitHub Pages.

## Features

- 🚀 **Qwik Framework**: Lightning-fast web applications with resumable components
- 🤖 **Copilot Agents**: Specialized AI agents for different development tasks
- 📄 **GitHub Pages**: Automatic deployment with GitHub Actions
- 🎨 **Tailwind CSS**: Modern styling with utility-first CSS framework
- ⭐ **Star Repo Link**: Corner sticker linking back to the repository

## Quick Start

### Clone and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SergeiGolos/copilot-do-qwik.git
   cd copilot-do-qwik
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

## Using Copilot Agents

This template includes specialized Copilot agents that help with different aspects of development. Each agent has specific instructions and can be invoked through GitHub issues.

### Available Agents

- **write-code**: Implement small, safe code changes per existing design
- **debug-code**: Reproduce, isolate, fix bugs and add regression tests
- **design**: Turn requirements into technical design and documentation
- **plan**: Break features into atomic, testable tasks
- **design-test**: Produce testing plans and strategies
- **review-code**: Review code changes for correctness and quality
- **research**: Deep-dive on questions and gather findings
- **bootstrap**: Create foundational documentation
- **draw**: Visualize architecture and relationships
- **journal**: Generate external documentation and summaries
- **catalog**: Maintain library summaries

### How to Use Agents

1. **Create a GitHub Issue** in your repository
2. **Add a System Prompt** section at the top of the issue body:
   ```
   - agent=<agent-key>
   - instruction_file=.instructions/__<agent-key>.md
   ```
3. **Describe your task** in the issue body
4. **Copilot will process** the issue using the specified agent

Example for writing code:
```
- agent=write-code
- instruction_file=.instructions/__write-code.md

Please implement a new user authentication component with the following requirements...
```

## Project Structure

```
├── .github/
│   ├── workflows/
│   │   └── deploy.yml          # GitHub Pages deployment workflow
│   └── copilot-instructions.md # Agent instructions
├── .instructions/              # Agent-specific instruction files
├── public/                     # Static assets
├── src/
│   ├── components/             # Reusable components
│   ├── routes/                 # Page routes
│   └── ...
├── package.json
├── vite.config.ts              # Vite configuration with static adapter
└── README.md
```

## Development

### Available Scripts

- `npm run dev` - Start development server with SSR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run fmt` - Format code with Prettier

### Building for Production

The project is configured with Qwik's static adapter for GitHub Pages deployment:

```bash
npm run build
```

This generates static files in the `dist/` directory.

## Deployment to GitHub Pages

### Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your application to GitHub Pages on every push to the `main` branch.

### Setup Steps

1. **Enable GitHub Pages** in your repository:
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

3. **Wait for deployment**:
   - The workflow will run automatically
   - Check the Actions tab for build status
   - Your site will be available at: `https://<username>.github.io/<repository-name>`

### Manual Deployment

If you need to deploy manually:

1. Build the project: `npm run build`
2. The static files will be in the `dist/` directory
3. You can deploy the `dist/` folder to any static hosting service

## Customization

### Modifying the Copilot Agents

- Agent instructions are stored in `.instructions/` directory
- Each agent has its own `.md` file with specific guidelines
- Modify these files to customize agent behavior for your project

### Styling

- Uses Tailwind CSS for styling
- Global styles in `src/global.css`
- Component-specific styles can be added inline or via CSS modules

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## Resources

- [Qwik Documentation](https://qwik.dev/)
- [Qwik City Guide](https://qwik.dev/qwikcity/overview/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)

---

Built with ❤️ using Qwik and GitHub Copilot

## Static Site Generator (Node.js)

Be sure to configure your server to serve very long cache headers for the `build/**/*.js` files.

Typically you'd set the `Cache-Control` header for those files to `public, max-age=31536000, immutable`.

```shell
npm run build.server
```
