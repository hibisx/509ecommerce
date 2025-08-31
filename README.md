# 509 E-Commerce

A modern e-commerce application built with Next.js, TypeScript, and a comprehensive tech stack.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth (configured for future use)
- **State Management**: Zustand
- **Linting**: ESLint

## Features

- 🛍️ Product catalog with Nike items
- 📱 Responsive design with TailwindCSS
- 🗄️ PostgreSQL database with Drizzle ORM
- 🔄 State management with Zustand
- 🎨 Modern UI components
- 🔍 Product search and filtering (ready for implementation)
- 🛒 Shopping cart functionality (ready for implementation)

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (Neon recommended)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your database URL:
   ```
   DATABASE_URL="your-neon-postgresql-url"
   ```

4. Generate and push database schema:
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. Seed the database with sample Nike products:
   ```bash
   npm run db:seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Drizzle Studio
- `npm run db:seed` - Seed database with sample data

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   ├── ProductCard.tsx
│   └── ProductGrid.tsx
├── db/                 # Database configuration
│   ├── index.ts        # Database connection
│   ├── schema.ts       # Database schema
│   └── seed.ts         # Seed data
├── lib/                # Utility libraries
│   └── auth.ts         # Better Auth configuration
└── store/              # Zustand stores
    └── products.ts     # Product state management
```

## Database Schema

The application includes a `products` table with the following fields:
- `id` - Primary key
- `name` - Product name
- `description` - Product description
- `price` - Product price
- `image` - Product image URL
- `category` - Product category
- `brand` - Product brand (defaults to Nike)
- `size` - Product size
- `color` - Product color
- `stock` - Available stock
- `createdAt` - Creation timestamp
- `updatedAt` - Update timestamp

## Future Enhancements

- User authentication with Better Auth
- Shopping cart functionality
- Order management
- Payment integration
- Product reviews and ratings
- Admin dashboard
- Search and filtering
- Wishlist functionality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the ISC License.