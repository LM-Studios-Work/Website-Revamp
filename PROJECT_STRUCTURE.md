# Website-Revamp Project Structure

## Project Architecture

This project has been restructured for scalability and maintainability using a component-driven approach with centralized data management.

### Folder Structure

```
/app
  ├── /services
  │   ├── /web-design
  │   │   └── page.tsx
  │   └── /standard-pack
  │       └── page.tsx
  ├── /contact
  │   └── page.tsx
  ├── /projects
  │   └── page.tsx
  ├── /about
  │   └── page.tsx
  ├── page.tsx (home)
  ├── layout.tsx
  └── globals.css

/components
  ├── /layout
  │   ├── navigation.tsx
  │   └── main-layout.tsx
  ├── /cards
  │   ├── project-card.tsx
  │   ├── package-card.tsx
  │   ├── feature-card.tsx
  │   └── team-member-card.tsx
  ├── /sections (existing)
  │   ├── hero-section.tsx
  │   ├── footer.tsx
  │   └── ...
  ├── /ui (existing)
  │   ├── button.tsx
  │   ├── card.tsx
  │   └── ...
  ├── header.tsx (legacy)
  └── theme-provider.tsx

/lib
  ├── navigation.ts (new)
  ├── features.ts (new)
  ├── services.ts (new)
  ├── testimonials.ts (new)
  ├── projects.ts (existing)
  ├── team.ts (existing)
  └── utils.ts

/public
  └── /images
```

### Key Design Patterns

1. **Data Files (lib/)**: All static data is centralized in TypeScript files with proper types
2. **Reusable Cards**: ProjectCard, PackageCard, FeatureCard components for consistency
3. **Navigation System**: Single source of truth for all navigation links
4. **Page Composition**: Pages import section and card components to build views
5. **Theme System**: Centralized color and styling through Tailwind + CSS variables

### Navigation Structure

The navigation is now structured with:
- Main pages: Home, Projects, About, Contact
- Service pages: Web Design, Standard Pack, Compare Packages

All routing is defined in `/lib/navigation.ts` for easy updates.

### Data Management

- **Services**: `/lib/services.ts` - Package pricing and features
- **Projects**: `/lib/projects.ts` - Project portfolio data
- **Testimonials**: `/lib/testimonials.ts` - Client testimonials
- **Features**: `/lib/features.ts` - Feature lists for sections
- **Navigation**: `/lib/navigation.ts` - All navigation links and structure

### Component Organization

- **Layout Components**: Navigation, headers, footers
- **Card Components**: Reusable card patterns for consistent design
- **Section Components**: Full-section components (hero, services, etc.)
- **UI Components**: Base UI elements (buttons, inputs, etc.)

### Next Steps for Complete Migration

1. Update remaining pages to new structure
2. Move all page-level components from `/components/pages` to `/app`
3. Create compare page component
4. Create about page component
5. Integrate new navigation throughout
6. Update header.tsx to use new Navigation component

### Usage Examples

#### Adding a New Service Page

1. Create file: `/app/services/[name]/page.tsx`
2. Import components and data
3. Build page using existing components

#### Adding New Project Data

1. Edit `/lib/projects.ts`
2. Add project to `projects` array
3. Projects automatically appear on projects page

#### Updating Navigation

1. Edit `/lib/navigation.ts`
2. Add new link to `mainNavigation` or `servicePages`
3. Navigation updates site-wide automatically
