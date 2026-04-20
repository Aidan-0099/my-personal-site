import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'About' },
  { path: '/about', label: 'Education' },
  { path: '/experience', label: 'Experience' },
  { path: '/publications', label: 'Publications' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <nav>
        <Link to="/" style={{
          fontSize: '16px',
          fontWeight: 600,
          color: 'var(--text-h)',
          textDecoration: 'none',
          letterSpacing: '-0.5px',
        }}>
          诸葛璐瑶
        </Link>

        <ul>
          {navItems.map(item => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}