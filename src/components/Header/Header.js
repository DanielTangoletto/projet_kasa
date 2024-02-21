import logo from "../../assets/logo.svg";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header className="header">
      <figure>
        <img src={logo} alt="logo agence de location" />
      </figure>
      <Nav />
    </header>
  );
}

export default Header;
