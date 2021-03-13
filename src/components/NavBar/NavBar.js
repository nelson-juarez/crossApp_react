import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import Tittle from './Tittle/Tittle';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <header className="navBar d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
            <Logo title="crossAPP"></Logo>
            <Tittle title="crossAPP"></Tittle>
            <Menu />
            <CartWidget></CartWidget>
        </header>
    )
};

export default NavBar;