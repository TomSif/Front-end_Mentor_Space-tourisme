# Space Tourism Website - Thomas Sifferle 🚀

![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)
![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)
![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/TomSif)
[![React](https://img.shields.io/badge/react_19-20232a?style=for-the-badge&logo=react&logocolor=61dafb)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-646cff?style=for-the-badge&logo=vite&logocolor=white)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/tailwindcss_v4-0F172A?&logo=tailwindcss&logocolor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Router](https://img.shields.io/badge/react_router_v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Framer Motion](https://img.shields.io/badge/framer_motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

![Design preview for the Space Tourism Website coding challenge](/images/desktop-crew.png)

### 🌐 Live Demo:

**[View live site →](https://front-end-mentor-space-tourisme.vercel.app/)**

Deployed on Vercel with HTTPS and performance optimizations.

---

# Frontend Mentor - Space Tourism Website Solution

This is a solution to the [Space Tourism Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Desktop](/images/desktop-destination.png)

### Links

- Solution URL: [GitHub](https://github.com/TomSif/Front-end_Mentor_Space-tourisme)
- Live Site URL: [Vercel](https://front-end-mentor-space-tourisme.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties via Tailwind CSS v4 `@theme`
- Flexbox & CSS Grid
- Mobile-first workflow
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [React Router v7](https://reactrouter.com/) - Client-side routing
- [Framer Motion](https://www.framer.com/motion/) - Animation library

### What I learned

This was my first multi-page React project with client-side routing and page transitions. It consolidated TypeScript, introduced React Router patterns, and gave me hands-on experience with Framer Motion animations.

#### React Router v7 — Layout pattern with Outlet

Learning to structure routes with a shared Layout component that renders the active page via `<Outlet />`. The key insight was understanding that NavBar needed to live outside `AnimatePresence` to avoid duplicating during page transitions:

```tsx
// App.tsx — NavBar outside AnimatePresence, Layout handles page content
<BrowserRouter>
  <NavBar />
  <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Route>
    </Routes>
  </AnimatePresence>
</BrowserRouter>
```

#### Framer Motion — AnimatePresence + key-driven animations

Understanding that `key` changes trigger mount/unmount cycles, which Framer Motion uses to play exit animations before entry animations:

```tsx
// Tab content animation — key change triggers exit → enter sequence
<AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {/* Tab content */}
  </motion.div>
</AnimatePresence>
```

The critical lesson: `initial={{ opacity: 1 }}` means no fade-in — must be `opacity: 0` for the animation to be visible.

#### TypeScript interfaces for nested JSON data

Defining interfaces for the `data.json` structure, learning the difference between `extends` (merging at the same level) and typing a nested property:

```typescript
interface ImagePngWebp {
  png: string;
  webp: string;
}

interface ImageTech {
  portrait: string;
  landscape: string;
}

interface Destination {
  name: string;
  images: ImagePngWebp;
  description: string;
  distance: string;
  travel: string;
}

interface SpaceData {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
}

// Typed import — safer than `as SpaceData`
const dataTyped: SpaceData = data;
```

#### Responsive images with `<picture>` and `<source>`

Using `<picture>` to serve different images based on viewport, with correct source ordering (most specific first):

```tsx
<picture>
  <source media="(min-width: 1024px)" srcSet={currentItem.images.portrait} />
  <img src={currentItem.images.landscape} alt={currentItem.name} />
</picture>
```

#### Custom radio buttons with Tailwind

Styling native radio inputs with `appearance-none` and state variants, eliminating the need for JavaScript state management:

```tsx
<input
  type="radio"
  name="crew"
  checked={activeTab === member.name}
  onChange={() => setActiveTab(member.name)}
  className="h-3 w-3 cursor-pointer appearance-none rounded-full 
             bg-white/20 checked:bg-white hover:bg-white/50"
/>
```

#### Programmatic navigation with useNavigate

Linking the EXPLORE button to a route without using a `<Link>` component:

```tsx
const navigate = useNavigate();

<button onClick={() => navigate("/destination")}>EXPLORE</button>;
```

#### Accessibility patterns

Adding screen-reader-only labels and proper ARIA attributes:

```tsx
// sr-only for fieldset legends
<fieldset>
  <legend className="sr-only">Select crew member</legend>
  {/* radio buttons */}
</fieldset>

// aria-label on icon-only buttons
<Link to="/" aria-label="Go to homepage">
  <Logo />
</Link>
```

### Continued development

Areas I want to focus on in future projects:

- **Framer Motion depth**: `layoutId` for shared element transitions, more complex orchestration
- **React Router**: Nested routes, loaders, error boundaries
- **Fluid responsive design**: Moving from breakpoint-based to `clamp()`/`vw` approaches to handle edge cases between breakpoints

### AI Collaboration

This project was developed with AI assistance from **Claude** (Anthropic), used as a learning companion following a custom mentoring protocol defined in an `AGENTS.md` file.

**The collaboration model:**

The `AGENTS.md` file establishes a strict learning-first approach: Claude acts as a technical mentor who guides toward solutions rather than providing them. Key principles include:

- I write all code myself — Claude provides hints, parallel examples, or targeted questions
- A `progression.md` file tracks each session: concepts learned, gaps revealed, next steps
- Honest feedback on what's truly anchored vs. superficially familiar
- Comprehension checks to verify understanding, not just syntax

**How I used AI:**

- **Architecture discussions**: Deciding where to place NavBar relative to AnimatePresence, understanding the Layout + Outlet pattern
- **Debugging guidance**: When two NavBars appeared during page transitions, Claude helped me diagnose the root cause (AnimatePresence keeping old and new pages alive simultaneously) without giving me the fix directly
- **Pattern reinforcement**: TypeScript interface patterns, Framer Motion animation sequences

**What worked well:**

- The session-by-session tracking in `progression.md` revealed patterns — I could see which concepts needed revisiting
- Getting questions like "what would happen if you forgot the dependency array?" instead of being told
- Having subtle errors flagged immediately: confusing `extends` with nested property typing, forgetting that `initial={{ opacity: 1 }}` means no fade

**Challenges encountered:**

- Initially placed NavBar inside Layout, causing duplicate NavBars during transitions — diagnosed with guidance, fixed independently
- Confused `extends` in TypeScript (merges at same level) with nesting interfaces as properties
- Forgot that `.replace()` only replaces the first occurrence — needed `.replaceAll()` or regex
- Hardcoded values in `checked` attribute instead of using the loop variable — a silent bug caught during review

**Honest reflection:**

This project had significantly more architectural complexity than previous ones: routing, page transitions, shared layouts, and animation coordination. The custom AGENTS.md protocol forced me to write code myself even when stuck, which was frustrating at times but resulted in better retention. The progression tracking made gaps visible — I can see exactly which concepts moved from "rusty" to "consolidated" across sessions.

## Author

- Website - [Thomas Sifferle](https://thomas-sifferle.com)
- Frontend Mentor - [@TomSif](https://www.frontendmentor.io/profile/TomSif)
