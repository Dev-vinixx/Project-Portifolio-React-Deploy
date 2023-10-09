import './Header.css'

function Header() {

  return (

    <header className="header">

    <nav>
        <span><a href="">Dev-vinixx.gitHub</a></span>
        <div className="icons">
          <div className="div-icon">
            <a href=""><img className="img-icon"  src="/github.svg" alt="" /></a>
          </div>
          <div className="div-icon">
            <a href=""><img className="img-icon"  src="/linkedin.svg" alt="jvg linkedin" /></a>
          </div>
          <div className="div-icon">
            <a href=""><img className="img-icon" src="/clipboard.svg" alt="" /></a>
          </div>
        </div>
      </nav>

    </header>

  )
}

export default Header
