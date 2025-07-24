# Palm Mystic - Replit Development Guide

## Overview

Palm Mystic is a modern web application that provides palm reading services through image analysis. The app allows users to upload photos of their palms and receive detailed mystical interpretations based on traditional palmistry principles. It features a full-stack architecture with a React frontend, Express backend, and PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite for bundling and development
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: shadcn/ui components with Tailwind CSS for styling
- **State Management**: TanStack Query for server state management
- **Internationalization**: i18next for multi-language support (Korean, English, Chinese, Japanese)

### Directory Structure
```
├── client/              # Frontend React application
├── server/              # Backend Express server
├── shared/              # Shared types and schemas
├── migrations/          # Database migration files
└── attached_assets/     # Static assets
```

## Key Components

### Frontend Architecture
- **React Router**: Uses wouter for lightweight client-side routing
- **Component Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom mystical color palette
- **Theme System**: Dark/light mode support with CSS variables
- **File Upload**: Drag-and-drop interface with react-dropzone
- **Responsive Design**: Mobile-first approach with custom breakpoints

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **File Processing**: Multer for handling image uploads with memory storage
- **Palm Analysis**: Simulated palm reading analysis based on traditional palmistry
- **Session Management**: Session-based tracking for palm readings
- **Storage Layer**: Abstracted storage interface with in-memory implementation

### Database Schema
- **Users Table**: Basic user authentication (username, password)
- **Palm Readings Table**: Stores uploaded images, analysis results, and session data
- **Type Safety**: Drizzle ORM with Zod validation for runtime type checking

## Data Flow

1. **Image Upload**: User uploads palm image via drag-and-drop interface
2. **Analysis Processing**: Server receives image, generates session ID, performs analysis
3. **Result Generation**: Palm analysis creates detailed reading based on traditional palmistry
4. **Data Persistence**: Reading results stored in database with session tracking
5. **Result Display**: Frontend displays comprehensive palm reading with sharing options

### Analysis Categories
- Overall reading and life outlook
- Love life and relationship patterns
- Career and professional prospects
- Health and vitality indicators
- Personality traits and characteristics
- Individual palm line interpretations (heart, head, life, fate lines)

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **react-dropzone**: File upload functionality
- **i18next**: Internationalization framework
- **multer**: File upload middleware
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **drizzle-kit**: Database migration tool
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- **Vite Dev Server**: Hot module replacement for frontend development
- **Express Server**: Runs on development mode with detailed logging
- **Database**: Uses environment variable `DATABASE_URL` for PostgreSQL connection
- **File Storage**: In-memory storage for development (easily replaceable with persistent storage)

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database Migrations**: Drizzle Kit handles schema migrations
- **Environment Variables**: Requires `DATABASE_URL` for database connectivity
- **Deployment Type**: **Autoscale** (not Static) - required for fullstack app with image upload and API functionality

### Key Configuration Files
- **vite.config.ts**: Frontend build configuration with path aliases
- **drizzle.config.ts**: Database configuration and migration setup
- **tsconfig.json**: TypeScript configuration for monorepo structure
- **tailwind.config.ts**: Styling configuration with custom theme

### Scaling Considerations
- Storage layer is abstracted and can be easily replaced with cloud storage
- Database schema supports horizontal scaling
- Static assets can be served from CDN
- API endpoints are stateless and can be load balanced

The application is designed for easy deployment on Replit with minimal configuration while maintaining the flexibility to scale to cloud providers when needed.