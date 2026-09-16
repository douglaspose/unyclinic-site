import { Sidebar, ScreenTopBar } from "./AppWindow";

const HOURS = ["08h", "09h", "10h", "11h", "12h", "13h"];

const COLUMNS = [
  {
    nome: "Dra. Helena",
    esp: "Clínica geral",
    dot: "bg-pulse-400",
    slots: [
      { top: 0, span: 1, nome: "Marina Alves", tag: "Confirmado", tone: "pulse" },
      { top: 2, span: 1, nome: "Otávio Lima", tag: "Retorno", tone: "pulse" },
      { top: 4, span: 1, nome: "Bianca Rosa", tag: "Aguardando", tone: "amber" },
    ],
  },
  {
    nome: "Dr. Caio",
    esp: "Ortopedia",
    dot: "bg-aura-400",
    slots: [
      { top: 1, span: 2, nome: "Rafael Nunes", tag: "Em atendimento", tone: "aura" },
      { top: 4, span: 1, nome: "Sofia Prado", tag: "Confirmado", tone: "aura" },
    ],
  },
  {
    nome: "Dra. Ana",
    esp: "Nutrição",
    dot: "bg-vital-400",
    slots: [
      { top: 0, span: 1, nome: "Clara Bezerra", tag: "Concluído", tone: "vital" },
      { top: 3, span: 2, nome: "Tiago Farias", tag: "Confirmado", tone: "vital" },
    ],
  },
];

const TONES: Record<string, string> = {
  pulse: "border-pulse-500/35 bg-pulse-500/12 text-pulse-300",
  aura: "border-aura-500/35 bg-aura-500/12 text-aura-400",
  vital: "border-vital-500/30 bg-vital-500/10 text-vital-400",
  amber: "border-amber-glow/30 bg-amber-glow/10 text-amber-glow",
};

const ROW = 34;

export default function ScreenAgenda() {
  return (
    <div className="flex min-h-[380px]">
      <Sidebar active="Agenda" />

      <div className="min-w-0 flex-1">
        <ScreenTopBar
          title="Agenda"
          subtitle="Segunda-feira, 15 de setembro · 3 profissionais"
          action="Novo agendamento"
        />

        <div className="p-4">
          {/* Cabeçalho das colunas */}
          <div className="mb-2 grid grid-cols-[34px_repeat(3,1fr)] gap-2">
            <span />
            {COLUMNS.map((c) => (
              <div
                key={c.nome}
                className="flex items-center gap-1.5 rounded-md border border-ink-850 bg-ink-900/50 px-2 py-1.5"
              >
                <span className={`size-1.5 shrink-0 rounded-full ${c.dot}`} />
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-medium text-mist-200">
                    {c.nome}
                  </p>
                  <p className="truncate text-[8.5px] text-mist-600">{c.esp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Grade */}
          <div className="grid grid-cols-[34px_repeat(3,1fr)] gap-2">
            <div className="flex flex-col">
              {HOURS.map((h) => (
                <span
                  key={h}
                  className="text-[8.5px] text-mist-600 tabular-nums"
                  style={{ height: ROW }}
                >
                  {h}
                </span>
              ))}
            </div>

            {COLUMNS.map((c) => (
              <div
                key={c.nome}
                className="relative rounded-md border border-ink-850/70"
                style={{ height: ROW * HOURS.length }}
              >
                {HOURS.map((h, i) => (
                  <div
                    key={h}
                    className="absolute inset-x-0 border-t border-dashed border-ink-850/60"
                    style={{ top: i * ROW }}
                  />
                ))}

                {c.slots.map((s) => (
                  <div
                    key={s.nome}
                    className={`absolute inset-x-1 overflow-hidden rounded-[5px] border px-1.5 py-1 ${TONES[s.tone]}`}
                    style={{ top: s.top * ROW + 3, height: s.span * ROW - 6 }}
                  >
                    <p className="truncate text-[9.5px] font-medium">
                      {s.nome}
                    </p>
                    <p className="truncate text-[8px] opacity-70">{s.tag}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
