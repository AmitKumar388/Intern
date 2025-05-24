# Chat Application Architecture Guide

## Overview

This is a full-stack chat application built with React, Express, and Drizzle ORM. The application follows a modern web architecture with a client-server pattern, real-time messaging capabilities, and a clean UI using shadcn/ui components. The application is designed to be deployed on Replit with PostgreSQL integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **State Management**: React Context API for application state (ChatContext)
- **Styling**: Tailwind CSS with custom theme variables
- **UI Components**: shadcn/ui component library (built on Radix UI primitives)
- **Client-Side Routing**: wouter (lightweight alternative to react-router)
- **API Communication**: TanStack Query (React Query) for data fetching and caching
- **Theme System**: Light/dark mode support with persistent preferences

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured in .replit modules but not yet implemented)
- **API Structure**: RESTful API endpoints with `/api` prefix
- **Authentication**: Session-based authentication (not fully implemented yet)

### Data Layer
- **Schema Management**: Defined in `shared/schema.ts` using Drizzle's schema definition
- **Validation**: Using zod for schema validation
- **Data Access**: Storage interface in `server/storage.ts` with both in-memory and database implementations

## Key Components

### Frontend Components
1. **Page Structure**:
   - `ChatPage`: Main page containing the chat interface
   - `NotFound`: Error page for invalid routes

2. **Chat Interface**:
   - `Sidebar`: Displays conversations and navigation
   - `ChatArea`: Shows message history
   - `InputArea`: Message composition area
   - `AiPanel`: AI-powered assistant panel

3. **UI Components**:
   - Comprehensive UI kit from shadcn including buttons, modals, toast notifications, etc.
   - Custom avatar component for user display
   - Message bubbles with formatting and timestamps

### Backend Components
1. **Server Setup**:
   - Express server with middleware configuration
   - Route registration system
   - Vite development integration

2. **Storage Layer**:
   - Interface-based design for data access
   - Current in-memory implementation
   - Prepared for PostgreSQL integration

3. **API Structure**:
   - Routes for user management
   - Message handling endpoints (to be implemented)
   - Authentication endpoints (to be implemented)

## Data Flow

1. **Authentication Flow**:
   - User registration/login via API endpoints
   - Session storage in database
   - Client-side auth state management

2. **Messaging Flow**:
   - User composes message in `InputArea`
   - Message sent to server via API
   - Server persists message in database
   - Server sends message to recipients
   - Recipients receive message in `ChatArea`

3. **Conversation Management**:
   - Create/retrieve conversations via API
   - Conversations displayed in `Sidebar`
   - Select conversation to view message history

## External Dependencies

### Frontend Dependencies
- **@radix-ui/***: Headless UI components
- **@tanstack/react-query**: Data fetching and caching
- **class-variance-authority**: Component variant management
- **clsx/tailwind-merge**: CSS class management utilities
- **wouter**: Client-side routing
- **date-fns**: Date formatting utilities

### Backend Dependencies
- **drizzle-orm**: Database ORM
- **@neondatabase/serverless**: PostgreSQL client (for Neon DB)
- **express**: Web server framework
- **zod**: Schema validation

## Deployment Strategy

The application is configured for deployment on Replit with the following workflow:

1. **Development**:
   - Run `npm run dev` to start development server with hot-reloading
   - Vite handles frontend bundling and HMR
   - Express server runs in middleware mode

2. **Production Build**:
   - `npm run build` creates optimized frontend assets with Vite
   - Backend code is bundled with esbuild
   - Output is placed in `/dist` directory

3. **Production Deployment**:
   - Static assets served from `/dist/public`
   - Express server runs from `/dist/index.js`
   - Environment variables configured in Replit Secrets
   - PostgreSQL provisioned through Replit's DB module

## Initial Development Tasks

1. Complete the user authentication flow:
   - Implement `/api/auth/register` and `/api/auth/login` endpoints
   - Connect Drizzle ORM with PostgreSQL
   - Add password hashing and session management

2. Implement chat functionality:
   - Create database schema for messages and conversations
   - Add API endpoints for sending/receiving messages
   - Implement real-time updates (possibly with WebSockets)

3. Connect frontend and backend:
   - Set up React Query hooks for API interaction
   - Implement form handling for user input
   - Add error handling and loading states

## Database Schema Planning

The initial database schema includes:

1. **Users Table**:
   - id (primary key)
   - username (unique)
   - password (hashed)

Future schema additions should include:

2. **Conversations Table**:
   - id (primary key)
   - title
   - created_at
   - updated_at

3. **Messages Table**:
   - id (primary key)
   - conversation_id (foreign key)
   - sender_id (foreign key)
   - content
   - created_at