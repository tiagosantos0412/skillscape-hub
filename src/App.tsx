import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Certificados from './components/Certificados'
import Curriculo from './components/Curriculo'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Certificados />
        <Curriculo />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}

export default App
