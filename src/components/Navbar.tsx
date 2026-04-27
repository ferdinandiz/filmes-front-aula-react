import type { ThemeOption } from '../config/themes';

interface NavbarProps {
  themes: ThemeOption[];
  selectedThemeId: string;
  onThemeChange: (themeId: string) => void;
}

function Navbar({ themes, selectedThemeId, onThemeChange }: NavbarProps) {
  return (
    <header className="topbar">
      <div>
        <p className="brand-kicker">React + TypeScript + CRUD</p>
        <h1>Cadastro de Filmes</h1>
        <span className="brand-subtitle">Front desenvolvido para conversar com o back em Spring Boot</span>
      </div>

      <div className="theme-switcher">
        <label htmlFor="themeSelect">Tema da paleta</label>
        <select
          id="themeSelect"
          value={selectedThemeId}
          onChange={(event) => onThemeChange(event.target.value)}
        >
          {themes.map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

export default Navbar;
