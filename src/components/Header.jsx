import relogio from './../assets/relogio.png';
import './Header.modules.css';

export default function Header() {
  return (
    <div className="header-container">
      <img src={relogio} alt=""></img>;
      <h2 className="header-title">Força, Foco, Fé</h2>
    </div>
  );
}
