# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 SaaS starter template using the App Router. It's designed to be a minimal, clean starting point for building SaaS landing pages with essential features only.

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** (with `strict: false` in tsconfig)
- **Tailwind CSS** for styling with class-based dark mode
- **next-themes** for theme switching (dark mode enabled by default)
- **react-icons** for icon components (specifically `react-icons/ai` for theme toggle)
- **Inter Tight** font from Google Fonts

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

The project uses a flat component architecture:

- `app/` - Next.js App Router files
  - `layout.tsx` - Root layout with ThemeProvider and font configuration
  - `page.tsx` - Main landing page assembling all components
- `components/` - All React components (flat structure, no subdirectories)
- `styles/` - Global CSS files
- `public/` - Static assets including product images

## Key Architecture Patterns

### Path Aliases

TypeScript is configured with path aliases for cleaner imports:
- `components/*` maps to `./components/*`
- `styles/*` maps to `./styles/*`

Always use these aliases instead of relative imports (e.g., `import Header from "components/Header"` not `import Header from "../components/Header"`).

### Theme Implementation

The app uses a client-server pattern for theming:
- `ThemeProvider` is configured in `app/layout.tsx` with `attribute="class"` and `defaultTheme="dark"`
- `suppressHydrationWarning` is set on the `<html>` tag to prevent hydration mismatches
- Theme toggle component (`components/ThemeSwitch.tsx`) uses the `"use client"` directive and implements a mounted check to prevent hydration issues
- All components use Tailwind's `dark:` variant for dark mode styling

### Component Patterns

- Most components are server components by default
- Client components use `"use client"` directive (e.g., `ThemeSwitch.tsx`)
- Components follow a simple, reusable pattern without complex state management
- The `Section` component is a layout component that accepts `leftHalf` and `rightHalf` props for flexible two-column layouts with responsive reordering

### Styling Conventions

- All styling is done with Tailwind utility classes
- Responsive breakpoints: `sm:`, `md:`, `lg:` prefixes
- Dark mode styling uses `dark:` prefix with class-based mode
- Common pattern: `text-gray-900 dark:text-white` for text colors
- Common pattern: `bg-white dark:bg-black` for backgrounds

## Landing Page Component Flow

The main page (`app/page.tsx`) composes components in this order:
1. Header (navigation and theme toggle)
2. Hero (main headline/CTA)
3. Features (feature cards grid)
4. Section (custom two-column layout with text + phone image)
5. Customers (customer logos or testimonials)
6. Section (custom two-column with Accordion + text)
7. Reviews (customer reviews)
8. Download (app download CTA)
9. Footer

Each section is designed to be easily customizable or replaceable.

## When Adding New Features

- Place new components in the `components/` directory (flat structure)
- Use TypeScript interfaces for props
- Follow the existing dark mode pattern with Tailwind `dark:` variants
- Use path aliases for imports
- Client-side interactivity requires `"use client"` directive
- Keep components simple and composable
