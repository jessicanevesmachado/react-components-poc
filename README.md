# 🎨 React Components POC

A collection of reusable React components built with TypeScript, featuring modern UI patterns and best practices.

## 🚀 Features

### Components

- **AutoComplete** - Smart search component with real-time filtering
  - Dynamic dropdown suggestions
  - Keyboard navigation support
  - Clear on selection reset
  - Accessible (ARIA attributes)

- **Pagination** - Flexible pagination component
  - Dynamic page range
  - Visual feedback for selected page
  - Customizable page limits
  - Click handler support

- **Card** - Versatile card container
  - Hover effects
  - Shadow elevation
  - Responsive design
  - Flexible content

- **ErrorFallback** - Error boundary with detailed error display
  - Stack trace viewer
  - Graceful error handling
  - Isolated component errors
  - User-friendly messages

### Functionality

- 🔍 **Search & Filter** - Real-time search with PokéAPI integration
- 📄 **Pagination** - Navigate through data efficiently
- 🛡️ **Error Boundaries** - Prevent full app crashes
- 🎯 **TypeScript** - Full type safety
- ⚡ **Fast Refresh** - Instant feedback during development

## 🛠️ Tech Stack

- **React 19** - Latest React features
- **TypeScript** - Type safety and better DX
- **Vite** - Lightning-fast build tool
- **react-error-boundary** - Advanced error handling
- **classnames** - Dynamic CSS class management
- **PokéAPI** - Demo API integration

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/react-components-poc.git

# Navigate to project directory
cd react-components-poc

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎮 Usage

### AutoComplete Component

```tsx
import AutoComplete, { type Option } from './components/AutoComplete'

const options: Option[] = [
  { id: 1, value: 'Pikachu', imageUrl: '' },
  { id: 2, value: 'Charmander', imageUrl: '' }
]

<AutoComplete 
  options={options}
  onSelect={(option) => console.log(option)}
/>
```

### Pagination Component

```tsx
import Pagination from './components/Pagination'

<Pagination
  totalPages={100}
  maxByPage={10}
  onClick={(page) => console.log(`Page ${page}`)}
/>
```

### Card Component

```tsx
import { Card } from './components/Card'

<Card>
  <p>Your content here</p>
</Card>
```

### Error Boundary

```tsx
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <YourComponent />
</ErrorBoundary>
```

## 📁 Project Structure

```
src/
├── components/
│   ├── AutoComplete.tsx
│   ├── AutoComplete.css
│   ├── Card.tsx
│   ├── Card.css
│   ├── Pagination.tsx
│   ├── Pagination.css
│   ├── ErrorFallback.tsx
│   └── ErrorFallback.css
├── hooks/
│   └── usePokemon.tsx
├── util/
│   └── index.ts
├── App.tsx
└── main.tsx
```

## 🎯 Best Practices Implemented

- ✅ **Component Isolation** - Each component in its own file
- ✅ **TypeScript Strict Mode** - Maximum type safety
- ✅ **CSS Modules** - Scoped styling
- ✅ **Custom Hooks** - Reusable logic
- ✅ **Error Boundaries** - Graceful error handling
- ✅ **Accessibility** - ARIA labels and semantic HTML
- ✅ **React Hooks** - useCallback, useMemo for optimization
- ✅ **Code Organization** - Clear folder structure

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🎨 Styling

The project uses custom CSS with:
- Modern design patterns
- Smooth transitions and animations
- Hover effects
- Responsive layouts
- Consistent color scheme

## 🔮 Future Enhancements

- [ ] Add unit tests (Jest/Vitest)
- [ ] Add Storybook for component documentation
- [ ] Implement dark mode
- [ ] Add more component variants
- [ ] Improve accessibility
- [ ] Add animation library integration

## 📝 License

MIT

## 👤 Author

Your Name - [GitHub](https://github.com/yourusername)

---

⭐ If you find this project useful, please give it a star!
