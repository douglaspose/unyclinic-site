import { Sidebar, ScreenTopBar } from "./AppWindow";

const RESUMO = [
  { label: "A receber", value: "R$ 18.940", tone: "text-pulse-300" },
  { label: "A pagar", value: "R$ 7.215", tone: "text-mist-200" },
  { label: "Saldo previsto", value: "R$ 11.725", tone: "text-vital-400" },
];

const LINHAS = [
  { paciente: "Marina Alves", desc: "Restauração 26", venc: "16/09", valor: "R$ 420,00", status: "Pago" },
  { paciente: "Rafael Nunes", desc: "Consulta ortopedia", venc: "17/09", valor: "R$ 280,00", status: "Pago" },
  { paciente: "Bianca Rosa", desc: "Pacote 4 sessões", venc: "18/09", valor: "R$ 960,00", status: "Em aberto" },
  { paciente: "Otávio Lima", desc: "Retorno + exame", venc: "12/09", valor: "R$ 340,00", status: "Vencido" },
  { paciente: "Sofia Prado", desc: "Avaliação inicial", venc: "20/09", valor: "R$ 190,00", status: "Em aberto" },
];

const STATUS: Record<string, string> = {
  Pago: "bg-vital-500/12 text-vital-400",
  "Em aberto": "bg-ink-800 text-mist-400",
  Vencido: "bg-amber-glow/12 text-amber-glow",
};

export default function ScreenFinanceiro() {
  return (
    <div className="flex min-h-[380px]">
      <Sidebar active="Financeiro" />

      <div className="min-w-0 flex-1">
        <ScreenTopBar
          title="Financeiro"
          subtitle="Setembro de 2026 · contas a receber"
          action="Lançar recebimento"
        />

        <div className="space-y-3 p-4">
          <div className="grid grid-cols-3 gap-2.5">
            {RESUMO.map((r) => (
              <div
                key={r.label}
                className="rounded-lg border border-ink-850 bg-ink-900/50 p-2.5"
              >
                <p className="text-[9.5px] text-mist-600">{r.label}</p>
                <p
                  className={`mt-1 font-display text-[14px] font-semibold ${r.tone}`}
                >
                  {r.value}
                </p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border border-ink-850 bg-ink-900/50">
            <div className="grid grid-cols-[1.4fr_1fr_0.7fr_0.8fr] gap-2 border-b border-ink-850 px-3 py-2 text-[9px] text-mist-600">
              <span>Paciente</span>
              <span className="hidden sm:block">Descrição</span>
              <span>Venc.</span>
              <span className="text-right">Valor</span>
            </div>

            {LINHAS.map((l) => (
              <div
                key={l.paciente}
                className="grid grid-cols-[1.4fr_1fr_0.7fr_0.8fr] items-center gap-2 border-b border-ink-850/50 px-3 py-2 last:border-0"
              >
                <div className="flex min-w-0 items-center gap-1.5">
                  <span className="truncate text-[10px] text-mist-200">
                    {l.paciente}
                  </span>
                  <span
                    className={`hidden shrink-0 rounded-sm px-1.5 py-px text-[8px] lg:block ${STATUS[l.status]}`}
                  >
                    {l.status}
                  </span>
                </div>
                <span className="hidden truncate text-[9.5px] text-mist-600 sm:block">
                  {l.desc}
                </span>
                <span className="text-[9.5px] text-mist-500 tabular-nums">
                  {l.venc}
                </span>
                <span className="text-right text-[10px] font-medium text-mist-100 tabular-nums">
                  {l.valor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
