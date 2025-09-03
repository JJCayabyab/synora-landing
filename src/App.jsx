import LandingPage from './pages/LandingPage'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  // Apply/remove dark class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className='bg-body'>
      <LandingPage darkMode={darkMode} setDarkMode={setDarkMode} />

    </div>
  )
}

export default App
