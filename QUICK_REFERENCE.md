# Quick Reference Guide

## Directory Quick Links

### Pages (Routes)
| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Home/Main SPA entry |
| `/home` | `app/home/page.tsx` | Home page |
| `/about` | `app/about/page.tsx` | About page |
| `/projects` | `app/projects/page.tsx` | Portfolio projects |
| `/contact` | `app/contact/page.tsx` | Contact form |
| `/services/web-design` | `app/services/web-design/page.tsx` | Web design page |
| `/services/standard-pack` | `app/services/standard-pack/page.tsx` | Packages page |
| `/services/compare` | `app/services/compare/page.tsx` | Package comparison |

### Components

#### Layout
- `components/layout/navigation.tsx` - Main navigation (NEW)
- `components/layout/main-layout.tsx` - Layout wrapper (NEW)

#### Cards (Reusable)
- `components/cards/project-card.tsx` - Project display (NEW)
- `components/cards/package-card.tsx` - Service package display (NEW)
- `components/cards/feature-card.tsx` - Feature list items (NEW)

#### Sections
- `components/sections/hero-section.tsx` - Hero banner
- `components/sections/footer.tsx` - Footer
- (Other existing sections)

#### UI
- `components/ui/` - Base UI components (button, card, etc.)

### Data Files (Lib)

| File | Type | Purpose |
|------|------|---------|
| `lib/navigation.ts` | Type + Data | Navigation links & routes |
| `lib/projects.ts` | Type + Data | Portfolio projects |
| `lib/services.ts` | Type + Data | Service packages |
| `lib/team.ts` | Type + Data | Team members |
| `lib/testimonials.ts` | Type + Data | Client testimonials |
| `lib/features.ts` | Type + Data | Feature lists |
| `lib/utils.ts` | Functions | Utility functions |

## Common Tasks

### Add a New Service Package
```typescript
// 1. Edit lib/services.ts
export const servicePackages: ServicePackage[] = [
  // ... existing packages
  {
    id: "new-package",
    name: "New Package",
    price: "R2,999",
    description: "...",
    delivery: "X working days",
    features: [...],
    color: "#color",
    popular: false,
  },
];
```
✓ Automatically appears on Standard Pack and Compare pages

### Add a New Project
```typescript
// 1. Edit lib/projects.ts
export const projects: Project[] = [
  // ... existing projects
  {
    id: "new-project",
    title: "Project Title",
    tags: ["Tag1", "Tag2"],
    description: "...",
    imageUrl: "...",
    category: "web-design",
    featured: false,
  },
];
```
✓ Automatically appears on Projects page

### Update Navigation
```typescript
// 1. Edit lib/navigation.ts
export const mainNavigation: NavLink[] = [
  // ... existing links
  {
    id: "new-page",
    label: "New Page",
    href: "/new-page",
    category: "main",
  },
];
```
✓ Updates navigation site-wide
✓ Create matching `/app/new-page/page.tsx`

## Type Definitions

### Key Types
```typescript
// Navigation
type PageType = "home" | "web-design" | "standard-pack" | "contact" | "compare" | "projects" | "about";

// Data Types
interface Project { }
interface ServicePackage { }
interface TeamMember { }
interface Testimonial { }
interface Feature { }
interface NavLink { }
```

All types are exported from their respective lib files.

## Imports

### Components
```typescript
import { ProjectCard, PackageCard, FeatureCard } from "@/components";
import { Navigation } from "@/components/layout/navigation";
```

### Data & Types
```typescript
import { projects, servicePackages, team } from "@/lib";
import type { Project, ServicePackage, PageType } from "@/lib";
```

## Build & Deployment

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
```

All routes are pre-rendered as static pages for optimal performance.

## File Naming Conventions

- **Pages**: `page.tsx` in route folders
- **Components**: PascalCase, e.g., `ProjectCard.tsx`
- **Hooks**: `use` prefix, e.g., `useProjects.ts`
- **Utils**: camelCase, e.g., `helpers.ts`
- **Types**: Export from data files, e.g., `lib/projects.ts`

## Color System

Theme color: Lime Green `#d4f534`

Secondary colors (for variety):
- Teal: `#5dd9c1`
- Purple: `#b4a7d6`
- Red: `#ff6b6b`
- Yellow: `#facc15`

All managed through Tailwind CSS variables in `app/globals.css`

## Documentation Files

- `PROJECT_STRUCTURE.md` - Detailed folder structure
- `COMPONENT_MIGRATION.md` - Component patterns and organization
- `RESTRUCTURING_COMPLETE.md` - What was accomplished
- `QUICK_REFERENCE.md` - This file

Start with `RESTRUCTURING_COMPLETE.md` for overview, then refer to specific docs as needed.
