import { useState } from "react";
import {
  Search,
  Moon,
  Sun,
  User
} from "lucide-react";
import NotificationPanel from "./NotificationPanel";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="header">
      <div className="header__search">
        <Search size={20} />
        <input
  type="text"
  placeholder="Pesquisar disciplinas, atividades..."
  aria-label="Pesquisar no portal"
/>

<kbd>Ctrl + K</kbd>
      </div>

      <div className="header__actions">
        <NotificationPanel />

        <button
  className={`header__theme-button ${darkMode ? "active" : ""}`}
  onClick={() => setDarkMode(!darkMode)}
  aria-label="Alternar tema"
  title={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
>
  {darkMode ? <Sun size={21} /> : <Moon size={21} />}
</button>

        <div className="header__profile">
          <div className="header__avatar">
  <User size={20} />
</div>

<div>
  <strong>Felipe</strong>
  <span>Estudante</span>
</div>
        </div>
      </div>
    </header>
  );
}

export default Header;