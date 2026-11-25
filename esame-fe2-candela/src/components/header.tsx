import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <div>
        <div className="header_logo">Movie App</div>
      </div>
      <nav className="header_nav">
        <Link to="/">Home / Elenco</Link>
      </nav>
    </header>
  );
};

export default Header;