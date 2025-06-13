import { Clock3 } from 'lucide-react';
import './Header.modules.css';

export default function Header() {
  return (
    <div className="header-container">
      <Clock3 className='header-img' />
      <h1 className="header-title">Força, Foco, Fé</h1>
    </div>
  );
}
