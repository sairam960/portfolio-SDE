# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 15 and TypeScript
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚡ Optimized for performance
- 🔧 GitHub Actions CI/CD
- 📦 Deployed to GitHub Pages

## Sections

- **Hero** - Personal introduction with call-to-action buttons
- **Projects** - Showcase of featured projects with technologies used
- **Experience** - Professional work history timeline
- **Skills** - Technical skills and proficiencies
- **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/username/portfolio-sde.git
cd portfolio-sde
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change name and title
   - Update avatar/initials
   - Modify introduction text

2. **Projects** (`src/lib/data.ts`):
   - Add your projects to the `projects` array
   - Include project descriptions, technologies, and links

3. **Experience** (`src/lib/data.ts`):
   - Update the `experiences` array with your work history
   - Add company names, positions, and descriptions

4. **Skills** (`src/lib/data.ts`):
   - Modify the `skills` array with your technical skills
   - Organize by categories (Frontend, Backend, etc.)

5. **Contact** (`src/components/Contact.tsx`):
   - Update contact information
   - Add your social media links

### Styling

The project uses Tailwind CSS for styling. Key color scheme:
- Primary: Blue (blue-600)
- Secondary: Purple (purple-600)
- Background: Gradient from slate to blue

## Deployment

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Set source to "GitHub Actions"
4. Push to the `main` branch to trigger deployment

### Manual Deployment

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Project Structure

```
portfolio-sde/
├── .github/workflows/    # GitHub Actions
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   ├── lib/           # Data and utilities
│   └── types/         # TypeScript types
├── tailwind.config.js  # Tailwind configuration
├── next.config.js     # Next.js configuration
└── package.json       # Dependencies
```

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).