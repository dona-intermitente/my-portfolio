import logo from 'images/logo.svg';

function Header() {
  return (
    <header className="container">
      <div className="items">
        <img src={logo} alt="logo"/>
        <h1 className="text-display">Dona Intermitente</h1>
        <div className="boton-modo"></div>
      </div>
    </header>
  );
}

export default Header;
