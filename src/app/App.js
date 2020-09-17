import React from 'react'

import ErrorBoundary from '../utils/errorBoundary'

import Routes from '../routes/routes'

function App() {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  )
}

export default App
