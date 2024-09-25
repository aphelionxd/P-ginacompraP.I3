import '../styles/Header.css';
import Logo from '../assets/Logo.png';
import { FaHome, FaUser, FaSignInAlt, FaShoppingCart, FaDollarSign } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='inner-container'>
      <header className="Header">
        <div className="logo-container">
          <a href="./app.tsx"><img src={Logo} alt="Logo" className="logo" style={{ width: '250px', height: 'auto' }} /></a>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Buscar..." className="search-input" />
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                <FaHome className="nav-icon" />
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#shop" className="nav-link">
                <FaShoppingCart className="nav-icon" />
                Compras
              </a>
            </li>
            <li className="nav-item">
              <a href="#sales" className="nav-link">
                <FaDollarSign className="nav-icon" />
                Vendas
              </a>
            </li>
            <li className="nav-item">
              <a href="#profile" className="nav-link">
                <FaUser className="nav-icon" />
                Perfil
              </a>
            </li> 
            <li className="nav-item">
              <a href="#login" className="nav-link">
                <FaSignInAlt className="nav-icon" />
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;