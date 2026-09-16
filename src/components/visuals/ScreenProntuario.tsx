import { Sidebar, ScreenTopBar } from "./AppWindow";
import Icon from "../ui/Icon";

const TABS = ["Resumo", "Procedimentos", "Orçamentos", "Documentos"];

const TIMELINE = [
  {
    data: "12 set 2026",
    titulo: "Limpeza e profilaxia",
    prof: "Dra. Helena",
    status: "Concluído",
  },
  {
    data: "28 ago 2026",
    titulo: "Restauração — dente 26",
    prof: "Dr. Caio",
    status: "Concluído",
  },
  {
    data: "10 ago 2026",
    titulo: "Avaliação inicial + radiografia",
    prof: "Dra. Helena",
    status: "Concluído",
  },
];

export default function ScreenProntuario() {
  return (
    <div className="flex min-h-[380px]">
      <Sidebar active="Pacientes" />

      <div className="min-w-0 flex-1">
        <ScreenTopBar
          title="Marina Alves"
          subtitle="34 anos · Paciente desde mar/2024 · Retorno em 12 dias"
          action="Novo procedimento"
        />

        <div className="p-4">
          {/* Abas */}
          <div className="mb-3 flex gap-1 border-b border-ink-850">
            {TABS.map((t, i) => (
              <span
                key={t}
                className={`-mb-px border-b px-2.5 py-1.5 text-[10px] ${
                  i === 1
                    ? "border-pulse-400 font-medium text-pulse-300"
                    : "border-transparent text-mist-600"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="grid gap-2.5 lg:grid-cols-[1.5fr_1fr]">
            {/* Histórico consolidado */}
            <div className="rounded-lg border border-ink-850 bg-ink-900/50 p-3">
              <p className="mb-2.5 text-[10.5px] font-medium text-mist-300">
                Histórico de procedimentos
              </p>

              <div className="relative space-y-2.5 pl-4">
                <span className="absolute top-1.5 bottom-1.5 left-[5px] w-px bg-ink-800" />
                {TIMELINE.map((item) => (
                  <div key={item.titulo} className="relative">
                    <span className="absolute top-1 -left-[15px] size-[9px] rounded-full border-2 border-ink-900 bg-pulse-400" />
                    <p className="text-[8.5px] text-mist-600">{item.data}</p>
                    <p className="text-[10.5px] text-mist-100">{item.titulo}</p>
                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="text-[8.5px] text-mist-600">
                        {item.prof}
                      </span>
                      <span className="rounded-sm bg-vital-500/10 px-1 py-px text-[8px] text-vital-400">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              {/* Orçamento vinculado */}
              <div className="rounded-lg border border-pulse-500/25 bg-pulse-500/6 p-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[10.5px] font-medium text-mist-200">
                      Orçamento #0412
                    </p>
                    <p className="text-[8.5px] text-mist-600">
                      3 procedimentos · aprovado
                    </p>
                  </div>
                  <span className="rounded-sm bg-vital-500/15 px-1.5 py-0.5 text-[8px] text-vital-400">
                    Aprovado
                  </span>
                </div>
                <p className="mt-2 font-display text-[15px] font-semibold text-mist-50">
                  R$ 1.860,00
                </p>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-ink-850">
                  <span className="block h-full w-2/3 rounded-full bg-linear-to-r from-pulse-500 to-pulse-300" />
                </div>
                <p className="mt-1 text-[8.5px] text-mist-600">
                  2 de 3 etapas concluídas
                </p>
              </div>

              {/* Documentos */}
              <div className="rounded-lg border border-ink-850 bg-ink-900/50 p-3">
                <p className="mb-2 text-[10.5px] font-medium text-mist-300">
                  Documentos
                </p>
                {["Anamnese assinada", "Termo de consentimento", "Recibo set/2026"].map(
                  (d) => (
                    <div
                      key={d}
                      className="flex items-center gap-1.5 py-1 text-[9.5px] text-mist-400"
                    >
                      <Icon
                        name="document"
                        size={11}
                        className="shrink-0 text-mist-600"
                      />
                      <span className="truncate">{d}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
