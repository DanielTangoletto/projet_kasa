import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header className="header">
      <figure>
        <NavLink to="/projet_kasa">
          <img src={logo} alt="logo agence de location" />
        </NavLink>
      </figure>
      <Nav />
    </header>
  );
}

export default Header;
