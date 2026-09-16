import { Sidebar, ScreenTopBar } from "./AppWindow";

const KPIS = [
  { label: "Pacientes ativos", value: "1.248", delta: "+38 no mês", up: true },
  { label: "Atendimentos hoje", value: "18", delta: "4 aguardando", up: true },
  { label: "Faturamento do mês", value: "R$ 42.380", delta: "+12,4%", up: true },
  { label: "Inadimplência", value: "R$ 3.120", delta: "7 títulos", up: false },
];

/** Receita x despesa dos últimos 7 meses, em milhares. */
const BARS = [
  { m: "Mar", receita: 62, despesa: 38 },
  { m: "Abr", receita: 70, despesa: 41 },
  { m: "Mai", receita: 58, despesa: 36 },
  { m: "Jun", receita: 79, despesa: 44 },
  { m: "Jul", receita: 86, despesa: 47 },
  { m: "Ago", receita: 74, despesa: 43 },
  { m: "Set", receita: 92, despesa: 49 },
];

const NEXT = [
  { h: "14:00", nome: "Marina Alves", tipo: "Retorno", cor: "bg-pulse-400" },
  { h: "14:40", nome: "Rafael Nunes", tipo: "Avaliação", cor: "bg-aura-400" },
  { h: "15:20", nome: "Clara Bezerra", tipo: "Consulta", cor: "bg-vital-400" },
  { h: "16:00", nome: "Otávio Lima", tipo: "Retorno", cor: "bg-pulse-400" },
];

export default function ScreenDashboard() {
  return (
    <div className="flex min-h-[380px]">
      <Sidebar active="Dashboard" />

      <div className="min-w-0 flex-1">
        <ScreenTopBar
          title="Bom dia, Dra. Helena"
          subtitle="Segunda-feira, 15 de setembro"
          action="Novo agendamento"
        />

        <div className="space-y-3 p-4">
          {/* KPIs */}
          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {KPIS.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-lg border border-ink-850 bg-ink-900/50 p-2.5"
              >
                <p className="text-[9.5px] text-mist-600">{kpi.label}</p>
                <p className="mt-1 font-display text-[15px] font-semibold text-mist-50">
                  {kpi.value}
                </p>
                <p
                  className={`mt-0.5 text-[9px] ${
                    kpi.up ? "text-vital-400" : "text-amber-glow"
                  }`}
                >
                  {kpi.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-2.5 lg:grid-cols-[1.55fr_1fr]">
            {/* Receita x despesa */}
            <div className="rounded-lg border border-ink-850 bg-ink-900/50 p-3">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10.5px] font-medium text-mist-300">
                  Receita x despesa
                </p>
                <div className="flex gap-2.5">
                  <span className="flex items-center gap-1 text-[9px] text-mist-600">
                    <span className="size-1.5 rounded-xs bg-pulse-400" />
                    Receita
                  </span>
                  <span className="flex items-center gap-1 text-[9px] text-mist-600">
                    <span className="size-1.5 rounded-xs bg-ink-700" />
                    Despesa
                  </span>
                </div>
              </div>

              <div className="flex h-[108px] items-end justify-between gap-2">
                {BARS.map((b) => (
                  <div
                    key={b.m}
                    className="flex flex-1 flex-col items-center gap-1.5"
                  >
                    <div className="flex h-[88px] w-full items-end justify-center gap-[3px]">
                      <span
                        className="w-1/2 max-w-[11px] rounded-t-[3px] bg-linear-to-t from-pulse-600 to-pulse-400"
                        style={{ height: `${b.receita}%` }}
                      />
                      <span
                        className="w-1/2 max-w-[11px] rounded-t-[3px] bg-ink-700"
                        style={{ height: `${b.despesa}%` }}
                      />
                    </div>
                    <span className="text-[8.5px] text-mist-600">{b.m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Próximos atendimentos */}
            <div className="rounded-lg border border-ink-850 bg-ink-900/50 p-3">
              <p className="mb-2.5 text-[10.5px] font-medium text-mist-300">
                Próximos atendimentos
              </p>
              <div className="space-y-1.5">
                {NEXT.map((n) => (
                  <div
                    key={n.h}
                    className="flex items-center gap-2 rounded-md bg-ink-950/50 px-2 py-1.5"
                  >
                    <span className={`h-6 w-[2.5px] rounded-full ${n.cor}`} />
                    <span className="w-8 shrink-0 text-[9.5px] font-medium text-mist-400 tabular-nums">
                      {n.h}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[10px] text-mist-200">
                        {n.nome}
                      </p>
                      <p className="text-[8.5px] text-mist-600">{n.tipo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
