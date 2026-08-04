import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#f3f3f3', padding: '12px 20px' }}>
      <ul style={{ display: 'flex', gap: '16px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;