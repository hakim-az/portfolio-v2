import './App.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Projects/>
    </>
  )
}

export default App
