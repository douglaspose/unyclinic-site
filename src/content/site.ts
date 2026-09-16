/* ============================================================================
   FONTE ÚNICA DE CONTEÚDO
   Todo o texto do site vive aqui. Para ajustar copy, preço ou módulo,
   edite este arquivo — nenhum componente precisa ser tocado.

   Todo o conteúdo abaixo foi confirmado com o cliente.
   ========================================================================== */

export const brand = {
  name: "Unyclinic",
  tagline: "Sistema de gestão para clínicas",
  email: "contato@unyclinic.com.br",
  legal:
    "Sistema de gestão para clínicas médicas, odontológicas, estéticas e de fisioterapia.",
  copyright: "© 2026 Unyclinic. Todos os direitos reservados.",
};

export const whatsapp = {
  /** Como o número aparece para o visitante. */
  display: "(62) 99185-9090",
  /** Formato exigido pelo wa.me: código do país + DDD + número, sem símbolos. */
  e164: "5562991859090",
  message: "Olá! Tenho uma clínica e gostaria de conhecer o Unyclinic.",
  cta: "Chamar no WhatsApp",
  floating: "Falar no WhatsApp",
};

/** wa.me funciona no celular e no WhatsApp Web, sem depender de app instalado. */
export const whatsappHref = `https://wa.me/${whatsapp.e164}?text=${encodeURIComponent(
  whatsapp.message,
)}`;

export const nav = {
  links: [
    { label: "Recursos", href: "#recursos" },
    { label: "Por dentro", href: "#produto" },
    { label: "Multi-clínica", href: "#multiclinica" },
    { label: "Planos", href: "#planos" },
    { label: "Dúvidas", href: "#faq" },
  ],
  ctaLabel: "Ver planos",
  ctaHref: "#planos",
  clientLabel: "Já é cliente?",
};

export const hero = {
  eyebrow: "Sistema de gestão para clínicas",
  titleLines: ["Sua clínica organizada,", "do agendamento", "ao financeiro"],
  highlightLine: 2,
  subtitle:
    "Agenda, prontuário, financeiro e recontato de pacientes no mesmo lugar. Cada clínica com seu próprio endereço, seu próprio login e seu próprio banco de dados.",
  primaryCta: { label: "Ver planos e preços", href: "#planos" },
  secondaryCta: { label: "Conhecer os recursos", href: "#recursos" },
  footnote: "Roda inteiro no navegador. Sem instalar programa nenhum.",
};

export const segmentsStrip = [
  "Clínicas médicas",
  "Odontologia",
  "Estética",
  "Fisioterapia",
  "Consultórios individuais",
  "Clínicas com equipe",
];

export const pains = {
  eyebrow: "O dia a dia hoje",
  title: "A clínica funciona. A gestão dela é que não.",
  subtitle:
    "Nenhum desses problemas aparece de uma vez. Eles se acumulam até virar rotina — e aí ninguém mais lembra que dá pra ser diferente.",
  items: [
    {
      title: "A agenda mora em três lugares",
      body: "Papel, planilha e conversa de WhatsApp. Quando um paciente remarca, nem todo mundo da equipe fica sabendo.",
    },
    {
      title: "O retorno do paciente se perde",
      body: "Ninguém lembra de chamar quem já passou do prazo de voltar. O paciente some e você só percebe meses depois.",
    },
    {
      title: "O financeiro só aparece no fim do mês",
      body: "Contas a receber espalhadas, inadimplência invisível e fluxo de caixa decidido no chute.",
    },
    {
      title: "Todo mundo enxerga tudo",
      body: "Sem perfil de acesso, não existe separação entre o que a recepção precisa ver e o que é prontuário.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "Como começa",
  title: "Três passos até a clínica inteira num lugar só",
  steps: [
    {
      n: "01",
      title: "Sua clínica ganha um endereço próprio",
      body: "suaclinica.unyclinic.com.br, com banco de dados separado e login independente das outras clínicas.",
    },
    {
      n: "02",
      title: "Você cadastra a equipe e abre a agenda",
      body: "Cada profissional com a sua especialidade, a sua cor na agenda e a permissão certa para o perfil dele.",
    },
    {
      n: "03",
      title: "O dia a dia passa a acontecer numa tela só",
      body: "Agendamento, atendimento, prontuário, recibo e financeiro deixam de ser quatro sistemas diferentes.",
    },
  ],
};

export type FeatureIcon =
  | "gauge"
  | "calendar"
  | "folder"
  | "wallet"
  | "repeat"
  | "chat"
  | "users"
  | "document"
  | "chart"
  | "shield"
  | "lock"
  | "sparkle";

export type FeatureItem = {
  id: string;
  title: string;
  body: string;
  icon: FeatureIcon;
  /** Ocupa duas colunas no bento grid (lg+). */
  span?: "wide";
  accent?: boolean;
};

export const features = {
  eyebrow: "Recursos",
  title: "Tudo que a sua clínica usa no dia a dia",
  subtitle:
    "Doze módulos que cobrem o ciclo inteiro: do primeiro agendamento ao fechamento do caixa.",
  items: [
    {
      id: "dashboard",
      title: "Dashboard",
      body: "Pacientes ativos, atendimentos do dia, faturamento, inadimplência e receita x despesa logo na abertura do sistema.",
      icon: "gauge" as FeatureIcon,
      span: "wide" as const,
    },
    {
      id: "agenda",
      title: "Agenda",
      body: "Agendamento por profissional, troca rápida de status e remarcação sem retrabalho.",
      icon: "calendar" as FeatureIcon,
    },
    {
      id: "prontuario",
      title: "Pacientes e prontuário",
      body: "Ficha completa, histórico de procedimentos com visão consolidada e orçamentos.",
      icon: "folder" as FeatureIcon,
    },
    {
      id: "financeiro",
      title: "Financeiro",
      body: "Contas a pagar e a receber, marcação de pagamento e resumo de fluxo de caixa.",
      icon: "wallet" as FeatureIcon,
    },
    {
      id: "recontatos",
      title: "Recontatos",
      body: "Lista os pacientes com retorno perto do prazo, antes que eles sumam.",
      icon: "repeat" as FeatureIcon,
    },
    {
      id: "whatsapp",
      title: "WhatsApp integrado",
      body: "Recontato e confirmação de retorno com a mensagem já pronta para enviar.",
      icon: "chat" as FeatureIcon,
      span: "wide" as const,
      accent: true,
    },
    {
      id: "equipe",
      title: "Profissionais e equipe",
      body: "Cadastro da equipe com especialidade, cor na agenda e permissões por perfil.",
      icon: "users" as FeatureIcon,
    },
    {
      id: "documentos",
      title: "Atestado, recibo e consentimentos",
      body: "Emissão com histórico, anamnese e termos de consentimento guardados junto do paciente.",
      icon: "document" as FeatureIcon,
    },
    {
      id: "relatorios",
      title: "Relatórios",
      body: "Relatórios gerais e comparativos por profissional, para decidir com número e não com impressão.",
      icon: "chart" as FeatureIcon,
    },
    {
      id: "perfis",
      title: "Perfis de acesso",
      body: "Administrador e Secretária, cada um vendo só o que faz sentido para a função.",
      icon: "shield" as FeatureIcon,
    },
    {
      id: "isolamento",
      title: "Isolamento total",
      body: "Cada clínica tem o seu próprio banco de dados, fisicamente separado dos demais.",
      icon: "lock" as FeatureIcon,
    },
    {
      id: "generico",
      title: "Genérico por natureza",
      body: "Serve para clínica médica, odontológica, estética ou de fisioterapia sem adaptação forçada.",
      icon: "sparkle" as FeatureIcon,
      span: "wide" as const,
    },
  ] as FeatureItem[],
};

export const showcase = {
  eyebrow: "Por dentro",
  title: "O sistema, tela por tela",
  subtitle:
    "Role para percorrer os quatro módulos que sustentam a rotina da clínica.",
  /** Aviso exibido só no celular, onde a tela do sistema rola na horizontal. */
  mobileHint: "Arraste a tela para o lado para ver por inteiro",
  screens: [
    {
      id: "dashboard",
      label: "Dashboard",
      title: "O dia da clínica em uma tela",
      body: "Pacientes ativos, atendimentos de hoje, faturamento do mês, inadimplência e a comparação entre receita e despesa. É a primeira coisa que aparece ao entrar.",
      bullets: ["Faturamento do mês", "Inadimplência à vista", "Receita x despesa"],
    },
    {
      id: "agenda",
      label: "Agenda",
      title: "Agendamento por profissional, sem conflito",
      body: "Cada profissional com a sua cor e a sua coluna. Mudar o status de um atendimento ou remarcar leva um clique — e a equipe inteira vê a mesma coisa.",
      bullets: ["Coluna por profissional", "Status em um clique", "Remarcação sem retrabalho"],
    },
    {
      id: "prontuario",
      label: "Prontuário",
      title: "O histórico do paciente, consolidado",
      body: "Ficha completa, procedimentos já realizados numa visão única e orçamentos vinculados ao mesmo paciente. Nada de procurar em pasta ou caderno.",
      bullets: ["Histórico consolidado", "Orçamentos vinculados", "Anamnese e consentimentos"],
    },
    {
      id: "financeiro",
      label: "Financeiro",
      title: "Contas a pagar, a receber e o caixa",
      body: "Marque o pagamento no momento em que ele acontece e veja o resumo de fluxo de caixa acompanhar. O fechamento do mês deixa de ser uma reconstrução.",
      bullets: ["A pagar e a receber", "Baixa de pagamento", "Resumo de fluxo"],
    },
  ],
};

export const multiclinic = {
  eyebrow: "Arquitetura",
  title: "Multi-clínica de verdade, não filtro por coluna",
  subtitle:
    "Cada clínica atendida pelo Unyclinic tem o próprio subdomínio e o próprio banco de dados, fisicamente separado dos das outras clínicas.",
  pillars: [
    {
      title: "Endereço próprio",
      body: "suaclinica.unyclinic.com.br. O acesso da sua equipe nunca passa pela porta de outra clínica.",
      icon: "globe" as const,
    },
    {
      title: "Banco de dados separado",
      body: "Separação física, não lógica. Os dados de uma clínica não convivem na mesma tabela dos de outra.",
      icon: "database" as const,
    },
    {
      title: "Login independente",
      body: "O cadastro de usuários é por clínica. Uma credencial vale só dentro do endereço a que pertence.",
      icon: "key" as const,
    },
    {
      title: "Sessão protegida",
      body: "Sessão mantida em cookie e senha guardada com hash — nunca em texto aberto.",
      icon: "lock" as const,
    },
  ],
};

export const segments = {
  eyebrow: "Para quem é",
  title: "Genérico por natureza, específico na prática",
  subtitle:
    "O sistema não foi desenhado para uma especialidade e depois adaptado às outras.",
  tabs: [
    {
      id: "medica",
      label: "Clínica médica",
      headline: "Consulta, retorno e documento no mesmo fluxo",
      bullets: [
        "Agenda por profissional com especialidade definida",
        "Prontuário com anamnese e histórico consolidado",
        "Atestado e recibo emitidos direto do atendimento",
        "Recontato dos pacientes com retorno previsto",
      ],
    },
    {
      id: "odonto",
      label: "Odontologia",
      headline: "Orçamento aprovado vira tratamento acompanhado",
      bullets: [
        "Orçamentos vinculados à ficha do paciente",
        "Histórico de procedimentos em visão consolidada",
        "Termos de consentimento guardados com o paciente",
        "Odontograma disponível como add-on, sob consulta",
      ],
    },
    {
      id: "estetica",
      label: "Estética",
      headline: "Protocolo em sessões, sem perder o cliente no meio",
      bullets: [
        "Recontato de quem está perto do prazo de retorno",
        "Confirmação por WhatsApp com mensagem pronta",
        "Financeiro com contas a receber por paciente",
        "Relatórios comparativos por profissional",
      ],
    },
    {
      id: "fisio",
      label: "Fisioterapia",
      headline: "Séries longas pedem agenda e evolução no mesmo lugar",
      bullets: [
        "Agenda recorrente por profissional",
        "Histórico de evolução dentro do prontuário",
        "Lista de espera para encaixar cancelamentos",
        "Controle de sessões e pagamentos por paciente",
      ],
    },
  ],
};

export type Plan = {
  id: string;
  name: string;
  audience: string;
  price: number;
  badge?: string;
  features: string[];
  cta: string;
  featured: boolean;
};

export const pricing = {
  eyebrow: "Planos",
  title: "Planos que acompanham sua clínica",
  subtitle: "Troque de plano quando a equipe crescer.",
  annualNote: "2 meses grátis",
  monthlyLabel: "Mensal",
  annualLabel: "Anual",
  plans: [
    {
      id: "essential",
      name: "Unyclinic Essential",
      audience: "Para quem atende sozinho",
      price: 199,
      features: [
        "Agenda com confirmação",
        "Pacientes e prontuário",
        "Financeiro",
        "Recontatos com WhatsApp",
        "Atestado e recibo",
        "1 profissional",
      ],
      cta: "Começar com o Essential",
      featured: false,
    },
    {
      id: "professional",
      name: "Unyclinic Professional",
      audience: "Para clínicas com equipe",
      price: 299,
      badge: "Mais popular",
      features: [
        "Tudo do Essential",
        "Profissionais ilimitados",
        "Gestão de equipe",
        "Lista de espera",
        "Relatórios por profissional",
        "Log de acesso",
      ],
      cta: "Começar com o Professional",
      featured: true,
    },
  ] as Plan[],
  addon: "Odontograma disponível como add-on, sob consulta.",
};

export const faq = {
  eyebrow: "Dúvidas",
  title: "Perguntas frequentes",
  subtitle: "O que os gestores perguntam antes de decidir.",
  items: [
    {
      q: "Cada clínica precisa instalar alguma coisa?",
      a: "Não. O Unyclinic roda inteiro no navegador — cada clínica acessa pelo próprio endereço (ex: suaclinica.unyclinic.com.br), sem instalar programa nenhum. Funciona em computador, tablet ou celular.",
    },
    {
      q: "Os dados de cada clínica ficam misturados?",
      a: "Não. Cada clínica tem seu próprio banco de dados, fisicamente separado dos das outras. Não é uma tabela compartilhada filtrada por clínica — é isolamento de verdade, o que também significa que um problema numa clínica nunca afeta o banco de outra.",
    },
    {
      q: "Dá para trocar de plano depois?",
      a: "Sim, a qualquer momento. O Essential é pensado para quem trabalha sozinho; o Professional libera gestão de equipe com múltiplos logins, lista de espera, relatórios por profissional e log de acesso.",
    },
    {
      q: "O envio de WhatsApp é automático?",
      a: "O sistema já deixa a mensagem pronta (por exemplo, para lembrar um paciente de retornar) e abre o WhatsApp Web ou o aplicativo — quem confirma o envio é você, com um clique. Não há disparo automático em massa.",
    },
    {
      q: "Consigo emitir atestado, recibo e prontuário pelo sistema?",
      a: "Sim. Atestado (com histórico dos já emitidos), recibo e prontuário completo por paciente já fazem parte do sistema, junto com anamnese e termos de consentimento.",
    },
  ],
};

export const finalCta = {
  title: "Pronto para organizar sua clínica?",
  subtitle: "Fale com a gente pra conhecer o sistema por dentro.",
  primary: { label: "Falar com a gente", href: "#contato" },
  secondary: { label: "Ver planos", href: "#planos" },
  note: "Resposta no mesmo dia útil.",
};

export const footer = {
  columns: [
    {
      title: "Produto",
      links: [
        { label: "Recursos", href: "#recursos" },
        { label: "Por dentro", href: "#produto" },
        { label: "Multi-clínica", href: "#multiclinica" },
        { label: "Planos", href: "#planos" },
      ],
    },
    {
      title: "Para quem",
      links: [
        { label: "Clínicas médicas", href: "#segmentos" },
        { label: "Odontologia", href: "#segmentos" },
        { label: "Estética", href: "#segmentos" },
        { label: "Fisioterapia", href: "#segmentos" },
      ],
    },
    {
      title: "Suporte",
      links: [
        { label: "Perguntas frequentes", href: "#faq" },
        { label: "Falar com a gente", href: "#contato" },
      ],
    },
  ],
  clientNote: "Já é cliente? Acesse pelo endereço da sua clínica.",
};
