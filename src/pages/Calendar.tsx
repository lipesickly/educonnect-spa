
import { useRef, useState } from "react";
import { usePageAnimation } from "../hooks/usePageAnimation";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

const monthNames = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];
const events = [
  { date: "18/09", title: "Entrega do projeto FrontEnd" },
  { date: "23/09", title: "Avaliação de UX/UI" },
  { date: "30/09", title: "Apresentação da SPA" },
];

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

function previousMonth() {
  setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
}

function nextMonth() {
  setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
}

const firstDay = new Date(currentYear, currentMonth, 1).getDay();

const daysInMonth = new Date(
  currentYear,
  currentMonth + 1,
  0
).getDate();

// Ajusta para a semana começar na segunda-feira
const startingDay = firstDay === 0 ? 6 : firstDay - 1;

const calendarDays = [
  ...Array(startingDay).fill(null),
  ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
];
  const pageRef = useRef(null);
  usePageAnimation(pageRef);

  return (
  <section className="page-section calendar-page" ref={pageRef}>
    <div className="calendar-heading">
      <div>
        <h1>Calendário acadêmico</h1>
        <p>Organize suas atividades e acompanhe seus prazos.</p>
      </div>

      <CalendarDays size={32} />
    </div>

    <div className="calendar-container">
      <div className="calendar-top">
        <button onClick={previousMonth} aria-label="Mês anterior">
          <ChevronLeft />
        </button>

        <h2>
          {monthNames[currentMonth]} de {currentYear}
        </h2>

        <button onClick={nextMonth} aria-label="Próximo mês">
          <ChevronRight />
        </button>
      </div>

      <div className="calendar-grid">
        {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day) => (
          <strong key={day}>{day}</strong>
        ))}

        {calendarDays.map((day, index) => {
  const event = events.find(
    (item) => item.date === `${String(day).padStart(2, "0")}/${String(currentMonth + 1).padStart(2, "0")}`
  );

  return (
    <div
  className={`calendar-day ${
    day === new Date().getDate() &&
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
      ? "today"
      : ""
  }`}
  key={index}
>
      {day && (
        <>
          <span>{day}</span>

          {event && (
            <small className="calendar-event">
              {event.title}
            </small>
          )}
        </>
      )}
    </div>
  );
})}
      </div>
    </div>
  </section>
  );
}

export default Calendar;
