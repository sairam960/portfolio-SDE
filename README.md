# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Built with Next.js 15 and TypeScript
- Styled with Tailwind CSS
- Fully responsive design
- GitHub Actions CI/CD
- Deployed to GitHub Pages

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

### Installations 

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint


## Deployment

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Set source to "GitHub Actions"
4. Push to the `main` branch to trigger deployment


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

## License

This project is open source and available under the [MIT License](LICENSE).
