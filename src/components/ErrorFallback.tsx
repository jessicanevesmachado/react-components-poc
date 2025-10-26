import './ErrorFallback.css'

interface ErrorFallbackProps {
  error: Error
}

function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <div className="error-fallback">
      <h2 className="error-fallback__title">⚠️ Algo deu errado</h2>
      <p className="error-fallback__message">
        {error.message}
      </p>
      <details className="error-fallback__details">
        <summary className="error-fallback__summary">
          Ver detalhes técnicos
        </summary>
        <pre className="error-fallback__stack">
          {error.stack}
        </pre>
      </details>
    </div>
  )
}

export default ErrorFallback

