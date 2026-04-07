export default function App() {
  const bg = "#0C0C16";
  const card = "#151522";
  const border = "#2A2A3A";
  const gold = "#D4B76A";
  const white = "#FFFFFF";
  const light = "#D8D8D2";
  const muted = "#9999A0";
  const green = "#3AE8B0";
  const red = "#F58080";
  const blue = "#8BAAF5";
  const teal = "#70C5B0";
  const peach = "#E09A7A";

  const mainLogo = "data:image/png;base64,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";
  const healthLogo = "data:image/png;base64,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";
  const bizLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAiCAAAAAAIDsTXAAAAAmJLR0QA/4ePzL8AAAAHdElNRQfqBAUSLCM9oal0AAADVElEQVQ4y12UbWiWVRjHf9c5536ejWc0Rxuzp7lmUpQSPIp96GURfRCkvmxSBCYsJLJpfTFBbFAxEwyL6EsQldEHNQStLBsGRkKTsLSStZriJo/m3iKN6V7u+5yrD8/9vOj16XDOj4vrf/hff1GqpYiGIAKqxogi1TepAVVCsKJy6/kWUEW9lRs/nxyeSjJtD3QutyFYqk01raA+0ct9S8v3ZvWHMxoHDek7VS7495oQV8fyzVEma+DeAU0qJGUu0UuPIoClq5iORe9C8ClZmlElmJkNg62Jgpu/c+WAioJl/OXXE1saMwWR6dmcCyDuv6R5xknaUs/fn9OSIlXVELyuP92bW5JvXxw9fFr/bMvn8/l8fkndiR07NdaQzhg01kOMdmMheiPZ+8pIqtzyTT+X1AdVNQDqkn5wCM+O9zz1fDGDGGOMMZgMbxNQMACer88QAoVTn+1adgxX+TTUs6/olBQU9iG+se/4j43veGGB2pr+kgA4UOy1QbjxEVN3H83p9cn75m8ij22REkiwI5dFsweOtzTIwuSDz9mhigNE4exsvZZA5QLGR59/YT30Pvnx8OaqUwxmYqJDBQMokxjmmjA8Pd33wosXXcWfuRns7NWKamIs48tYMbj/3bu+Iir38+TPAQmpaqEBOPXYtu/PNO6KhTktm6K96Te81JOKgTYCR7Z3TrQcbNDrEyvS/zFhzT9/mbCoGSmBhnuy83Jy5MJ37bowVdhg/yhbpecwbmFpa2qKEFQLZNj+CwgbJ/ZuPQciWB651kGGlzQOqSli3UFEXXEb665MPUPXKIiI5af3cZZvNSmDXofqcHRPHZ57MxLWjYKQ4bViA45CHEIZDIluxDn26Cpclq4xkIi18eNYx6cal/2owetYM9Zw5NccdXSNIRk6/SYixxPqQxXUWPfjLO6H83dA96ixdOmrOMvtI5pUHF4i+4mcyIHZNXRfhN3aQ+TIDKSbUFnXEOtOJOPYqrvXD60avrKabETDUV1I17Wy1yHWg83YLIXfw3zyQT1ZYeVZjTWEW5IixPr3pnoEthwqILB4z5wmZU5rsickXsfeemiRAKZ17SdXNalyWhN7KkGtymTx37n6lo7bFF+bezflI6i3RgVFfLCmJh75H1fhOekUHAxmAAAAHnRFWHRpY2M6Y29weXJpZ2h0AEdvb2dsZSBJbmMuIDIwMTasCzM4AAAAFHRFWHRpY2M6ZGVzY3JpcHRpb24Ac1JHQrqQcwcAAAAASUVORK5CYII=";

  const sec = { maxWidth: 880, margin: "0 auto", padding: "36px 20px", background: bg };
  const lbl = { fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: gold, fontWeight: 600, marginBottom: 4 };
  const h2s = { fontSize: 22, fontWeight: 700, color: white, marginBottom: 14, fontFamily: "Georgia, serif" };
  const g2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 };

  const proofs = [
    { title: "Dashboards de Lançamento", desc: "Visão de captação de leads e vendas por produto, trazendo clareza para decisões de lançamento.", urls: ["super-aguias-dashboard.vercel.app", "dadivadashfunis.lovable.app"] },
    { title: "Dashboard Integrado Hotmart", desc: "Visão geral de vendas, produtos e esteira que a Hotmart não oferece. Faturamento mês a mês simplificado.", urls: ["dadivalaunch-prod.vercel.app"] },
    { title: "Página 100% feita com IA", desc: "Landing page completa criada inteiramente por IA, sem designer ou desenvolvedor.", urls: ["super-aguias-obrigado.vercel.app"] },
    { title: "Produtos e Ferramentas com IA", desc: "Teste funcional de visão, quiz interativo, diagnóstico comercial e calculadora — todos criados com IA.", urls: ["testefuncionaldevisao.lovable.app", "quizolhosdeaguia.lovable.app", "diagnosticotimecomercial.lovable.app", "comercialpro-calculadora-oficial.lovable.app"] },
    { title: "Guia de Saúde Natural", desc: "Conteúdo educativo completo gerado por IA, pronto para distribuição.", urls: ["saude-natural-guia-completo.vercel.app"] },
    { title: "Calendário de Publicações", desc: "Análise dos conteúdos que mais performaram, benchmark e criação de calendário completo do mês + calendário de stories.", urls: ["docs.google.com/document/d/1VXqftY4mn1l-8BCL3yHJPz0GWK1j1Mzm/edit", "drive.google.com/file/d/1Bi4K4N6nALWFz3DXMRQ-6rS1fEKUgvXJ/view"] },
  ];

  return (
    <div style={{ background: bg, color: light, fontFamily: "system-ui, -apple-system, sans-serif", minHeight: "100vh", fontSize: 14, lineHeight: 1.7 }}>

      {/* NAV */}
      <div style={{ background: white, borderBottom: "1px solid #E0E0E0", padding: "10px 20px", display: "flex", alignItems: "center", gap: 10, position: "sticky", top: 0, zIndex: 10 }}>
        <img src={mainLogo} alt="Dádiva" style={{ height: 28 }} />
      </div>

      {/* HERO */}
      <div style={{ textAlign: "center", padding: "60px 20px 40px", background: bg }}>
        <img src={mainLogo} alt="Grupo Dádiva" style={{ height: 52, marginBottom: 20, background: white, padding: "8px 16px", borderRadius: 8 }} />
        <h1 style={{ fontSize: 38, fontWeight: 700, color: gold, fontFamily: "Georgia, serif", marginBottom: 2 }}>Dádiva Tech</h1>
        <p style={{ color: muted, fontSize: 12, letterSpacing: 1, marginBottom: 16, fontStyle: "italic" }}>sugestão de nome para a nova divisão</p>
        <p style={{ color: light, maxWidth: 480, margin: "0 auto 28px", fontSize: 15, lineHeight: 1.8 }}>A proposta para a nova divisão de Inteligência Artificial do Grupo Dádiva — que economiza, acelera e abre uma nova fonte de receita.</p>
        <div style={{ display: "flex", gap: 36, justifyContent: "center", flexWrap: "wrap" }}>
          {[["↓", "Redução de custos"], ["3x", "Produção"], ["24/7", "Disponível"], ["R$530/mês", "Investimento IA"]].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: gold, fontFamily: "Georgia, serif" }}>{v}</div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: muted }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* JÁ FEITO - PROVAS */}
      <div style={sec}>
        <div style={lbl}>RESULTADOS JÁ ENTREGUES</div>
        <h2 style={h2s}>O que já foi feito com IA dentro do Dádiva</h2>
        <p style={{ color: light, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>Antes mesmo de ter uma área dedicada, já foram criadas soluções reais com IA que estão em uso no grupo. Esses resultados foram alcançados com tempo dividido entre outras responsabilidades — imagine o potencial com dedicação integral.</p>
        <div style={g2}>
          {proofs.map(p => (
            <div key={p.title} style={{ background: card, border: "1px solid " + border, borderRadius: 10, padding: 16 }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: white, marginBottom: 4, fontFamily: "Georgia, serif" }}>{p.title}</h4>
              <p style={{ color: light, fontSize: 13, lineHeight: 1.6, marginBottom: 6 }}>{p.desc}</p>
              {p.urls.map(u => (
                <a key={u} href={"https://" + u} target="_blank" rel="noopener noreferrer" style={{ display: "block", color: gold, fontSize: 11, textDecoration: "none", marginBottom: 2, wordBreak: "break-all" }}>🔗 {u}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* HOJE vs DÁDIVA TECH */}
      <div style={sec}>
        <div style={lbl}>O QUE MUDA</div>
        <h2 style={h2s}>Hoje vs. com a Dádiva Tech</h2>
        <div style={g2}>
          <div style={{ background: card, border: "1px solid " + border, borderRadius: 10, padding: 18 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: white, marginBottom: 10 }}><span style={{ color: red }}>●</span> Hoje</h3>
            {[
              "À medida que queremos expandir as operações, novas contratações se fazem necessárias — elevando custos fixos.",
              "Funcionários ficam doentes, pedem demissão, são difíceis de repor. A operação fica refém de disponibilidade.",
              "Dezenas de assinaturas de software em dólar. Dados da empresa nas mãos de terceiros.",
              "Criação de anúncios e conteúdo leva dias. Análise de dados é esporádica.",
              "Sem uma área dedicada de IA, o potencial da tecnologia não é explorado de forma estruturada."
            ].map((t, i) => <div key={i} style={{ color: light, fontSize: 13, lineHeight: 1.6, marginBottom: 7, paddingLeft: 10, borderLeft: "2px solid " + border }}>{t}</div>)}
          </div>
          <div style={{ background: "#18170E", border: "2px solid " + gold, borderRadius: 10, padding: 18 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: white, marginBottom: 10 }}><span style={{ color: green }}>●</span> Com a Dádiva Tech</h3>
            {[
              "Escalar operações sem contratar proporcionalmente. A IA absorve novas demandas.",
              "Disponibilidade 24/7 real. Sem férias, licenças ou faltas. Qualidade constante.",
              "Software próprio e personalizado, dados 100% internos. Zero licenciamento externo.",
              "Anúncios em minutos. Conteúdo em horas. Relatórios automáticos e contínuos.",
              "Área estruturada com líder dedicado integralmente — negócio, marketing e engenharia de IA."
            ].map((t, i) => <div key={i} style={{ color: "#E8E8E0", fontSize: 13, lineHeight: 1.6, marginBottom: 7, paddingLeft: 10, borderLeft: "2px solid " + gold }}>{t}</div>)}
          </div>
        </div>

        {/* TABELA */}
        <div style={{ marginTop: 16, borderRadius: 10, overflow: "hidden", border: "1px solid " + border }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: "#1A1A28" }}>
                {["Processo", "Hoje", "Dádiva Tech"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "8px 10px", color: gold, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["10 variações de anúncio", "2-3 dias", "30 min"],
                ["Funil de lançamento", "1-2 semanas", "2-3 dias"],
                ["Relatório de performance", "4-6h manual", "Automático"],
                ["Conteúdo em 4 idiomas", "3-5 dias", "Mesmo dia"],
                ["Dashboard / BI", "R$500-2k/mês", "Próprio (custo zero)"],
                ["Expansão operacional", "Novas contratações", "Absorvido pela IA"],
              ].map(([p, o, n], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? card : "#111120" }}>
                  <td style={{ padding: "7px 10px", color: light, borderBottom: "1px solid #1E1E2E" }}>{p}</td>
                  <td style={{ padding: "7px 10px", color: red, fontFamily: "monospace", borderBottom: "1px solid #1E1E2E" }}>{o}</td>
                  <td style={{ padding: "7px 10px", color: green, fontFamily: "monospace", borderBottom: "1px solid #1E1E2E" }}>{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ESTRUTURA */}
      <div style={sec}>
        <div style={lbl}>ESTRUTURA</div>
        <h2 style={h2s}>Como se encaixa no grupo</h2>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div style={{ background: "#1A1A28", border: "2px solid " + gold, borderRadius: 8, padding: "8px 18px", textAlign: "center" }}>
            <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: gold, fontWeight: 600 }}>Dádiva Tech — Líder dedicado integralmente</div>
            <div style={{ fontWeight: 600, fontSize: 14, color: white }}>Negócio + Marketing + Engenharia de IA</div>
          </div>
          <div style={{ width: 1, height: 14, background: "#444" }} />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ background: "#1A1A28", border: "1px solid " + teal, borderRadius: 8, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
              <img src={healthLogo} alt="Health" style={{ width: 32, height: 32, borderRadius: "50%" }} />
              <div><div style={{ fontWeight: 700, fontSize: 12, color: teal }}>Health</div><div style={{ fontSize: 10, color: light }}>Produtos da Tatiana</div></div>
            </div>
            <div style={{ background: "#1A1A28", border: "1px solid " + peach, borderRadius: 8, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
              <img src={bizLogo} alt="Business" style={{ width: 32, height: 32, borderRadius: "50%" }} />
              <div><div style={{ fontWeight: 700, fontSize: 12, color: peach }}>Business</div><div style={{ fontSize: 10, color: light }}>Casados & Sócios</div></div>
            </div>
            <div style={{ background: "#1A1A28", border: "1px solid " + blue, borderRadius: 8, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#252540", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🏢</div>
              <div><div style={{ fontWeight: 700, fontSize: 12, color: blue }}>Hub Negócios</div><div style={{ fontSize: 10, color: light }}>Receita externa</div></div>
            </div>
          </div>
          <div style={{ width: 1, height: 14, background: "#444" }} />
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
            {["🎯 Tráfego", "📱 Social", "✍️ Conteúdo", "📊 Dados", "💻 Software", "⚙️ Automações"].map(t => (
              <div key={t} style={{ background: "#1A1A28", border: "1px solid " + border, borderRadius: 6, padding: "4px 10px", fontSize: 12, color: light }}>{t}</div>
            ))}
          </div>
        </div>
      </div>

      {/* IMPACTO */}
      <div style={sec}>
        <div style={lbl}>NA PRÁTICA</div>
        <h2 style={h2s}>O que muda em cada área</h2>
        <div style={g2}>
          {[
            { t: "🎯 Tráfego Pago", items: ["Análise de dados e growth com IA para ambas as divisões", "Plano de escala dentro do CAC ideal", "Monitoramento contínuo em 60+ países"] },
            { t: "📱 Social Media & Conteúdo", items: ["Produção de conteúdo e criativos em escala", "Conteúdo adaptado para múltiplas plataformas e idiomas", "Volume multiplicado sem novas contratações"] },
            { t: "💻 Software & Páginas", items: ["Produção de páginas e testes A/B para todas as campanhas", "Ferramentas internas que substituem assinaturas pagas", "Dados ficam na empresa — não com terceiros"] },
            { t: "📊 SDRs, Closers & Dados", items: ["Suporte de IA para equipe comercial — SDRs e Closers", "Dashboards unificados para decisões em tempo real", "Alertas automáticos quando métricas saem do padrão"] },
          ].map(c => (
            <div key={c.t} style={{ background: card, border: "1px solid " + border, borderRadius: 10, padding: 16 }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: white, marginBottom: 8, fontFamily: "Georgia, serif" }}>{c.t}</h4>
              {c.items.map((p, i) => <p key={i} style={{ color: light, fontSize: 13, lineHeight: 1.6, marginBottom: 4 }}>→ {p}</p>)}
            </div>
          ))}
        </div>
      </div>

      {/* TRANSIÇÃO */}
      <div style={sec}>
        <div style={lbl}>TRANSIÇÃO</div>
        <h2 style={h2s}>Como fica a área atual</h2>
        <div style={{ background: card, border: "1px solid " + border, borderRadius: 10, padding: 18 }}>
          <p style={{ color: light, fontSize: 14, lineHeight: 1.8, marginBottom: 8 }}>Para que a Dádiva Tech funcione com todo o potencial, é essencial que a transição da área atual de lançamentos e estratégia aconteça de forma planejada e sem impacto na operação.</p>
          <p style={{ color: light, fontSize: 14, lineHeight: 1.8, marginBottom: 8 }}>→ <strong style={{ color: white }}>Sugestão principal:</strong> A Danielle assume a frente de lançamentos e estratégia, aproveitando o conhecimento que já tem da operação e do time.</p>
          <p style={{ color: light, fontSize: 14, lineHeight: 1.8, marginBottom: 8 }}>→ <strong style={{ color: white }}>Alternativa:</strong> Caso não seja viável, pode-se pensar em trazer uma nova pessoa para essa frente, com um período de transição acompanhada.</p>
          <p style={{ color: light, fontSize: 14, lineHeight: 1.8 }}>→ <strong style={{ color: white }}>Em ambos os casos:</strong> Eu continuo disponível para apoiar a transição e garantir que nenhum processo fique descoberto durante a mudança.</p>
        </div>
      </div>

      {/* PILOTO 30 DIAS */}
      <div style={sec}>
        <div style={lbl}>PROPOSTA DE PILOTO</div>
        <h2 style={h2s}>90 dias para provar o valor — risco zero</h2>
        <div style={{ background: "#18170E", border: "2px solid " + gold, borderRadius: 10, padding: 18, marginBottom: 14 }}>
          <p style={{ color: "#E8E8E0", fontSize: 14, lineHeight: 1.8, marginBottom: 10 }}>Em 90 dias com dedicação integral à Dádiva Tech, me comprometo a entregar soluções funcionais para as seguintes frentes:</p>
          <div style={g2}>
            {[
              { icon: "🎯", t: "Tráfego Pago", d: "Análise de dados, growth e plano de escala dentro do CAC ideal." },
              { icon: "📱", t: "Social Media", d: "Produção de conteúdo e criativos em escala com IA." },
              { icon: "🤝", t: "SDRs e Closers", d: "Ferramentas de suporte para a equipe comercial." },
              { icon: "🌐", t: "Web Design", d: "Produção de páginas e testes A/B para todas as campanhas." },
            ].map(c => (
              <div key={c.t} style={{ background: card, border: "1px solid " + border, borderRadius: 8, padding: 14 }}>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: white, marginBottom: 4 }}>{c.icon} {c.t}</h4>
                <p style={{ color: light, fontSize: 13, lineHeight: 1.5 }}>{c.d}</p>
              </div>
            ))}
          </div>
          <p style={{ color: gold, fontSize: 14, lineHeight: 1.8, marginTop: 14, fontWeight: 500, textAlign: "center" }}>Se em 90 dias os resultados não forem claros, retorno à função atual sem nenhum prejuízo para a operação.</p>
        </div>
      </div>

      {/* RECEITA */}
      <div style={sec}>
        <div style={lbl}>VISÃO DE MÉDIO PRAZO</div>
        <h2 style={h2s}>De economia interna a nova receita</h2>
        <div style={{ background: card, border: "1px solid #3A4A80", borderRadius: 10, padding: 18 }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: blue, fontFamily: "Georgia, serif", marginBottom: 6 }}>A Dádiva Tech como centro de lucro</h3>
          <p style={{ color: light, fontSize: 14, lineHeight: 1.7, marginBottom: 4 }}>O grupo já tem o <strong style={{ color: white }}>Hub de Negócios</strong> com empresas de vários segmentos. A Dádiva Tech pode oferecer toda essa expertise como serviço pago: <strong style={{ color: white }}>consultorias, implementações e soluções sob demanda.</strong> Uma nova linha de faturamento para o grupo.</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
            {["🧠 Consultoria", "⚙️ Implementação", "💻 Software", "🎯 Tráfego IA", "📱 Conteúdo IA", "📊 Dashboards"].map(t => (
              <div key={t} style={{ background: "#1A1A28", border: "1px solid #3A4A80", borderRadius: 6, padding: "4px 8px", flex: 1, minWidth: 70, textAlign: "center", fontSize: 11, color: blue, fontWeight: 600 }}>{t}</div>
            ))}
          </div>
        </div>
      </div>

      {/* CRONOGRAMA */}
      <div style={sec}>
        <div style={lbl}>IMPLANTAÇÃO</div>
        <h2 style={h2s}>Cronograma de 90 dias</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            { n: "01", t: "Estruturação e primeiros resultados", d: "Implementação da IA nas áreas de maior impacto imediato e criação das primeiras soluções proprietárias." },
            { n: "02", t: "Expansão e escala", d: "Ampliação para todas as frentes de marketing e conteúdo, com volume de produção multiplicado." },
            { n: "03", t: "Operação completa", d: "Dádiva Tech operando como hub central de IA para todo o grupo, com automações e processos consolidados." },
          ].map((c, i) => (
            <div key={c.n} style={{ display: "flex", gap: 14, padding: "16px 0", borderBottom: i < 2 ? "1px solid " + border : "none" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: gold, fontFamily: "Georgia, serif", minWidth: 40 }}>{c.n}</div>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: white, marginBottom: 4 }}>{c.t}</h4>
                <p style={{ color: light, fontSize: 13, lineHeight: 1.6 }}>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DEDICAÇÃO */}
      <div style={sec}>
        <div style={lbl}>LIDERANÇA</div>
        <h2 style={h2s}>Por que dedicação integral é essencial</h2>
        <div style={{ background: card, border: "1px solid #3A3520", borderRadius: 10, padding: 18 }}>
          <p style={{ color: light, fontSize: 14, lineHeight: 1.8, marginBottom: 6 }}>A Inteligência Artificial evolui semanalmente. Para que a Dádiva Tech alcance seu máximo potencial e gere resultados consistentes para Health, Business e o Hub de Negócios, é fundamental que a área conte com <strong style={{ color: white }}>um profissional dedicado integralmente</strong> — alguém que vive a evolução da tecnologia no dia a dia e consegue traduzir isso em soluções reais para o grupo.</p>
          <p style={{ color: light, fontSize: 14, lineHeight: 1.8, marginBottom: 4 }}>→ <strong style={{ color: white }}>O negócio</strong> — entende os produtos, funis, lançamentos e a dinâmica do Grupo Dádiva</p>
          <p style={{ color: light, fontSize: 14, lineHeight: 1.8, marginBottom: 4 }}>→ <strong style={{ color: white }}>O marketing</strong> — domina tráfego, social media, conteúdo e análise de dados</p>
          <p style={{ color: light, fontSize: 14, lineHeight: 1.8, marginBottom: 4 }}>→ <strong style={{ color: white }}>A engenharia de IA</strong> — constrói prompts, automações, softwares e workflows que funcionam na prática</p>
          <p style={{ color: light, fontSize: 14, lineHeight: 1.8, marginTop: 10 }}>Com dedicação integral, a Dádiva Tech se desenvolve com a velocidade e a robustez que o grupo merece. O investimento base é de apenas <strong style={{ color: gold }}>R$530/mês</strong> na ferramenta principal (Claude) — um custo incomparavelmente menor do que contratar profissionais ou assinar múltiplas ferramentas.</p>
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", padding: "44px 20px", background: bg }}>
        <img src={mainLogo} alt="Grupo Dádiva" style={{ height: 32, marginBottom: 16, background: white, padding: "6px 12px", borderRadius: 6 }} />
        <h2 style={{ fontSize: 26, fontWeight: 700, color: white, fontFamily: "Georgia, serif", marginBottom: 8 }}>O <span style={{ color: gold }}>timing é agora</span>.</h2>
        <p style={{ color: light, fontSize: 15, maxWidth: 440, margin: "0 auto" }}>A IA está transformando mercados inteiros. Quem se posiciona primeiro, lidera. O Grupo Dádiva tem tudo para ser esse líder — e a estrutura para começar já existe.</p>
      </div>

      <div style={{ textAlign: "center", padding: 14, background: bg, borderTop: "1px solid #1A1A28", color: muted, fontSize: 10, letterSpacing: 2, textTransform: "uppercase" }}>
        Proposta Confidencial — Grupo Dádiva © 2026
      </div>
    </div>
  );
}
