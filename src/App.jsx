import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/hero"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const services = [
  {
    id: 1,
    title: 'Web Design',
    description: 'I create beautiful, responsive and user-friendly websites that meet the needs of your business.'
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'I develop custom websites that are fast, secure, and easy to manage.'
  },
  {
    id: 3,
    title: 'Mobile Apps',
    description: 'I develop mobile applications that are fast, responsive, and user-friendly.'
  }
]
const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is a description of project 1',
    image: 'project1.jpg'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is a description of project 2',
    image: 'project2.jpg'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is a description of project 3',
    image: 'project3.jpg'
  }
]

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Hero />
        <About />
        <Services services={services} />
        <Projects projects={projects}/>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
