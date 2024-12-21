import { Link } from 'react-router-dom';

const Navbar = ({menus}) => {
    console.log(menus);

    return (
        <nav>
            {menus.map(
                (menu) => <Link key={menu.id} to={`${menu.path}`}>{menu.name}</Link>
            )}
        </nav>
    );
}

export default Navbar;