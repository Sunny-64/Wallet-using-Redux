import React from 'react'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <main className="flex justify-center items-center h-[100vh]">
      <div className="main-card bg-secondary h-[500px] w-[500px] rounded-lg px-4 py-8 shadow-lg">
        <Dashboard />
      </div>
    </main>
  )
}

export default App

