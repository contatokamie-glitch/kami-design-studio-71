# Kamiê - Fashion E-commerce Landing Page

## Overview

Kamiê is a Brazilian fashion e-commerce landing page focused on sustainable, culturally-inspired clothing with Northeastern Brazilian heritage. The project is a single-page marketing website built with React, TypeScript, and modern frontend tooling. It showcases the brand story, product categories, and value propositions with an elegant, editorial design aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS with custom design tokens for brand colors (stone, terracotta) and typography (Playfair Display for headings, Inter for body)
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **State Management**: TanStack React Query for server state (currently minimal usage)
- **Routing**: React Router DOM with simple page-based routing

### Design System
- Custom CSS variables defined in `src/index.css` for consistent theming
- Brand-specific color palette: warm stones, terracotta accents
- Typography scale using custom font families imported from Google Fonts
- Utility classes extended in Tailwind config for brand-specific styling

### Component Structure
- **Layout Components**: Header (sticky navigation), Footer
- **Section Components**: HeroSection, BrandStorySection, CategoriesSection, HighlightSection, ValuePropsSection
- **UI Components**: Comprehensive shadcn/ui component library in `src/components/ui/`

### Key Design Decisions
1. **Single Page Application**: Currently a landing page with minimal routing (Index and NotFound pages only)
2. **Component-first approach**: All UI elements are modular, reusable components
3. **CSS Variables for theming**: Enables easy theme customization and dark mode support
4. **Radix UI primitives**: Ensures accessibility compliance out of the box

## External Dependencies

### UI & Styling
- **Radix UI**: Complete suite of accessible UI primitives (dialog, dropdown, tabs, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: For component variant management
- **Lucide React**: Icon library

### Functionality
- **React Router DOM**: Client-side routing
- **TanStack React Query**: Async state management (prepared for future API integration)
- **react-hook-form + zod**: Form handling and validation (available but not heavily used yet)
- **date-fns**: Date manipulation utilities
- **embla-carousel-react**: Carousel/slider functionality

### Development Tools
- **Vite**: Build tool and dev server (runs on port 5000)
- **TypeScript**: Type safety with relaxed strict mode settings
- **ESLint**: Code linting with React-specific rules
- **lovable-tagger**: Development component tagging (Lovable.dev integration)

### Third-Party Services
- **Lovable.dev**: Project management and deployment platform (indicated by lovable-tagger integration)
- **Google Fonts**: External font loading for Playfair Display and Inter typefaces

### Notes for Future Development
- No backend or database currently implemented
- No authentication system in place
- E-commerce functionality (cart, checkout, payments) not yet implemented
- Content is static; no CMS integration