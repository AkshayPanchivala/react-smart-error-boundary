# 🛡️ React Smart Error Boundary

A lightweight and customizable error boundary component for React applications.  
Gracefully catch and display runtime errors in your UI — with zero configuration and full flexibility.

---

## 🚀 Installation

Install using npm or yarn:

```bash
npm install react-smart-error-boundary
# or
yarn add react-smart-error-boundary
````

---

## ⚡ Usage

```tsx
import { ErrorBoundary } from 'react-smart-error-boundary';

function App() {
  return (
    <ErrorBoundary
      fallback={(error, info) => (
        <div style={{ padding: '1rem', background: '#ffe5e5', color: '#a00' }}>
          <h2>🚨 Error: {error.message}</h2>
          <details>
            <summary>Stack Trace</summary>
            <pre>{info.componentStack}</pre>
          </details>
        </div>
      )}
    >
      <YourComponent />
    </ErrorBoundary>
  );
}
```

---

## 🧩 Props

| Prop       | Type                                                                | Description                                  |
| ---------- | ------------------------------------------------------------------- | -------------------------------------------- |
| `children` | `ReactNode`                                                         | Child components that should be protected.   |
| `fallback` | `ReactNode` or `(error: Error, info: React.ErrorInfo) => ReactNode` | Custom UI to render when an error occurs.    |
| `onError`  | `(error: Error, info: React.ErrorInfo) => void`                     | Callback for logging or reporting the error. |

---

## ✨ Features

* ⚙️ Works with React 17 & 18
* 🎨 Fully customizable fallback UI
* 🧠 Supports both static and dynamic fallback rendering
* 💡 Written in TypeScript
* 💼 Perfect for production-ready React apps

---

## 📦 NPM

[![NPM](https://img.shields.io/npm/v/react-smart-error-boundary.svg)](https://www.npmjs.com/package/react-smart-error-boundary)

---

## 📄 License

MIT © [Akshay Panchivala](https://github.com/AkshayPanchivala)

---

## 🛠️ Issues & Contributions

Feel free to [open an issue](https://github.com/AkshayPanchivala/react-smart-error-boundary/issues) or submit a PR.

---

Made with ❤️ by [Akshay Panchivala](https://github.com/AkshayPanchivala)

```