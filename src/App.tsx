import HomePage from './pages/homepage'
import ProjectsPage from './pages/projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="max-w-5xl mx-auto p-4">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<h2>404 - Page not found</h2>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App