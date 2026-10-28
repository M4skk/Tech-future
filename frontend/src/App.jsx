import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";

const palestrantes = [
  {
    iniciais: "MC",
    nome: "Marina Costa",
    cargo: "VP de Produto, Nubank",
    cor: "lilas",
  },
  {
    iniciais: "RA",
    nome: "Rafael Almeida",
    cargo: "Pesquisador de IA, Google",
    cor: "laranja",
  },
  {
    iniciais: "JL",
    nome: "Joana Lima",
    cargo: "Fundadora, Estúdio Futuro",
    cor: "azul",
  },
];

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Tech Future, página inicial">
        <span className="brand-mark">T<span>F</span></span>
        <span>tech<span className="brand-light">future</span></span>
      </Link>
      <nav className="main-nav" aria-label="Navegação principal">
        <NavLink to="/" end>O evento</NavLink>
        <NavLink to="/inscritos">Inscritos</NavLink>
      </nav>
      <Link className="button button-small button-outline" to="/inscricao">
        Garanta sua vaga <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <Link className="brand" to="/">
        <span className="brand-mark">T<span>F</span></span>
        <span>tech<span className="brand-light">future</span></span>
      </Link>
      <p>Ideias que movem o amanhã. © 2026 Tech Future</p>
      <a href="mailto:oi@techfuture.com.br">oi@techfuture.com.br</a>
    </footer>
  );
}

function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow"><span className="status-dot" /> 2ª EDIÇÃO · SÃO PAULO</div>
            <h1>O futuro não<br />se <span>assiste.</span><br />Se constrói.</h1>
            <p className="hero-copy">
              Um dia inteiro de ideias, encontros e conversas sobre a tecnologia
              que está redesenhando o nosso jeito de viver.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/inscricao">
                Inscreva-se <span aria-hidden="true">↗</span>
              </Link>
              <a className="text-link" href="#sobre">Descubra o evento <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="orbit-core"><span>TF</span></div>
            <div className="art-label art-label-top">IDEIAS EM<br />MOVIMENTO</div>
            <div className="art-label art-label-bottom">23°33&apos;S 46°38&apos;W</div>
            <span className="art-star star-one">✳</span>
            <span className="art-star star-two">✳</span>
          </div>
          <div className="hero-bottom">
            <span>UM ENCONTRO PARA QUEM FAZ ACONTECER</span>
            <span>ROLE PARA EXPLORAR <span aria-hidden="true">↓</span></span>
          </div>
        </section>

        <section className="event-facts" aria-label="Informações do evento">
          <div><span className="fact-label">QUANDO</span><strong>22 de agosto, 2026</strong><span>sábado · 9h às 19h</span></div>
          <div><span className="fact-label">ONDE</span><strong>Arca, São Paulo</strong><span>Vila Leopoldina · SP</span></div>
          <div><span className="fact-label">PARA QUEM</span><strong>Curiosos por natureza</strong><span>Vagas limitadas · 400 pessoas</span></div>
          <div className="fact-price"><span className="fact-label">INGRESSOS A PARTIR DE</span><strong>R$ 49<span>,00</span></strong><Link to="/inscricao">Escolha o seu <span aria-hidden="true">↗</span></Link></div>
        </section>

        <section className="about-section section-wrap" id="sobre">
          <div className="section-kicker">01 / SOBRE O EVENTO</div>
          <div className="about-content">
            <h2>Um dia para<br />pensar <span>além.</span></h2>
            <div>
              <p>
                A tecnologia muda tudo — mas são as pessoas que decidem para
                onde. O Tech Future reúne quem está fazendo as perguntas certas
                e criando respostas que importam.
              </p>
              <p>
                Um encontro sem fórmulas prontas, com conversas honestas sobre
                inteligência artificial, criatividade, impacto e os futuros que
                queremos construir juntos.
              </p>
              <Link className="text-link dark-link" to="/inscricao">Faça parte dessa conversa <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="topic-list">
            <span>INTELIGÊNCIA ARTIFICIAL</span><span>FUTURO DO TRABALHO</span><span>DESIGN &amp; CRIATIVIDADE</span><span>TECNOLOGIA COM IMPACTO</span>
          </div>
        </section>

        <section className="speakers-section">
          <div className="section-wrap">
            <div className="section-kicker">02 / QUEM VEM</div>
            <div className="speakers-heading"><h2>Gente que está<br />fazendo <span>o futuro.</span></h2><p>Ideias diferentes. Experiências reais.<br />Uma conversa que vale o dia.</p></div>
            <div className="speaker-grid">
              {palestrantes.map((palestrante, index) => (
                <article className="speaker-card" key={palestrante.nome}>
                  <div className={`speaker-portrait ${palestrante.cor}`}>
                    <span className="portrait-index">0{index + 1}</span>
                    <span className="portrait-initials">{palestrante.iniciais}</span>
                    <span className="portrait-spark" aria-hidden="true">✳</span>
                  </div>
                  <h3>{palestrante.nome}</h3>
                  <p>{palestrante.cargo}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-cta">
          <div className="section-kicker">03 / SEU PRÓXIMO PASSO</div>
          <h2>O próximo capítulo<br />também é <span>seu.</span></h2>
          <p>Um dia. Novas ideias. Possibilidades sem fim.</p>
          <Link className="button button-dark" to="/inscricao">Inscreva-se agora <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Inscricao() {
  const navigate = useNavigate();
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function enviarInscricao(event) {
    event.preventDefault();
    setErro("");
    setEnviando(true);
    const dados = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const resposta = await fetch("/inscricoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      const resultado = await resposta.json();
      if (!resposta.ok) {
        throw new Error(resultado.mensagem || "Não foi possível concluir a inscrição.");
      }
      navigate("/inscritos", { state: { inscricaoConcluida: true } });
    } catch (error) {
      setErro(error.message || "Não foi possível conectar à API. Verifique se o backend está em execução.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="form-page">
      <div className="form-aside">
        <div className="section-kicker">TECH FUTURE · 22 AGO 2026</div>
        <h1>Uma ideia<br />pode mudar<br /><span>tudo.</span></h1>
        <p>Reserve seu lugar na conversa sobre o futuro que estamos construindo.</p>
        <div className="aside-note"><span className="status-dot" /> Vagas limitadas a 400 pessoas</div>
        <div className="aside-decoration" aria-hidden="true">TF</div>
      </div>
      <section className="form-content">
        <Link className="back-link" to="/">← Voltar ao evento</Link>
        <div className="form-heading">
          <span className="section-kicker">SUA INSCRIÇÃO</span>
          <h2>Vem com a gente.</h2>
          <p>Preencha seus dados para garantir seu ingresso.</p>
        </div>
        <form className="registration-form" onSubmit={enviarInscricao}>
          <label htmlFor="nome">Nome completo <span>*</span></label>
          <input id="nome" name="nome" autoComplete="name" placeholder="Como podemos te chamar?" required maxLength="120" />
          <label htmlFor="email">E-mail <span>*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="voce@email.com" required maxLength="254" />
          <label htmlFor="telefone">Telefone <span className="optional">(opcional)</span></label>
          <input id="telefone" name="telefone" type="tel" autoComplete="tel" placeholder="(11) 99999-9999" maxLength="30" />
          <label htmlFor="tipoIngresso">Tipo de ingresso <span>*</span></label>
          <select id="tipoIngresso" name="tipoIngresso" defaultValue="" required>
            <option value="" disabled>Selecione seu ingresso</option>
            <option value="estudante">Estudante · R$ 49,00</option>
            <option value="profissional">Profissional · R$ 129,00</option>
          </select>
          {erro && <p className="form-error" role="alert">{erro}</p>}
          <button className="button button-primary submit-button" type="submit" disabled={enviando}>
            {enviando ? "Enviando..." : "Confirmar inscrição"} <span aria-hidden="true">↗</span>
          </button>
          <p className="form-terms">Ao se inscrever, você concorda em receber informações sobre o evento.</p>
        </form>
      </section>
    </main>
  );
}

function Inscritos() {
  const [inscricoes, setInscricoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const location = useLocation();
  const [inscricaoConcluida] = useState(Boolean(location.state?.inscricaoConcluida));

  async function carregarInscricoes() {
    setErro("");
    try {
      const resposta = await fetch("/inscricoes");
      if (!resposta.ok) throw new Error("Não foi possível carregar a lista de inscritos.");
      setInscricoes(await resposta.json());
    } catch (error) {
      setErro(error.message || "Não foi possível conectar à API.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarInscricoes();
  }, []);

  async function excluirInscricao(id) {
    setErro("");
    setSucesso("");
    try {
      const resposta = await fetch(`/inscricoes/${id}`, { method: "DELETE" });
      if (!resposta.ok) {
        const resultado = await resposta.json();
        throw new Error(resultado.mensagem || "Não foi possível excluir a inscrição.");
      }
      setInscricoes((atuais) => atuais.filter((inscricao) => inscricao.id !== id));
      setSucesso("Inscrição removida com sucesso.");
    } catch (error) {
      setErro(error.message || "Não foi possível conectar à API.");
    }
  }

  return (
    <main className="attendees-page section-wrap">
      <div className="section-kicker">TECH FUTURE · 22 AGO 2026</div>
      <div className="attendees-heading">
        <div><h1>Quem vem <span>com a gente.</span></h1><p>A comunidade que vai construir o próximo capítulo.</p></div>
        <Link className="button button-primary" to="/inscricao">Nova inscrição <span aria-hidden="true">↗</span></Link>
      </div>
      {inscricaoConcluida && <div className="success-banner" role="status">Inscrição confirmada! Te esperamos no Tech Future. ✳</div>}
      {sucesso && <div className="success-banner" role="status">{sucesso}</div>}
      {erro && <div className="error-banner" role="alert">{erro} <button type="button" onClick={carregarInscricoes}>Tentar novamente</button></div>}
      <div className="attendees-summary"><span>INSCRITOS</span><strong>{inscricoes.length.toString().padStart(2, "0")}</strong><span className="summary-limit">/ 400 VAGAS</span></div>
      {carregando ? (
        <p className="list-message">Carregando inscrições...</p>
      ) : inscricoes.length === 0 && !erro ? (
        <div className="empty-state"><span aria-hidden="true">✳</span><h2>Você pode ser o primeiro.</h2><p>As inscrições para o evento começam por aqui.</p><Link className="text-link dark-link" to="/inscricao">Faça sua inscrição <span aria-hidden="true">↗</span></Link></div>
      ) : (
        <div className="table-scroll">
          <table className="attendees-table">
            <thead><tr><th>PARTICIPANTE</th><th>E-MAIL</th><th>TELEFONE</th><th>INGRESSO</th><th><span className="visually-hidden">Ações</span></th></tr></thead>
            <tbody>{inscricoes.map((inscricao) => (
              <tr key={inscricao.id}>
                <td className="attendee-name"><span>{inscricao.nome.trim().split(/\s+/).slice(0, 2).map((parte) => parte[0]).join("").toUpperCase()}</span>{inscricao.nome}</td>
                <td>{inscricao.email}</td>
                <td>{inscricao.telefone || "—"}</td>
                <td><span className={`ticket-badge ${inscricao.tipoIngresso}`}>{inscricao.tipoIngresso}</span></td>
                <td><button className="delete-button" type="button" onClick={() => excluirInscricao(inscricao.id)} aria-label={`Excluir inscrição de ${inscricao.nome}`}>Excluir</button></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscricao" element={<Inscricao />} />
        <Route path="/inscritos" element={<Inscritos />} />
        <Route path="*" element={<main className="not-found"><h1>Essa página não existe.</h1><Link className="text-link dark-link" to="/">Voltar ao início ↗</Link></main>} />
      </Routes>
    </>
  );
}
