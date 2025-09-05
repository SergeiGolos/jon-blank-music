# Naming Conventions

## Files and folders
- Routes: kebab-case (e.g., `music-lessons/`, `contact/`)
- Components: PascalCase file and folder names (e.g., `TeacherCard/TeacherCard.tsx`)
- Utilities/constants: kebab-case files, named exports

## TypeScript
- Types/Interfaces: PascalCase (e.g., `LessonPlan`, `ReleaseLink`)
- Enums: PascalCase name, UPPER_SNAKE members
- Constants: UPPER_SNAKE_CASE

## Styling
- Tailwind utility-first classes; avoid custom CSS unless necessary
- Global styles in `src/global.css`

## Content
- Canonical copy in `.ground/` markdown; replicate into components or route content
