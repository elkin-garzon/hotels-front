import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">hoteles</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/rooms">habitaciones</NavLink>
                </li>
            </ul>
        </nav>
    )
}