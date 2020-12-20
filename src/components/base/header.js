import Logo from 'images/logo.svg'
import ButtonMode from 'components/button-mode'

function Header() {
  return (
    <header className="container">
      <div className="items">
        <a href="/">
          <img src={Logo} alt="logo"/>
        </a>
        <h1 className="text-display">Dona Intermitente</h1>
        <ButtonMode/>
      </div>
    </header>
  );
}

export default Header;
