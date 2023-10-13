import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'




function App() {

  return (
    <body>


      <Header />

        <section className="section">

          <div className="div-text">
            <p className="text-one">hello 👋🏻, my name is Vinicius i am</p>
            <span>react</span>
            <p className="text-two">Developer</p>
            <p className="text-three">I've been a programmer <br /> for 7 months but I'm currently a freelancer.</p>
          </div>

          <img className="undraw-img" src="./code-developer.svg" alt="" />

        </section>

      <Footer />

    </body>
  )
}

export default App
