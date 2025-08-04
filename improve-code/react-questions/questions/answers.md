# 📘 React Developer Interview Answers

---

## 🟢 Junior-Level – Core React & Styling

### ⚛️ React Fundamentals

1. **What is `useState` and how does it work?**  
   `useState` is a React Hook that lets you add state to functional components. It returns a state value and a function to update it:
   ```js
   const [count, setCount] = useState(0);
   ```

2. **What are React Hooks and why were they introduced?**  
   Hooks let you use state and lifecycle features in functional components. They simplify logic reuse and reduce reliance on class components.

3. **What is the `key` prop in React and why is it important?**  
   The `key` prop helps React identify which items have changed in a list and optimize re-renders.

4. **What’s the difference between controlled and uncontrolled components?**
    - Controlled: React state manages the input’s value.
    - Uncontrolled: The DOM manages the value, accessed via `ref`.

5. **What is JSX? How does it differ from HTML?**  
   JSX is a syntax extension for JavaScript that looks like HTML but allows embedding JS expressions. It's stricter (e.g., `className` instead of `class`).

---

### 🎨 Styling (CSS, Tailwind, Sass)

6. **What are the advantages of using Tailwind CSS?**
    - Utility-first approach.
    - Faster development.
    - Consistent design system.
    - No CSS file conflicts.

7. **How does Sass improve over plain CSS?**  
   Sass offers variables, nesting, mixins, functions, and modular imports for better code organization.

8. **What’s the difference between SCSS and Sass syntax?**
    - SCSS: CSS-like syntax with braces and semicolons.
    - Sass: indentation-based syntax without braces or semicolons.

9. **How would you style a component using inline styles vs external stylesheets?**
    - Inline: good for dynamic styles, but lacks pseudo-classes and media queries.
    - External: better for reuse and separation of concerns.

10. **How do you apply responsive styles in Tailwind?**  
    Use breakpoint prefixes like `sm:`, `md:`, `lg:`:
    ```html
    <div class="text-sm md:text-lg lg:text-xl"></div>
    ```

---

## 🟡 Intermediate-Level – State, Hooks, APIs

### ⚛️ React Hooks & Patterns

11. **Difference between `useEffect`, `useLayoutEffect`, and `useInsertionEffect`?**
    - `useEffect`: runs after the component is painted.
    - `useLayoutEffect`: runs before paint, can block rendering.
    - `useInsertionEffect`: used by libraries like styled-components to inject styles.

12. **What is the Context API and when would you use it?**  
    For passing global data like themes or user auth state without prop drilling.

13. **What is the difference between `useCallback` and `useMemo`?**
    - `useCallback`: memoizes a function.
    - `useMemo`: memoizes a computed result.

14. **What is a custom hook? Why and when would you create one?**  
    A function using built-in hooks to extract reusable logic. Useful for sharing logic like form handling or data fetching.

15. **What is prop drilling and how can it be avoided?**  
    Passing props through many layers. Avoid with Context API or state management libraries.

---

### 📦 Global State

16. **Compare Redux, Zustand, and Recoil.**
    - Redux: mature, scalable, but verbose.
    - Zustand: simple, minimal, easy to use.
    - Recoil: atom-based, better for deeply nested state.

17. **What is Redux Toolkit and how is it different?**  
    Simplifies Redux with `createSlice`, `createAsyncThunk`, and reduces boilerplate.

18. **What is a selector in Redux, and why is memoization important?**  
    Selectors extract and compute derived state. Memoization prevents unnecessary re-renders.

---

### 🌍 APIs & Networking

19. **How do you manage API requests in React?**  
    With `fetch`, `axios`, or using libraries like `React Query` or `SWR`.

20. **What are React Query and SWR?**  
    Data-fetching libraries with built-in caching, retries, background refetching.

21. **How do you handle loading, error, and empty states?**  
    Use booleans in state or values returned by fetch libraries to conditionally render UI.

---

### 🎨 Styling – Continued

22. **Compare Tailwind CSS to CSS Modules.**
    - Tailwind: utility-based, quick, scalable.
    - CSS Modules: scoped, readable, great for component-specific styling.

23. **How do you implement dark mode in a React app?**  
    Toggle a `dark` class on the `html` element or use a state/context with Tailwind’s `dark:` variants.

24. **How do you conditionally apply styles using Tailwind?**  
    Use template literals or libraries like `clsx` or `classnames`.

---

## 🔴 Senior-Level – Architecture, Performance, Testing

### 🧠 Advanced React Patterns

25. **What is `React.memo` and when should you use it?**  
    To memoize pure functional components and avoid unnecessary re-renders.

26. **How does React’s reconciliation algorithm work?**  
    It compares the new virtual DOM to the previous one and updates only what's changed.

27. **How do you optimize performance in a large React application?**
    - Memoization (`useMemo`, `useCallback`)
    - Lazy loading
    - Splitting bundles
    - Avoiding anonymous functions in render

28. **How would you structure a reusable component library?**
    - Atomic design
    - Central export file
    - Storybook documentation
    - TypeScript for safety
    - Separate styles or Tailwind variants

---

### 🧪 Testing & QA

29. **How do you test a React component with Jest and React Testing Library?**  
    Use `render()` to mount the component, simulate interactions with `userEvent`, assert with `expect`.

30. **Difference between unit, integration, and E2E tests?**
    - Unit: single component.
    - Integration: multiple components working together.
    - E2E: full app flow (e.g., using Cypress or Playwright).

31. **How do you mock API calls in tests?**  
    Use `msw` or `jest.mock()` to simulate responses without real network calls.

---

### 🔧 Tooling & Dev Experience

32. **What are Vite and Webpack for?**  
    They bundle and serve your code. Vite is faster for dev, Webpack is mature and extensible.

33. **What are ESLint and Prettier? Why are they useful?**
    - ESLint: catch bugs and enforce code style.
    - Prettier: auto-format code consistently.

34. **What is a source map and how does it help during debugging?**  
    Maps the transpiled/minified code back to the original source code for easier debugging in dev tools.

---

### 🚀 Deployment & CI/CD

35. **How do you deploy a React app?**  
    With services like Vercel, Netlify, or AWS S3 + CloudFront. Push to repo → auto build → deploy.

36. **How are environment variables used in React builds?**  
    Use `REACT_APP_` prefix and access via `process.env.REACT_APP_MY_KEY`.

37. **What is a CI/CD pipeline and how would you implement one?**  
    Automates testing and deployment on every push (e.g., using GitHub Actions or GitLab CI).

---

### 🦾 Accessibility & UX

38. **How do you make a React app accessible?**  
    Use semantic HTML, label form fields, support keyboard navigation, and test with screen readers.

39. **How do you manage keyboard navigation and focus?**  
    Use `tabIndex`, `ref.current.focus()`, and handle `keydown` events for custom navigation.

40. **How would you use animation responsibly?**  
    Respect `prefers-reduced-motion`, avoid blocking animations, use lightweight libraries like Framer Motion or CSS transitions.

---
