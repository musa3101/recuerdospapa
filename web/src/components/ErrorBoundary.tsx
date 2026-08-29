import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in React tree:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100dvh',
          backgroundColor: '#110F0D',
          color: '#F8F5EE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
        }}>
          <h1 style={{ fontSize: '1.8rem', color: '#D4AF37', marginBottom: '1rem' }}>
            Para Papá
          </h1>
          <p style={{ color: '#C8BDAF', marginBottom: '1.5rem', maxWidth: '400px' }}>
            Hubo un detalle al cargar. Por favor, pulsa el botón para reintentar.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: '#D4AF37',
              color: '#110F0D',
              border: 'none',
              borderRadius: '12px',
              padding: '0.8rem 1.8rem',
              fontWeight: '700',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Recargar
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
