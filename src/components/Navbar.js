import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/hotels">hotels</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/rooms">rooms</NavLink>
                </li>
            </ul>
        </nav>
    )
}