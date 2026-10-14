import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {


  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/search?query="+encodeURIComponent(e.target.query.value.trim()))
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          to="/"
          className="brand"

        >
          <div className="brand-mark">t</div>
          <div className="brand-name">Terra</div>
        </Link>

        <nav className="main-nav">
          <NavLink className={'nav-link'} to="/">Главная</NavLink>
          <NavLink className={'nav-link'} to="/catalog">Каталог</NavLink>
          <NavLink className={'nav-link'} to="/about">О нас</NavLink>
          <NavLink className={'nav-link'} to="/contacts">Контакты</NavLink>

        </nav>

        <form onSubmit={handleSubmit} className="header-search">
          <input name="query" type="text" placeholder="Найти растение..." />
        </form>
      </div>
    </header>
  );
}

function NavItem({ label, page, currentPage, onNavigate }) {
  return (
    <a
      href={'/' + (page === 'home' ? '' : page)}
      className={'nav-link' + (currentPage === page ? ' active' : '')}
      onClick={e => { e.preventDefault(); onNavigate(page); }}
    >
      {label}
    </a>
  );
}
