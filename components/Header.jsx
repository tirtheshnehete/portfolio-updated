import { useState } from "react"
import { HashLink } from "react-router-hash-link"

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <div className="img-text-container">
        <img
          onContextMenu={(e) => e.preventDefault()}
          draggable="false"
          src={props.src}
          alt="header-icon"
          className="header-icon"
        />
        <p className="tirthesh-name">Tirthesh Nehete</p>
      </div>
<button
  className={`menu-toggle ${isOpen ? "active" : ""}`}
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? "✕" : "☰"}
</button>

      <nav className={isOpen ? "open" : ""}>
        <ul>
          <li><HashLink className="nav-link" to="#home">Home</HashLink></li>
          <li><HashLink className="nav-link" to="/#about">About</HashLink></li>
          <li><HashLink className="nav-link" to="/#skills">Skills</HashLink></li>
          <li><HashLink className="nav-link" to="/#projects">Projects</HashLink></li>
          <li>
    <a
      className="nav-link"
      href="/Full_stack_developer_Tirthesh.pdf"
      download="Tirthesh-Nehete-Resume.pdf"
    >
      Resume
    </a>
  </li>
          <li><HashLink className="nav-link" to="https://github.com/tirtheshnehete?tab=repositories">Github</HashLink></li>
        </ul>
      </nav>
    </header>
  )
}

