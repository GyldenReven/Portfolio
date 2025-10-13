import HomePage from './pages/homepage'
import ProjectsPage from './pages/projectspage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import gear from './assets/gear.svg'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <div className="min-w-screen max-w-5xl mx-auto p-4 mb-auto">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<h2>404 - Page not found</h2>} />
      </Routes>
    </BrowserRouter>
    <img src={gear} 
      className='m-4'
      alt='Gear icon'
      width='50'
      height='50'
    />
    </div>
    <Footer />
    </div>
  )
}

export default App