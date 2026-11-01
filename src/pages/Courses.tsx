
import { useRef, useState } from "react";
import { usePageAnimation } from "../hooks/usePageAnimation";
import ProgressBar from "../components/ProgressBar";
import { BookOpen, GraduationCap } from "lucide-react";

const courses = [
  { name: "Programação FrontEnd", teacher: "Profa. Ana", progress: 78 },
  { name: "UX/UI Design", teacher: "Prof. Carlos", progress: 64 },
  { name: "Banco de Dados", teacher: "Profa. Marina", progress: 86 },
];

function Courses() {
  const pageRef = useRef<HTMLElement>(null);
  usePageAnimation(pageRef);

  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  const averageProgress =
    courses.reduce((total, course) => total + course.progress, 0) /
    courses.length;

  return (
    <section className="page-section courses-page" ref={pageRef}>
      <div className="courses-heading">
        <div>
          <h1>Minhas disciplinas</h1>
          <p>Acompanhe suas matérias e o andamento do semestre.</p>
        </div>
        <GraduationCap size={34} />
      </div>

      <div className="courses-summary">
        <div className="courses-summary__icon">
          <BookOpen size={25} />
        </div>
        <div>
          <span>Disciplinas matriculadas</span>
          <strong>{courses.length}</strong>
        </div>
        <div className="courses-summary__average">
          <span>Progresso médio</span>
          <strong>{averageProgress.toFixed(0)}%</strong>
        </div>
      </div>

      <div className="courses-search">
        <input
          type="text"
          placeholder="Buscar disciplina..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Buscar disciplina"
        />
      </div>

      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <article
              className="course-card"
              key={course.name}
              data-animate
            >
              <div className="course-card__header">
                <div className="course-card__icon">
                  <BookOpen size={22} />
                </div>
                <span className="course-card__badge">Em andamento</span>
              </div>

              <h2>{course.name}</h2>
              <p>Docente: {course.teacher}</p>

              <ProgressBar
                label="Conteúdo concluído"
                value={course.progress}
              />

              <div className="course-card__footer">
                <span>Progresso da disciplina</span>
                <strong>{course.progress}%</strong>
              </div>
            </article>
          ))
        ) : (
          <p className="courses-empty">
            Nenhuma disciplina encontrada.
          </p>
        )}
      </div>
    </section>
  );
}

export default Courses;

