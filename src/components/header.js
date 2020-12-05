import Logo from 'images/logo.svg';
import BotonModo from 'components/boton-modo.js'

function Header() {
  return (
    <header className="container">
      <div className="items">
        <img src={Logo} alt="logo"/>
        <h1 className="text-display">Dona Intermitente</h1>
        <BotonModo/>
      </div>
    </header>
  );
}

export default Header;
