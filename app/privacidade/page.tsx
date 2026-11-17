import type { Metadata } from "next";
import Link from "next/link";

import MegaMenu from "../components/MegaMenu";
import Scenes from "../components/scenes/Scenes";
import s from "../components/scenes/scenes.module.css";
import { INSTAGRAM, breadcrumbSchema, jsonLd, pageMetadata } from "../seo";
import ManageCookiesButton from "./ManageCookiesButton";

const PATH = "/privacidade";
const UPDATED = "17 de novembro de 2026";
const WHATSAPP = "https://wa.me/5511994880312";

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidade",
  description:
    "Como a FORX Digital trata dados pessoais no site: cookies, Google Analytics, contato pelo WhatsApp e os seus direitos pela LGPD.",
  path: PATH,
});

export default function PrivacidadePage() {
  return (
    <main className={s.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([{ name: "Política de Privacidade", path: PATH }])
        )}
      />

      <MegaMenu />

      <Scenes
        compact
        eyebrow="LGPD"
        heroTitle={[
          { text: "Política de" },
          { br: true },
          { text: "Privacidade", hl: true },
        ]}
        description="Como tratamos os dados de quem visita o site da FORX Digital, por que fazemos isso e como você controla as suas informações."
      />

      <div className={`${s.scenes} ${s.lightPanel}`}>
        <article className={s.legal}>
          <p className={s.legalUpdated}>Última atualização: {UPDATED}</p>

          <h2>1. Quem somos</h2>
          <p>
            A FORX Digital (&ldquo;FORX&rdquo;, &ldquo;nós&rdquo;) é responsável
            pelo site <strong>www.forxdigital.com.br</strong> e pelas decisões
            sobre o tratamento dos dados pessoais descritos nesta política, nos
            termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
          </p>

          <h2>2. Quais dados tratamos e por quê</h2>

          <h3>Dados de navegação (Google Analytics)</h3>
          <p>
            <strong>Somente se você aceitar os cookies de análise</strong>, usamos
            o Google Analytics para entender como o site é usado: páginas
            visitadas, tempo de visita, tipo de dispositivo e navegador, cidade
            aproximada e a origem do acesso. Esses dados são usados de forma
            agregada para melhorar o site e não para identificar você.
          </p>
          <p>
            <strong>Base legal:</strong> consentimento (art. 7º, I, da LGPD). Se
            você recusar, o Google Analytics não é carregado.
          </p>

          <h3>Sua escolha sobre cookies</h3>
          <p>
            Guardamos no seu próprio navegador a escolha feita no aviso de
            cookies (aceitar ou recusar), para não perguntar de novo a cada
            visita. Essa informação não é enviada para nós.
          </p>
          <p>
            <strong>Base legal:</strong> necessário para cumprir a sua escolha e
            para o funcionamento do site (legítimo interesse, art. 7º, IX).
          </p>

          <h3>Contato pelo WhatsApp</h3>
          <p>
            O formulário de contato e os botões &ldquo;Entre em contato&rdquo;
            não guardam nada no site: eles apenas abrem o WhatsApp com uma
            mensagem preenchida (nome, empresa, telefone, serviço e detalhes que
            você escreveu). A mensagem só chega até nós se você decidir enviá-la.
            Usamos essas informações para responder ao seu contato e preparar
            propostas.
          </p>
          <p>
            <strong>Base legal:</strong> procedimentos preliminares a um contrato,
            a seu pedido (art. 7º, V), e legítimo interesse no atendimento (art.
            7º, IX). A conversa também está sujeita aos termos e à política de
            privacidade do WhatsApp (Meta).
          </p>

          <h3>Registros técnicos da hospedagem</h3>
          <p>
            Como qualquer site, o servidor que hospeda a FORX (Vercel) registra
            dados técnicos de cada acesso, como endereço IP, data e hora,
            navegador e página solicitada, para segurança e funcionamento.
          </p>
          <p>
            <strong>Base legal:</strong> legítimo interesse em manter o site
            seguro e disponível (art. 7º, IX) e o Marco Civil da Internet (Lei nº
            12.965/2014).
          </p>

          <h2>3. Com quem compartilhamos</h2>
          <p>Não vendemos dados pessoais. Os dados podem ser tratados por:</p>
          <ul>
            <li>
              <strong>Google</strong> (Google Analytics), apenas com o seu
              consentimento;
            </li>
            <li>
              <strong>Vercel</strong>, empresa que hospeda o site;
            </li>
            <li>
              <strong>Meta</strong> (WhatsApp), quando você escolhe falar
              conosco por lá;
            </li>
            <li>autoridades públicas, quando houver obrigação legal.</li>
          </ul>

          <h2>4. Transferência internacional</h2>
          <p>
            Google, Vercel e Meta podem armazenar dados em servidores fora do
            Brasil. Essas empresas adotam cláusulas contratuais e medidas de
            segurança compatíveis com a LGPD (art. 33).
          </p>

          <h2>5. Por quanto tempo guardamos</h2>
          <ul>
            <li>
              <strong>Dados do Google Analytics:</strong> pelo prazo de retenção
              configurado na ferramenta, de até 14 meses.
            </li>
            <li>
              <strong>Escolha de cookies:</strong> até você apagá-la ou clicar em
              &ldquo;Gerenciar cookies&rdquo; abaixo.
            </li>
            <li>
              <strong>Conversas de contato:</strong> enquanto forem necessárias
              para o atendimento e a relação comercial, ou pelo prazo exigido por
              lei.
            </li>
          </ul>

          <h2>6. Cookies</h2>
          <p>
            Usamos apenas cookies de análise do Google Analytics (como{" "}
            <code>_ga</code>), e somente depois do seu aceite. Você pode mudar sua
            escolha a qualquer momento:
          </p>
          <p>
            <ManageCookiesButton className={s.legalButton} />
          </p>
          <p>
            Ao clicar, apagamos sua escolha e os cookies de análise deste site, e
            o aviso de cookies aparece de novo. Você também pode apagar cookies
            nas configurações do seu navegador.
          </p>

          <h2>7. Seus direitos</h2>
          <p>Pela LGPD (art. 18), você pode pedir a qualquer momento:</p>
          <ul>
            <li>confirmação de que tratamos seus dados e acesso a eles;</li>
            <li>correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>
              anonimização, bloqueio ou eliminação de dados desnecessários ou
              tratados em desacordo com a lei;
            </li>
            <li>portabilidade dos dados;</li>
            <li>informação sobre com quem compartilhamos seus dados;</li>
            <li>
              revogação do consentimento e eliminação dos dados tratados com base
              nele.
            </li>
          </ul>
          <p>
            Você também pode apresentar reclamação à Autoridade Nacional de
            Proteção de Dados (ANPD).
          </p>

          <h2>8. Segurança</h2>
          <p>
            O site funciona apenas com conexão segura (HTTPS) e adota proteções
            contra uso indevido no navegador. Nenhum sistema é totalmente
            invulnerável, mas trabalhamos para proteger as informações e
            corrigir rapidamente qualquer problema.
          </p>

          <h2>9. Crianças e adolescentes</h2>
          <p>
            Nossos serviços são voltados a empresas e profissionais. Não
            coletamos intencionalmente dados de menores de 18 anos.
          </p>

          <h2>10. Alterações nesta política</h2>
          <p>
            Podemos atualizar esta política quando o site ou a legislação mudar.
            A data da última atualização fica no início desta página.
          </p>

          <h2>11. Fale conosco</h2>
          <p>
            Para exercer seus direitos ou tirar dúvidas sobre privacidade, fale
            com a FORX Digital pelo{" "}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{" "}
            ou pelo{" "}
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            .
          </p>
        </article>
      </div>

      <footer className={`${s.scenes} ${s.foot}`}>
        <Link href="/">FORX Digital.</Link>
        <span className={s.footLinks}>
          <span>© 2026 FORX Digital — Tecnologia, gestão e crescimento.</span>
          <Link href="/privacidade">Política de Privacidade</Link>
        </span>
      </footer>
    </main>
  );
}
