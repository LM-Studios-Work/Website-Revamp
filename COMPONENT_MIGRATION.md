# Component Migration Guide

## Scalable Component Organization

This document outlines the new component structure and provides guidance for migrating existing components.

### Card Components (`/components/cards/`)

Reusable card patterns used across the site for consistent UI.

- **ProjectCard**: Displays project portfolio items
  - Props: `project`, `onClick?`
  - Used in: Projects page

- **PackageCard**: Displays service packages
  - Props: `package`, `onSelect?`
  - Used in: Standard Pack page, comparison

- **FeatureCard**: Displays feature lists
  - Props: `feature`
  - Used in: Why Choose section, service pages

- **TeamMemberCard**: Displays team members
  - Props: `member`
  - Used in: About page (existing)

### Section Components (`/components/sections/`)

Full-width section components that compose pages.

- **HeroSection**: Large hero banner
- **ServicesSection**: Services overview
- **WhyChooseSection**: Why choose us features
- **CTASection**: Call-to-action sections
- **TeamSection**: Team member showcase
- **FooterSection**: Footer (existing)

### Layout Components (`/components/layout/`)

Application-level layout components.

- **Navigation**: Main navigation header
  - Replaces old Header component
  - Uses navigation.ts for all links
  - Responsive mobile menu included

- **MainLayout**: Root layout wrapper
  - Provides ThemeProvider
  - Includes Navigation

### UI Components (`/components/ui/`)

Base UI components (shadcn-based).

Remain largely unchanged but now more consistently used throughout.

## Data-Driven Components

Components that accept data from `/lib/` files:

### Projects
- File: `lib/projects.ts`
- Used by: ProjectCard, Projects page
- Type: `Project`

### Services/Packages
- File: `lib/services.ts`
- Used by: PackageCard, Standard Pack page
- Type: `ServicePackage`

### Navigation Links
- File: `lib/navigation.ts`
- Used by: Navigation component
- Type: `NavLink`, `PageType`

### Features
- File: `lib/features.ts`
- Used by: FeatureCard, various sections
- Type: `Feature`

### Team Members
- File: `lib/team.ts`
- Used by: TeamMemberCard
- Type: `TeamMember`

### Testimonials
- File: `lib/testimonials.ts`
- Used by: Testimonial sections
- Type: `Testimonial`

## Migration Checklist

- [x] Create card components folder and extract reusable patterns
- [x] Create layout components folder and extract navigation
- [x] Create lib data files for all static content
- [x] Create navigation system in lib/navigation.ts
- [x] Update root layout to use ThemeProvider
- [x] Create new app routes for pages
- [x] Create new service pages
- [x] Create contact page (renamed from calculator)
- [ ] Complete migration of remaining pages
- [ ] Update all old components to use new card patterns
- [ ] Remove duplicate code
- [ ] Test all navigation
- [ ] Update relative imports to use consistent patterns

## Import Patterns

### Importing Components
```tsx
import { ProjectCard, PackageCard, FeatureCard } from "@/components";
// or specific import:
import { ProjectCard } from "@/components/cards/project-card";
```

### Importing Data
```tsx
import { projects, servicePackages, team } from "@/lib";
// or specific import:
import { projects } from "@/lib/projects";
import { servicePackages } from "@/lib/services";
```

### Importing Types
```tsx
import type { Project, ServicePackage, Feature, PageType } from "@/lib";
```

## Best Practices

1. **Keep components presentational**: Components should receive data as props
2. **Use lib files for data**: No hardcoded data in components
3. **Consistent typing**: Always define and export types in lib files
4. **Reuse cards**: Use card components instead of creating new ones
5. **Section composition**: Build pages by composing sections
6. **Navigation is centralized**: Update navigation links in lib/navigation.ts only

## Adding New Features

### To add a new service package:
1. Add data to `lib/services.ts`
2. It automatically appears in PackageCard
3. No component changes needed

### To add a new project:
1. Add data to `lib/projects.ts`
2. It automatically appears via ProjectCard
3. No component changes needed

### To add a new navigation link:
1. Edit `lib/navigation.ts`
2. Add to `mainNavigation` or `servicePages`
3. Navigation updates site-wide
4. Create corresponding page in `/app/[route]/page.tsx`
