import Link from "next/link";

import s from "@/app/components/scenes/scenes.module.css";
import { localizePath, whatsappUrl, type Locale } from "@/app/i18n";
import { INSTAGRAM } from "@/app/seo";
import ManageCookiesButton from "./ManageCookiesButton";

const WHATSAPP = whatsappUrl();

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Texto da política em português (versão que prevalece). */
function PolicyPt() {
  return (
    <>
      <p className={s.legalUpdated}>Última atualização: 17 de novembro de 2026</p>

      <h2>1. Quem somos</h2>
      <p>
        A FORX Digital (&ldquo;FORX&rdquo;, &ldquo;nós&rdquo;) é responsável pelo site{" "}
        <strong>www.forxdigital.com.br</strong> e pelas decisões sobre o tratamento dos dados
        pessoais descritos nesta política, nos termos da Lei Geral de Proteção de Dados (Lei nº
        13.709/2018 – LGPD).
      </p>

      <h2>2. Quais dados tratamos e por quê</h2>

      <h3>Dados de navegação (Google Analytics)</h3>
      <p>
        <strong>Somente se você aceitar os cookies de análise</strong>, usamos o Google Analytics
        para entender como o site é usado: páginas visitadas, tempo de visita, tipo de dispositivo e
        navegador, cidade aproximada e a origem do acesso. Esses dados são usados de forma agregada
        para melhorar o site e não para identificar você.
      </p>
      <p>
        <strong>Base legal:</strong> consentimento (art. 7º, I, da LGPD). Se você recusar, o Google
        Analytics não é carregado.
      </p>

      <h3>Sua escolha sobre cookies</h3>
      <p>
        Guardamos no seu próprio navegador a escolha feita no aviso de cookies (aceitar ou recusar),
        para não perguntar de novo a cada visita. Essa informação não é enviada para nós.
      </p>
      <p>
        <strong>Base legal:</strong> necessário para cumprir a sua escolha e para o funcionamento do
        site (legítimo interesse, art. 7º, IX).
      </p>

      <h3>Contato pelo WhatsApp</h3>
      <p>
        O formulário de contato e os botões &ldquo;Entre em contato&rdquo; não guardam nada no site:
        eles apenas abrem o WhatsApp com uma mensagem preenchida (nome, empresa, telefone, serviço e
        detalhes que você escreveu). A mensagem só chega até nós se você decidir enviá-la. Usamos
        essas informações para responder ao seu contato e preparar propostas.
      </p>
      <p>
        <strong>Base legal:</strong> procedimentos preliminares a um contrato, a seu pedido (art. 7º,
        V), e legítimo interesse no atendimento (art. 7º, IX). A conversa também está sujeita aos
        termos e à política de privacidade do WhatsApp (Meta).
      </p>

      <h3>Registros técnicos da hospedagem</h3>
      <p>
        Como qualquer site, o servidor que hospeda a FORX (Vercel) registra dados técnicos de cada
        acesso, como endereço IP, data e hora, navegador e página solicitada, para segurança e
        funcionamento.
      </p>
      <p>
        <strong>Base legal:</strong> legítimo interesse em manter o site seguro e disponível (art.
        7º, IX) e o Marco Civil da Internet (Lei nº 12.965/2014).
      </p>

      <h2>3. Com quem compartilhamos</h2>
      <p>Não vendemos dados pessoais. Os dados podem ser tratados por:</p>
      <ul>
        <li>
          <strong>Google</strong> (Google Analytics), apenas com o seu consentimento;
        </li>
        <li>
          <strong>Vercel</strong>, empresa que hospeda o site;
        </li>
        <li>
          <strong>Meta</strong> (WhatsApp), quando você escolhe falar conosco por lá;
        </li>
        <li>autoridades públicas, quando houver obrigação legal.</li>
      </ul>

      <h2>4. Transferência internacional</h2>
      <p>
        Google, Vercel e Meta podem armazenar dados em servidores fora do Brasil. Essas empresas
        adotam cláusulas contratuais e medidas de segurança compatíveis com a LGPD (art. 33).
      </p>

      <h2>5. Por quanto tempo guardamos</h2>
      <ul>
        <li>
          <strong>Dados do Google Analytics:</strong> pelo prazo de retenção configurado na
          ferramenta, de até 14 meses.
        </li>
        <li>
          <strong>Escolha de cookies:</strong> até você apagá-la ou clicar em &ldquo;Gerenciar
          cookies&rdquo; abaixo.
        </li>
        <li>
          <strong>Conversas de contato:</strong> enquanto forem necessárias para o atendimento e a
          relação comercial, ou pelo prazo exigido por lei.
        </li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        Usamos apenas cookies de análise do Google Analytics (como <code>_ga</code>), e somente depois
        do seu aceite. Você pode mudar sua escolha a qualquer momento:
      </p>
      <p>
        <ManageCookiesButton className={s.legalButton} />
      </p>
      <p>
        Ao clicar, apagamos sua escolha e os cookies de análise deste site, e o aviso de cookies
        aparece de novo. Você também pode apagar cookies nas configurações do seu navegador.
      </p>

      <h2>7. Seus direitos</h2>
      <p>Pela LGPD (art. 18), você pode pedir a qualquer momento:</p>
      <ul>
        <li>confirmação de que tratamos seus dados e acesso a eles;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>
          anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a
          lei;
        </li>
        <li>portabilidade dos dados;</li>
        <li>informação sobre com quem compartilhamos seus dados;</li>
        <li>revogação do consentimento e eliminação dos dados tratados com base nele.</li>
      </ul>
      <p>
        Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>8. Segurança</h2>
      <p>
        O site funciona apenas com conexão segura (HTTPS) e adota proteções contra uso indevido no
        navegador. Nenhum sistema é totalmente invulnerável, mas trabalhamos para proteger as
        informações e corrigir rapidamente qualquer problema.
      </p>

      <h2>9. Crianças e adolescentes</h2>
      <p>
        Nossos serviços são voltados a empresas e profissionais. Não coletamos intencionalmente dados
        de menores de 18 anos.
      </p>

      <h2>10. Alterações nesta política</h2>
      <p>
        Podemos atualizar esta política quando o site ou a legislação mudar. A data da última
        atualização fica no início desta página.
      </p>

      <h2>11. Fale conosco</h2>
      <p>
        Para exercer seus direitos ou tirar dúvidas sobre privacidade, fale com a FORX Digital pelo{" "}
        <a href={WHATSAPP} {...ext}>
          WhatsApp
        </a>{" "}
        ou pelo{" "}
        <a href={INSTAGRAM} {...ext}>
          Instagram
        </a>
        .
      </p>
    </>
  );
}

function PolicyEn() {
  return (
    <>
      <p className={s.legalUpdated}>Last updated: November 17, 2026</p>
      <p>
        <em>
          This is a translation of our{" "}
          <Link href={localizePath("pt", "/privacidade")}>Privacy Policy in Portuguese</Link>. If
          there is any discrepancy, the Portuguese version prevails.
        </em>
      </p>

      <h2>1. Who we are</h2>
      <p>
        FORX Digital (&ldquo;FORX&rdquo;, &ldquo;we&rdquo;) is responsible for the website{" "}
        <strong>www.forxdigital.com.br</strong> and for decisions about the processing of the
        personal data described in this policy, under Brazil&rsquo;s General Data Protection Law (Law
        No. 13,709/2018 – LGPD).
      </p>

      <h2>2. What data we process and why</h2>

      <h3>Browsing data (Google Analytics)</h3>
      <p>
        <strong>Only if you accept analytics cookies</strong>, we use Google Analytics to understand
        how the website is used: pages visited, visit duration, device type and browser, approximate
        city and where the visit came from. This data is used in aggregate to improve the website and
        not to identify you.
      </p>
      <p>
        <strong>Legal basis:</strong> consent (art. 7, I, LGPD). If you decline, Google Analytics is
        not loaded.
      </p>

      <h3>Your cookie choice</h3>
      <p>
        We store the choice you made in the cookie notice (accept or decline) in your own browser, so
        we don&rsquo;t ask again on every visit. This information is not sent to us.
      </p>
      <p>
        <strong>Legal basis:</strong> necessary to respect your choice and for the website to work
        (legitimate interest, art. 7, IX).
      </p>

      <h3>Contact via WhatsApp</h3>
      <p>
        The contact form and the contact buttons do not store anything on the website: they only open
        WhatsApp with a pre-filled message (name, company, phone, service and the details you wrote).
        The message only reaches us if you decide to send it. We use this information to reply to
        you and prepare proposals.
      </p>
      <p>
        <strong>Legal basis:</strong> pre-contractual steps at your request (art. 7, V) and
        legitimate interest in serving you (art. 7, IX). The conversation is also subject to
        WhatsApp&rsquo;s (Meta) terms and privacy policy.
      </p>

      <h3>Hosting technical logs</h3>
      <p>
        Like any website, the server that hosts FORX (Vercel) records technical data for each visit,
        such as IP address, date and time, browser and requested page, for security and operation.
      </p>
      <p>
        <strong>Legal basis:</strong> legitimate interest in keeping the website secure and available
        (art. 7, IX) and Brazil&rsquo;s Internet Civil Framework (Law No. 12,965/2014).
      </p>

      <h2>3. Who we share data with</h2>
      <p>We do not sell personal data. Data may be processed by:</p>
      <ul>
        <li>
          <strong>Google</strong> (Google Analytics), only with your consent;
        </li>
        <li>
          <strong>Vercel</strong>, the company that hosts the website;
        </li>
        <li>
          <strong>Meta</strong> (WhatsApp), when you choose to talk to us there;
        </li>
        <li>public authorities, when required by law.</li>
      </ul>

      <h2>4. International transfer</h2>
      <p>
        Google, Vercel and Meta may store data on servers outside Brazil. These companies adopt
        contractual clauses and security measures compatible with the LGPD (art. 33).
      </p>

      <h2>5. How long we keep data</h2>
      <ul>
        <li>
          <strong>Google Analytics data:</strong> for the retention period set in the tool, up to 14
          months.
        </li>
        <li>
          <strong>Cookie choice:</strong> until you delete it or click &ldquo;Manage cookies&rdquo;
          below.
        </li>
        <li>
          <strong>Contact conversations:</strong> for as long as they are needed for service and the
          business relationship, or for the period required by law.
        </li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        We only use Google Analytics analytics cookies (such as <code>_ga</code>), and only after you
        accept them. You can change your choice at any time:
      </p>
      <p>
        <ManageCookiesButton className={s.legalButton} />
      </p>
      <p>
        When you click, we delete your choice and this website&rsquo;s analytics cookies, and the
        cookie notice appears again. You can also delete cookies in your browser settings.
      </p>

      <h2>7. Your rights</h2>
      <p>Under the LGPD (art. 18), you may request at any time:</p>
      <ul>
        <li>confirmation that we process your data and access to it;</li>
        <li>correction of incomplete, inaccurate or outdated data;</li>
        <li>
          anonymization, blocking or deletion of unnecessary data or data processed in breach of the
          law;
        </li>
        <li>data portability;</li>
        <li>information about who we share your data with;</li>
        <li>withdrawal of consent and deletion of data processed based on it.</li>
      </ul>
      <p>
        You may also file a complaint with Brazil&rsquo;s National Data Protection Authority (ANPD).
      </p>

      <h2>8. Security</h2>
      <p>
        The website only works over a secure connection (HTTPS) and uses browser protections against
        misuse. No system is completely invulnerable, but we work to protect information and fix any
        problem quickly.
      </p>

      <h2>9. Children and adolescents</h2>
      <p>
        Our services are aimed at businesses and professionals. We do not knowingly collect data from
        anyone under 18.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy when the website or the law changes. The date of the last update is
        shown at the top of this page.
      </p>

      <h2>11. Contact us</h2>
      <p>
        To exercise your rights or ask questions about privacy, contact FORX Digital on{" "}
        <a href={WHATSAPP} {...ext}>
          WhatsApp
        </a>{" "}
        or{" "}
        <a href={INSTAGRAM} {...ext}>
          Instagram
        </a>
        .
      </p>
    </>
  );
}

function PolicyEs() {
  return (
    <>
      <p className={s.legalUpdated}>Última actualización: 17 de noviembre de 2026</p>
      <p>
        <em>
          Esta es una traducción de nuestra{" "}
          <Link href={localizePath("pt", "/privacidade")}>Política de Privacidad en portugués</Link>.
          En caso de discrepancia, prevalece la versión en portugués.
        </em>
      </p>

      <h2>1. Quiénes somos</h2>
      <p>
        FORX Digital (&ldquo;FORX&rdquo;, &ldquo;nosotros&rdquo;) es responsable del sitio{" "}
        <strong>www.forxdigital.com.br</strong> y de las decisiones sobre el tratamiento de los datos
        personales descritos en esta política, en los términos de la Ley General de Protección de
        Datos de Brasil (Ley nº 13.709/2018 – LGPD).
      </p>

      <h2>2. Qué datos tratamos y por qué</h2>

      <h3>Datos de navegación (Google Analytics)</h3>
      <p>
        <strong>Solo si aceptas las cookies de análisis</strong>, usamos Google Analytics para
        entender cómo se usa el sitio: páginas visitadas, tiempo de visita, tipo de dispositivo y
        navegador, ciudad aproximada y el origen del acceso. Estos datos se usan de forma agregada
        para mejorar el sitio y no para identificarte.
      </p>
      <p>
        <strong>Base legal:</strong> consentimiento (art. 7, I, de la LGPD). Si lo rechazas, Google
        Analytics no se carga.
      </p>

      <h3>Tu elección sobre cookies</h3>
      <p>
        Guardamos en tu propio navegador la elección que hiciste en el aviso de cookies (aceptar o
        rechazar), para no volver a preguntar en cada visita. Esta información no se nos envía.
      </p>
      <p>
        <strong>Base legal:</strong> necesario para cumplir tu elección y para el funcionamiento del
        sitio (interés legítimo, art. 7, IX).
      </p>

      <h3>Contacto por WhatsApp</h3>
      <p>
        El formulario de contacto y los botones de contacto no guardan nada en el sitio: solo abren
        WhatsApp con un mensaje completado (nombre, empresa, teléfono, servicio y los detalles que
        escribiste). El mensaje solo nos llega si decides enviarlo. Usamos esta información para
        responder a tu contacto y preparar propuestas.
      </p>
      <p>
        <strong>Base legal:</strong> procedimientos preliminares a un contrato, a tu pedido (art. 7,
        V), e interés legítimo en la atención (art. 7, IX). La conversación también está sujeta a los
        términos y a la política de privacidad de WhatsApp (Meta).
      </p>

      <h3>Registros técnicos del alojamiento</h3>
      <p>
        Como cualquier sitio, el servidor que aloja FORX (Vercel) registra datos técnicos de cada
        acceso, como dirección IP, fecha y hora, navegador y página solicitada, por seguridad y
        funcionamiento.
      </p>
      <p>
        <strong>Base legal:</strong> interés legítimo en mantener el sitio seguro y disponible (art.
        7, IX) y el Marco Civil de Internet de Brasil (Ley nº 12.965/2014).
      </p>

      <h2>3. Con quién compartimos</h2>
      <p>No vendemos datos personales. Los datos pueden ser tratados por:</p>
      <ul>
        <li>
          <strong>Google</strong> (Google Analytics), solo con tu consentimiento;
        </li>
        <li>
          <strong>Vercel</strong>, empresa que aloja el sitio;
        </li>
        <li>
          <strong>Meta</strong> (WhatsApp), cuando eliges hablar con nosotros por allí;
        </li>
        <li>autoridades públicas, cuando exista una obligación legal.</li>
      </ul>

      <h2>4. Transferencia internacional</h2>
      <p>
        Google, Vercel y Meta pueden almacenar datos en servidores fuera de Brasil. Estas empresas
        adoptan cláusulas contractuales y medidas de seguridad compatibles con la LGPD (art. 33).
      </p>

      <h2>5. Por cuánto tiempo guardamos</h2>
      <ul>
        <li>
          <strong>Datos de Google Analytics:</strong> durante el plazo de retención configurado en la
          herramienta, de hasta 14 meses.
        </li>
        <li>
          <strong>Elección de cookies:</strong> hasta que la borres o hagas clic en &ldquo;Gestionar
          cookies&rdquo; abajo.
        </li>
        <li>
          <strong>Conversaciones de contacto:</strong> mientras sean necesarias para la atención y la
          relación comercial, o durante el plazo exigido por ley.
        </li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        Usamos solo cookies de análisis de Google Analytics (como <code>_ga</code>), y solo después
        de tu aceptación. Puedes cambiar tu elección en cualquier momento:
      </p>
      <p>
        <ManageCookiesButton className={s.legalButton} />
      </p>
      <p>
        Al hacer clic, borramos tu elección y las cookies de análisis de este sitio, y el aviso de
        cookies vuelve a aparecer. También puedes borrar cookies en la configuración de tu navegador.
      </p>

      <h2>7. Tus derechos</h2>
      <p>Según la LGPD (art. 18), puedes solicitar en cualquier momento:</p>
      <ul>
        <li>confirmación de que tratamos tus datos y acceso a ellos;</li>
        <li>corrección de datos incompletos, inexactos o desactualizados;</li>
        <li>
          anonimización, bloqueo o eliminación de datos innecesarios o tratados en desacuerdo con la
          ley;
        </li>
        <li>portabilidad de los datos;</li>
        <li>información sobre con quién compartimos tus datos;</li>
        <li>revocación del consentimiento y eliminación de los datos tratados con base en él.</li>
      </ul>
      <p>
        También puedes presentar una reclamación ante la Autoridad Nacional de Protección de Datos de
        Brasil (ANPD).
      </p>

      <h2>8. Seguridad</h2>
      <p>
        El sitio funciona solo con conexión segura (HTTPS) y adopta protecciones contra el uso
        indebido en el navegador. Ningún sistema es totalmente invulnerable, pero trabajamos para
        proteger la información y corregir rápidamente cualquier problema.
      </p>

      <h2>9. Niños y adolescentes</h2>
      <p>
        Nuestros servicios están dirigidos a empresas y profesionales. No recopilamos
        intencionalmente datos de menores de 18 años.
      </p>

      <h2>10. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política cuando cambien el sitio o la legislación. La fecha de la
        última actualización aparece al inicio de esta página.
      </p>

      <h2>11. Contáctanos</h2>
      <p>
        Para ejercer tus derechos o resolver dudas sobre privacidad, habla con FORX Digital por{" "}
        <a href={WHATSAPP} {...ext}>
          WhatsApp
        </a>{" "}
        o por{" "}
        <a href={INSTAGRAM} {...ext}>
          Instagram
        </a>
        .
      </p>
    </>
  );
}

export default function Policy({ lang }: { lang: Locale }) {
  if (lang === "en") return <PolicyEn />;
  if (lang === "es") return <PolicyEs />;
  return <PolicyPt />;
}
