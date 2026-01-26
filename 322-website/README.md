# OMMKPN-NotFound(404 Error)

D2L/Brightspace-style course homepage for **Gemini CLI — Group 3**. The UI is designed to mimic an enterprise LMS layout with a fixed top bar, banner header, two-column dashboard, and LMS-style widgets.

## Pages

- `app/page.tsx`: Course home with announcements, assignments, embedded resources, and sidebar widgets (calendar, tutorial hours, quick links, categories, updates, archives).
- `app/about/page.tsx`: About Us page with the group name, project name, and member list.

## Key UI Features

- Fixed top navigation with Queen's logo and LMS-style About tab.
- Banner header with course title.
- Card-based dashboard layout (left sidebar + main content).
- Calendar widget with collapsible sections and upcoming events list.
- Assignment placeholders styled as LMS action buttons.
- Embedded Resources styled as LMS link rows.

## Tech Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS (utility classes)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Assets

- `public/Q.webp`: Queen's logo (used in the navbar and favicon).
- `public/gemini_pic.webp`: Banner image placeholder.
