
import { useRef } from "react";
import {
  BookOpen,
  CheckCircle2,
  TrendingUp,
  CalendarClock,
} from "lucide-react";
import { gsap } from "gsap";
import { useNavigate } from "react-router";
import AssistantChat from "../components/AssistantChat";
import StatCard from "../components/StatCard";
import { usePageAnimation } from "../hooks/usePageAnimation";

function Dashboard() {
  const pageRef = useRef<HTMLElement>(null);
  usePageAnimation(pageRef);

  const navigate = useNavigate();

  function abrirDisciplinas(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    gsap.to(event.currentTarget, {
      scale: 0.94,
      duration: 0.10,
      yoyo: true,
      repeat: 1,
      onComplete: () => navigate("/cursos"),
    });
  }

  return (
    <section className="page" ref={pageRef}>
      <section className="hero" data-animate>
        <div>
          <span className="hero__tag">Portal Acadêmico</span>

          <h1>Sua vida acadêmica em um único lugar.</h1>

          <p>
            Acompanhe disciplinas, atividades, notas e eventos acadêmicos
            em uma experiência rápida, organizada e responsiva.
          </p>

          <button
            className="button-primary"
            type="button"
            onClick={abrirDisciplinas}
          >
            Ver disciplinas
          </button>
        </div>

        <div className="hero__image">
          <img
            src="/assets/estudo.gif"
            alt="Estudante utilizando uma plataforma digital de estudos"
          />
        </div>
      </section>

      <section className="stats-grid" aria-label="Resumo acadêmico">
        <StatCard
          icon={<BookOpen size={21} />}
          value="6"
          label="Disciplinas"
        />

        <StatCard
          icon={<CheckCircle2 size={21} />}
          value="82%"
          label="Atividades concluídas"
        />

        <StatCard
          icon={<TrendingUp size={21} />}
          value="8,7"
          label="Média geral"
        />
      </section>

      <section className="stat-card next-activity" data-animate>
        <div className="stat-card__icon">
          <CalendarClock />
        </div>

        <h2>Próxima atividade</h2>
        <p>Entrega do projeto de FrontEnd</p>
        <p>
          <strong>Prazo:</strong> 20 de outubro de 2026
        </p>
      </section>

      <AssistantChat />
    </section>
  );
}

export default Dashboard;
