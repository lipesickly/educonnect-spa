
import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Home,
  User,
  Clock,
  Wallet,
  ClipboardList,
  Library,
} from "lucide-react";

import { NavLink } from "react-router";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <GraduationCap size={28} />
        <strong>EduConnect</strong>
      </div>

      <nav className="sidebar__nav" aria-label="Navegação principal">
        <NavLink to="/dashboard" className="sidebar__link">
          <Home size={19} />
          <span>Início</span>
        </NavLink>

        <NavLink to="/cursos" className="sidebar__link">
          <BookOpen size={19} />
          <span>Disciplinas</span>
        </NavLink>

        <NavLink to="/atividades" className="sidebar__link">
          <ClipboardList size={19} />
          <span>Atividades</span>
        </NavLink>

        <NavLink to="/materiais" className="sidebar__link">
          <Library size={19} />
          <span>Materiais</span>
        </NavLink>

        <NavLink to="/notas" className="sidebar__link">
          <GraduationCap size={19} />
          <span>Notas</span>
        </NavLink>

        <NavLink to="/calendario" className="sidebar__link">
          <CalendarDays size={19} />
          <span>Calendário</span>
        </NavLink>

        <NavLink to="/horarios" className="sidebar__link">
          <Clock size={19} />
          <span>Horários</span>
        </NavLink>

        <NavLink to="/financeiro" className="sidebar__link">
          <Wallet size={19} />
          <span>Financeiro</span>
        </NavLink>

        <NavLink to="/perfil" className="sidebar__link">
          <User size={19} />
          <span>Perfil</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
