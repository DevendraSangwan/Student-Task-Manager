import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Smart Daily Task Manager</div>
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
        <li><NavLink to="/tasks" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Tasks</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;