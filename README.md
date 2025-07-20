

# 🛡️ React Smart Error Boundary

> **⚠️ This package is currently under development and not yet ready for production use.**
> Please ⭐️ the repository and check back soon for updates!

---

A lightweight and customizable error boundary component for React applications.
Gracefully catch and display runtime errors in your UI — with zero configuration and full flexibility.

---

## 🚧 Status: Under Construction

We're actively working to finalize and publish this package. Expect improvements, breaking changes, and feature additions in upcoming releases.

If you'd like to contribute or follow progress:

* [📂 Repository](https://github.com/AkshayPanchivala/react-smart-error-boundary)
* [🐛 Report Issues](https://github.com/AkshayPanchivala/react-smart-error-boundary/issues)
* ⭐ Star the repo to stay updated!

---

## 🚀 Planned Installation

Coming soon via npm or yarn:

```bash
npm install react-smart-error-boundary
# or
yarn add react-smart-error-boundary
```

---

## 📊 Planned Usage

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

## 🧩 Props (Planned)

| Prop       | Type                                                                | Description                                  |
| ---------- | ------------------------------------------------------------------- | -------------------------------------------- |
| `children` | `ReactNode`                                                         | Child components that should be protected.   |
| `fallback` | `ReactNode` or `(error: Error, info: React.ErrorInfo) => ReactNode` | Custom UI to render when an error occurs.    |
| `onError`  | `(error: Error, info: React.ErrorInfo) => void`                     | Callback for logging or reporting the error. |

---

## ✨ Planned Features

* ⚙️ Support for React 17 & 18
* 🎨 Fully customizable fallback UI
* 🧠 Supports static and dynamic fallback rendering
* 💡 Written in TypeScript
* 💼 Production-ready best practices

---

## 📄 License

MIT © [Akshay Panchivala](https://github.com/AkshayPanchivala)

---

## ❤️ Contribution

We welcome contributions once development stabilizes.
Feel free to [open issues](https://github.com/AkshayPanchivala/react-smart-error-boundary/issues) or submit a PR in the future.

---

Made with ❤️ by [Akshay Panchivala](https://github.com/AkshayPanchivala)


