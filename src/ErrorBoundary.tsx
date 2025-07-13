import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error, info: React.ErrorInfo) => ReactNode);
  onError?: (error: Error, info: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ errorInfo });

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    const { fallback, children } = this.props;
    const { hasError, error, errorInfo } = this.state;

    if (hasError && error && errorInfo) {
      if (typeof fallback === 'function') {
        return fallback(error, errorInfo);
      }

      // Default fallback with styled error info
      return (
        <div
          style={{
            padding: '2rem',
            border: '1px solid #ff4d4f',
            borderRadius: '8px',
            backgroundColor: '#fff1f0',
            color: '#a8071a',
            fontFamily: 'sans-serif',
            maxWidth: '600px',
            margin: '2rem auto'
          }}
        >
          <h2 style={{ marginBottom: '1rem' }}>🚨 Something went wrong.</h2>
          <p>
            <strong>Error:</strong> {error.message}
          </p>
          <details style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>
            <summary>Stack Trace</summary>
            {errorInfo.componentStack}
          </details>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '1.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#ff4d4f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            🔄 Try Again
          </button>
        </div>
      );
    }

    return children;
  }
}
