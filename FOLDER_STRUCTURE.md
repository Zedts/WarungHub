# WarungHub Project Structure

## Current Project Architecture

```
WarungHub/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── fonts/
│   ├── images/
│   ├── icons/
│   └── logos/
├── src/
│   └── main/
│       └── Home.tsx
├── .eslintrc.json
├── .gitignore
├── tsconfig.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
└── FOLDER_STRUCTURE.md
```

## Directory Explanation

### `/app` - Next.js App Router (Entry Point)
- **layout.tsx** - Root layout wrapper
- **page.tsx** - Home page
- **globals.css** - Global CSS styles
- **favicon.ico** - Website icon

### `/src/main`
- **Home.tsx** - Main home component (content entry point)

### `/public`
- Static assets folder
- Contains fonts, images, icons, logos

### Root Configuration Files
- **package.json** - Dependencies & scripts
- **tsconfig.json** - TypeScript configuration
- **next.config.js** - Next.js configuration
- **tailwind.config.js** - Tailwind CSS configuration
- **postcss.config.js** - PostCSS configuration
- **.eslintrc.json** - ESLint rules

## Current Tech Stack

- **Framework**: Next.js 15+
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Database**: Supabase
- **Backend**: Node.js
- **Features**: PWA, Real-time Chat, KPI Dashboard

## Recommended Next Steps

When expanding the project, follow this structure pattern:

```
src/
├── components/
│   ├── ui/
│   ├── business/
│   └── layout/
├── sections/
├── hooks/
├── context/
├── lib/
│   ├── api/
│   └── utils/
└── styles/
```
