import './Header.css'

function Header() {

  return (

    <header className="header">

    <nav className="nav">
        <span><a href="">Dev-vinixx.gitHub</a></span>
        <div className="icons">
          <div className="div-icon">
            <a href="https://github.com/Dev-vinixx"><img className="img-icon"  src="/github.svg" alt="svg git hub" /></a>
          </div>
          <div className="div-icon">
            <a href="www.linkedin.com/in/vinícius-rodrigues-17a825280"><img className="img-icon"  src="/linkedin.svg" alt="svg linkedin" /></a>
          </div>
          <div className="div-icon">
            <a href=""><img className="img-icon" src="/clipboard.svg" alt="svg curriculo" /></a>
          </div>
        </div>
      </nav>

    </header>

  )
}

export default Header
