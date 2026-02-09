# WarungHub Folder Structure

## Recommended Project Architecture

```
WarungHub/
├── src/
│   ├── app/                          // Next.js App Router
│   │   ├── layout.tsx                // Root layout
│   │   ├── page.tsx                  // Home page
│   │   ├── globals.css               // Global styles
│   │   ├── favicon.ico               // App icon
│   │   │
│   │   ├── (auth)/                   // Auth pages group
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └── forgot-password/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (dashboard)/              // Dashboard layout group
│   │   │   ├── layout.tsx            // Dashboard wrapper
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── products/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── stores/
│   │   │   │   └── page.tsx
│   │   │   ├── orders/
│   │   │   │   └── page.tsx
│   │   │   ├── analytics/
│   │   │   │   └── page.tsx
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │   │
│   │   ├── marketplace/              // Public marketplace
│   │   │   ├── page.tsx
│   │   │   ├── [storeName]/
│   │   │   │   └── page.tsx
│   │   │   └── products/
│   │   │       ├── page.tsx
│   │   │       └── [id]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── api/                      // API routes
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── register/
│   │   │   │   │   └── route.ts
│   │   │   │   └── logout/
│   │   │   │       └── route.ts
│   │   │   │
│   │   │   ├── products/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts
│   │   │   │
│   │   │   ├── stores/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts
│   │   │   │
│   │   │   ├── orders/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts
│   │   │   │
│   │   │   ├── chat/
│   │   │   │   └── route.ts
│   │   │   │
│   │   │   ├── payments/
│   │   │   │   └── route.ts
│   │   │   │
│   │   │   └── analytics/
│   │   │       └── route.ts
│   │   │
│   │   └── error.tsx                 // Error boundary
│   │
│   ├── components/                   // Reusable components
│   │   ├── ui/                       // Base UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Alert.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   ├── Spinner.tsx
│   │   │   └── Empty.tsx
│   │   │
│   │   ├── business/                 // Business-specific components
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── StoreCard.tsx
│   │   │   ├── StoreHeader.tsx
│   │   │   ├── OrderCard.tsx
│   │   │   ├── OrderList.tsx
│   │   │   ├── UserAvatar.tsx
│   │   │   ├── RatingStars.tsx
│   │   │   ├── PriceDisplay.tsx
│   │   │   ├── ChatBubble.tsx
│   │   │   ├── NotificationBell.tsx
│   │   │   └── ReviewCard.tsx
│   │   │
│   │   └── layout/                   // Layout components
│   │       ├── Navbar.tsx
│   │       ├── Sidebar.tsx
│   │       ├── Footer.tsx
│   │       ├── Header.tsx
│   │       └── Container.tsx
│   │
│   ├── sections/                     // Page sections/templates
│   │   ├── landing/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── FAQ.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── StatsCard.tsx
│   │   │   ├── SalesChart.tsx
│   │   │   ├── RecentOrders.tsx
│   │   │   └── ActivityFeed.tsx
│   │   │
│   │   └── checkout/
│   │       ├── CartSummary.tsx
│   │       ├── PaymentMethod.tsx
│   │       └── DeliveryInfo.tsx
│   │
│   ├── hooks/                        // Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useCart.ts
│   │   ├── useProducts.ts
│   │   ├── useStores.ts
│   │   ├── useOrders.ts
│   │   ├── useChat.ts
│   │   ├── useForm.ts
│   │   ├── useLocalStorage.ts
│   │   ├── usePagination.ts
│   │   ├── useDebounce.ts
│   │   └── useApi.ts
│   │
│   ├── context/                      // React Context
│   │   ├── AuthContext.tsx
│   │   ├── CartContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── NotificationContext.tsx
│   │
│   ├── lib/                          // Utility libraries
│   │   ├── api/
│   │   │   ├── client.ts             // API client instance
│   │   │   ├── auth.ts               // Auth API calls
│   │   │   ├── products.ts           // Products API calls
│   │   │   ├── stores.ts             // Stores API calls
│   │   │   ├── orders.ts             // Orders API calls
│   │   │   ├── chat.ts               // Chat API calls
│   │   │   ├── payments.ts           // Payments API calls
│   │   │   └── analytics.ts          // Analytics API calls
│   │   │
│   │   ├── utils/
│   │   │   ├── format.ts             // Format utilities
│   │   │   ├── validation.ts         // Form validation
│   │   │   ├── constants.ts          // App constants
│   │   │   ├── helpers.ts            // Helper functions
│   │   │   ├── storage.ts            // Local storage helpers
│   │   │   └── error-handler.ts      // Error handling
│   │   │
│   │   ├── supabase.ts               // Supabase client config
│   │   ├── auth.ts                   // Authentication logic
│   │   └── types.ts                  // Global TypeScript types
│   │
│   ├── styles/                       // Global styles
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── animations.css
│   │
│   └── public/                       // Static assets
│       ├── icons/
│       ├── images/
│       ├── logos/
│       └── fonts/
│
├── public/                           // Root static assets
│   ├── favicon.ico
│   ├── manifest.json                 // PWA manifest
│   └── robots.txt
│
├── .env.example                      // Environment variables example
├── .env.local                        // Local environment variables
├── .eslintrc.json                    // ESLint config
├── tsconfig.json                     // TypeScript config
├── tailwind.config.js                // Tailwind CSS config
├── next.config.js                    // Next.js config
├── postcss.config.js                 // PostCSS config
├── package.json                      // Dependencies
├── README.md                         // Project documentation
└── FOLDER_STRUCTURE.md               // This file
```

## Directory Purposes

### `/app` - Next.js App Router
- Contains all page routes and API endpoints
- Uses file-based routing convention
- Supports parallel routes with `(groupName)` convention
- API routes in `/api` folder

### `/components`
- **ui/** - Reusable, generic UI components (Button, Card, Modal, etc)
- **business/** - Business logic components (ProductCard, StoreCard, etc)
- **layout/** - Layout wrapper components (Navbar, Sidebar, Footer)

### `/sections`
- Page section templates combining multiple components
- Organized by feature (landing, dashboard, checkout)
- Complete page blocks ready for composition

### `/hooks`
- Custom React hooks encapsulating logic
- Data fetching, state management, form handling
- Reusable across components

### `/context`
- React Context API for global state
- Auth, cart, theme, notifications

### `/lib`
- **api/** - API client calls organized by feature
- **utils/** - Pure utility functions
- Supabase and authentication configuration
- Global types and constants

### `/styles`
- Global CSS and Tailwind configuration
- CSS variables and animations

### `/public`
- Static assets, PWA manifest, robots.txt

## Best Practices

1. **Component Organization**: Keep components focused and single-responsibility
2. **Separation of Concerns**: Split UI, business logic, and data fetching
3. **Type Safety**: Use TypeScript for type checking
4. **Reusability**: Build composable, generic UI components
5. **Performance**: Lazy load sections, optimize images, use Next.js optimizations
6. **Naming**: Use clear, descriptive names for files and folders
7. **API Routes**: Organize by resource (products, orders, etc)
8. **Environment Variables**: Use `.env.local` for sensitive data
