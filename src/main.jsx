import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Compass,
  FileText, Layers3, Menu, Search, ShieldCheck, Sparkles, Target, TrendingUp,
  X, BriefcaseBusiness, GraduationCap, Route, CircleCheck, Send, Mail
} from 'lucide-react';
import './styles.css';

const IconWrap = ({ children, className = '' }) => <span className={`icon-wrap ${className}`}>{children}</span>;

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#inicio" aria-label="RAPIEMPLEO, inicio">
    <span className="brand-mark"><span></span><span></span><span></span></span>
    <span>rapiempleo<span className="brand-period">.</span></span>
  </a>;
}


const docText = { lineHeight: 1.8, color: '#555164' };

function DocBlocks({ blocks }) {
  if (!blocks) return null;
  return blocks.map((block, i) => {
    if (block.h4) return <h4 key={i} style={{ fontSize: '1rem', margin: '26px 0 10px', color: '#2d2640' }}>{block.h4}</h4>;
    if (block.p) return <p key={i} style={{ ...docText, margin: '12px 0' }}>{block.p}</p>;
    if (block.list) return <ul key={i} style={{ ...docText, margin: '8px 0 16px', paddingLeft: 22 }}>
      {block.list.map((item, j) => <li key={j}>{Array.isArray(item) ? <><strong style={{ color: '#2d2640' }}>{item[0]}</strong> {item[1]}</> : item}</li>)}
    </ul>;
    if (block.table) return <div key={i} style={{ overflowX: 'auto', margin: '16px 0', border: '1px solid #e8e4ef', borderRadius: 12 }}>
      <table style={{ width: '100%', minWidth: 520, borderCollapse: 'collapse', fontSize: '.95rem' }}>
        <thead>
          <tr>{block.table.headers.map(h => <th key={h} scope="col" style={{ textAlign: 'left', padding: '12px 14px', background: '#f3f0f8', color: '#2d2640', fontWeight: 600, verticalAlign: 'bottom' }}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {block.table.rows.map((row, r) => {
            const cells = Array.isArray(row) ? row : row.cells;
            const strong = !Array.isArray(row) && row.strong;
            return <tr key={r} style={{ background: strong ? '#faf8fd' : 'transparent' }}>
              {cells.map((cell, c) => <td key={c} style={{ padding: '11px 14px', borderTop: '1px solid #eee9f4', verticalAlign: 'top', lineHeight: 1.6, color: strong || c === 0 ? '#2d2640' : '#555164', fontWeight: strong ? 600 : 400 }}>{cell}</td>)}
            </tr>;
          })}
        </tbody>
      </table>
    </div>;
    return null;
  });
}

function DetailsView({ onBack }) {
  const sections = [
    {
      number: '', title: 'Integrantes', body: 'Laura Ortiz, Valeria Cardona, Isabella Marquez, Erick Ochoa y José David Toro'
    },
    {
      number: '1.', title: 'Diagnóstico del ecosistema', subsections: [
        { title: '1.1. Problema y oportunidad', body: 'La búsqueda laboral ocurre en distintos portales, herramientas y servicios que no siempre están conectados. Los profesionales deben identificar oportunidades, comparar requisitos, adaptar sus hojas de vida, gestionar postulaciones y prepararse para los cargos que les interesan. RAPIEMPLEO propone integrar la búsqueda de empleo y el desarrollo profesional en un mismo ecosistema digital. Este diagnóstico es una hipótesis que debe validarse con usuarios.' },
        { title: '1.2. Actores e intercambios de valor', body: 'Profesionales: usuarios y clientes pagadores que reciben herramientas para gestionar su búsqueda y desarrollo. Empresas empleadoras: generan oportunidades y definen requisitos. Portales de empleo: proporcionan acceso a vacantes mediante fuentes e integraciones permitidas. Universidades y entidades formativas: aportan cursos y recursos. Profesionales de orientación laboral: complementan la solución con asesoría. Proveedores tecnológicos: habilitan la operación digital, el procesamiento de información y la seguridad. RAPIEMPLEO integra información y conecta oportunidades con acciones de preparación.' },
        {
          title: '1.3. Visualización del ecosistema',
          body: 'La plataforma actúa como integradora, sin reemplazar los portales de empleo ni controlar las decisiones de contratación. Las relaciones propuestas representan intercambios esperados, no alianzas confirmadas.',
          image: '/images/ecosistema.jpg'
        }
      ]
    },
    {
      number: '2.', title: 'Estrategia de innovación', subsections: [
        { title: '2.1. Actor prioritario', body: 'El segmento inicial son profesionales con experiencia laboral que desean cambiar de empleo, mejorar sus condiciones o crecer profesionalmente. Necesitan identificar vacantes relevantes, comprender qué requisitos coinciden con su perfil, organizar fuentes, adaptar su hoja de vida y hacer seguimiento a sus postulaciones. Su trabajo principal es gestionar una búsqueda organizada y definir acciones concretas para acercarse a los cargos y condiciones que les interesan. Sus dolores incluyen oportunidades dispersas, tiempo invertido en ofertas poco relevantes, falta de seguimiento centralizado, dificultad para adaptar la hoja de vida e incertidumbre sobre competencias por fortalecer. Se esperan una búsqueda más organizada, mejor comprensión de compatibilidad, postulaciones mejor preparadas y una ruta de desarrollo más clara; no se garantiza la contratación.' },
        { title: '2.2. Propuesta de valor y diferencial', body: 'RAPIEMPLEO ayuda a profesionales con experiencia a gestionar su búsqueda laboral y tomar decisiones informadas sobre su desarrollo. El copiloto de búsqueda laboral permite registrar experiencia, formación, competencias, ubicación y preferencias; explorar vacantes de fuentes disponibles conservando el enlace original; comparar orientativamente requisitos y perfil; guardar ofertas, registrar fechas y estados; preparar postulaciones y recibir alertas cuando los datos lo permitan. El asistente de desarrollo profesional identifica posibles brechas, compara competencias declaradas con requisitos, propone planes de acción y recursos de aprendizaje, ayuda a documentar logros y permite practicar entrevistas con base en la experiencia real. El diferencial es conectar encontrar oportunidades con prepararse para ellas.' },
        { title: '2.3. Transformación del ecosistema', body: 'Las vacantes se convierten en referencias para orientar la preparación profesional y los recursos formativos pueden relacionarse con las competencias requeridas por los cargos de interés. Así se crea una experiencia continua de búsqueda, preparación y seguimiento. El diferencial debe comprobarse comparando la utilidad de la solución con las herramientas que los usuarios emplean actualmente.', image: '/images/transformacion.jpg' }
      ]
    },
    {
      number: '3.', title: 'Modelo de negocio digital', subsections: [
        { title: '3.1. Creación, entrega y captura de valor', body: 'Creación: conectar el perfil profesional con oportunidades y acciones de desarrollo, reduciendo la fragmentación y permitiendo hacer seguimiento al progreso. Entrega: una plataforma web que centraliza oportunidades accesibles, comparación de requisitos, seguimiento y preparación. Captura: cobrar por funciones avanzadas mediante suscripciones y ofrecer servicios profesionales individuales opcionales. El profesional será el usuario, beneficiario y cliente pagador principal; no se dependerá de pagos de empresas para validar el modelo.' },
        { title: '3.2. Fuentes de ingresos', body: 'Modelo freemium. Plan gratuito: COP $0, perfil, acceso básico a oportunidades, guardado limitado y seguimiento inicial. Premium de búsqueda laboral: COP $30.000 al mes, comparación ampliada, coincidencias y brechas, filtros, alertas, seguimiento avanzado y apoyo para adaptar la hoja de vida. Servicios opcionales: COP $40.000–120.000 por servicio para revisión de hoja de vida, simulación de entrevistas u orientación. Son precios hipotéticos que deben validarse. Inicialmente se priorizarán el plan gratuito y una suscripción Premium.' },
        {
          title: '3.3. Mercado y sostenibilidad',
          body: 'El mercado inicial son profesionales con educación superior que desean cambiar de empleo, mejorar sus condiciones o crecer profesionalmente. A continuación se explicitan los supuestos económicos del modelo y los escenarios esperados al primer año.',
          blocks: [
            { h4: '3.3.1. Supuestos económicos (escenario base)' },
            { table: { headers: ['Supuesto', 'Valor', 'Justificación'], rows: [
              ['Usuarios activos mensuales', '40 % de los registrados', 'Uso intermitente durante la búsqueda laboral'],
              ['Conversión a pago', '3 % de los registrados', 'Rango habitual en modelos freemium: 2–5 %'],
              ['Ingreso promedio por usuario pago (ARPU)', 'COP 45.000/mes', '70 % solo Premium (≈ COP 32.500) y 30 % con el complemento (+ COP 40.000)'],
              ['Abandono mensual (churn)', '15 % (vida media ≈ 6,7 meses)', 'Quien consigue empleo tiende a cancelar la suscripción'],
              ['Costo variable por usuario pago', '≈ COP 6.600/mes', 'IA y nube (COP 5.000) + pasarela de pago (3,5 %)'],
              ['Costo por usuario gratuito activo', 'COP 300/mes', 'Uso limitado de IA en el plan gratuito'],
              ['Costo de adquisición (CAC)', 'COP 3.000 por registro; ≈ COP 100.000 por usuario pago', 'Canales comunitarios con pauta digital complementaria'],
              ['Costos fijos sin salarios', 'COP 4 M/mes', 'Nube base, herramientas, contador y cumplimiento legal'],
              ['Equipo (opcional)', '3 personas × COP 3,5 M/mes', 'Solo para el cálculo de sostenibilidad total']
            ] } },
            { p: 'De estos supuestos se derivan los siguientes indicadores:' },
            { list: [['Margen por usuario pago:', '≈ COP 38.400 al mes.'], ['Valor de vida del cliente (LTV):', '≈ COP 256.000.'], ['Relación LTV/CAC:', '≈ 2,6.']] },
            { h4: '3.3.2. Escenarios al mes 12' },
            { table: { headers: ['Escenario', 'Usuarios pagos', 'Ingreso mensual', 'Resultado mensual (sin salarios)'], rows: [
              ['Pesimista (≈ 3.600 registrados; 1,5 % de conversión)', '≈ 50', '≈ COP 2,1 M', '≈ − COP 4,1 M'],
              { strong: true, cells: ['Base (≈ 8.900 registrados; 3 % de conversión)', '≈ 270', '≈ COP 12 M', '≈ + COP 3,0 M'] },
              ['Optimista (≈ 17.800 registrados; 5 % de conversión)', '≈ 890', '≈ COP 44 M', '≈ + COP 29,6 M']
            ] } },
            { p: 'Punto de equilibrio en el escenario base:' },
            { list: ['≈ 180 usuarios pagos para cubrir la operación y el marketing.', '≈ 480 usuarios pagos para cubrir también un equipo de tres personas.'] },
            { h4: '3.3.3. Lectura y umbrales de decisión' },
            { p: 'En el escenario base, al mes 12 la plataforma cubre sus costos operativos, pero todavía no paga al equipo. Por eso el primer año sirve para validar el modelo, y la meta del segundo año es superar los 480 usuarios pagos.' },
            { p: 'Los supuestos más sensibles son la conversión y el abandono. El asistente de desarrollo profesional cumple el papel de retener al usuario después de que consigue empleo, porque sigue siendo útil una vez termina la búsqueda. Como ingreso adicional, no incluido en el escenario base, se pueden explorar comisiones por referir cursos de plataformas formativas.' },
            { p: 'Estos resultados se conectan con el roadmap (sección 6) mediante los siguientes umbrales:' },
            { list: [
              ['Mes 6:', 'avanzar si la conversión del piloto es igual o mayor al 2 %.'],
              ['Mes 12:', 'escalar si hay al menos 180 usuarios pagos, el abandono mensual es igual o menor al 15 % y la relación LTV/CAC es igual o mayor a 2.'],
              ['Detener:', 'si, después de los ajustes, la conversión sigue por debajo del 1 % o el abandono por encima del 25 %.']
            ] },
            { p: 'La sostenibilidad dependerá de captar usuarios a costos razonables, lograr uso recurrente y convertir una proporción en clientes pagos. Los canales iniciales incluirán comunidades profesionales, contenido especializado, referidos y posibles alianzas formativas.' }
          ]
        }
      ]
    },
    {
      number: '4.', title: 'Tecnología habilitadora', body: 'La tecnología permite personalizar, conectar y escalar el servicio. La aplicación web, los servicios en la nube, la gestión de datos, la inteligencia artificial, la analítica y la seguridad habilitan personalización entre perfiles y vacantes, integración de información laboral y recursos formativos, automatización de postulaciones y documentos, aprendizaje a partir del uso, escalabilidad, privacidad y control de costos. La primera versión incluirá solo las capacidades necesarias para validar la propuesta. Las fuentes externas se usarán según sus condiciones de acceso y las recomendaciones de IA serán orientativas, no garantías de compatibilidad o contratación.'
    },
    {
      number: '5.', title: 'Riesgos y gobernanza',
      body: 'La confianza es esencial porque la plataforma trabaja con información profesional y puede influir en decisiones laborales.',
      blocks: [
        { table: { headers: ['Riesgo', 'Medida de control'], rows: [
          ['Vacantes desactualizadas', 'Conservar fuentes y fechas disponibles y habilitar reportes de usuarios.'],
          ['Recomendaciones incorrectas o sesgadas', 'Explicar los criterios de comparación y permitir corregir el perfil.'],
          ['Exposición de datos personales', 'Aplicar controles de acceso, minimización de datos y medidas de seguridad.'],
          ['Dependencia de proveedores', 'Evaluar alternativas y controlar el consumo de servicios.'],
          ['Baja disposición a pagar', 'Validar precios, conversión y recurrencia antes de ampliar la inversión.'],
          ['Incumplimiento de la Ley 1581 de 2012 (multas de hasta 2.000 SMMLV)', 'Política de tratamiento publicada, autorizaciones registradas y oficial de protección de datos.'],
          ['La IA inventa o exagera experiencia en la hoja de vida', 'La IA solo reformula lo que el usuario registró, y el usuario aprueba cada cambio.'],
          ['Los portales bloquean el acceso a vacantes', 'El usuario puede pegar el enlace o el texto de la vacante, y se priorizan fuentes con acceso autorizado.']
        ] } },
        { p: 'La gobernanza se basará en transparencia, privacidad, control del usuario y supervisión de resultados. La plataforma no garantizará empleos, entrevistas ni salarios, y las alianzas solo se presentarán como confirmadas cuando existan.' }
      ],
      subsections: [
        { title: '5.1. Marco normativo', body: 'Como la plataforma trata datos personales (hojas de vida, experiencia, ubicación y expectativas salariales), se rige por la Ley Estatutaria 1581 de 2012. La plataforma actúa como Responsable del Tratamiento y sus proveedores de nube e IA como Encargados. Por usar inteligencia artificial, también aplica la Circular Externa 002 de 2024 de la SIC, que exige gestionar los riesgos del tratamiento de datos en sistemas de IA y aplicar criterios de idoneidad, necesidad, razonabilidad y proporcionalidad (SIC, 2024).' },
        {
          title: '5.2. Principios aplicados',
          blocks: [
            { table: { headers: ['Principio (art. 4)', 'Cómo se aplica'], rows: [
              ['Finalidad y libertad', 'Los datos se usan solo para los fines informados y con autorización previa del usuario.'],
              ['Veracidad', 'El usuario puede corregir su perfil y la IA no inventa experiencia.'],
              ['Transparencia', 'El usuario puede consultar, descargar o borrar sus datos.'],
              ['Circulación restringida', 'Nada se comparte con aliados sin autorización específica.'],
              ['Seguridad y confidencialidad', 'Cifrado, control de accesos, minimización de datos y compromisos de reserva.']
            ] } }
          ]
        },
        {
          title: '5.3. Control',
          blocks: [
            { list: [
              ['Responsable:', 'un integrante del equipo asume el rol de oficial de protección de datos y atiende las solicitudes de los usuarios.'],
              ['Frecuencia:', 'revisión trimestral de riesgos y de las recomendaciones de la IA, incluida una muestra para detectar sesgos.'],
              ['Indicadores:', 'tiempo de respuesta a solicitudes, porcentaje de usuarios con autorización vigente e incidentes de seguridad reportados a la SIC.']
            ] }
          ]
        }
      ]
    },
    {
      number: '6.', title: 'Transformación y roadmap', subsections: [
        { title: 'Meses 1–3: validar la oportunidad', body: 'Entrevistar a 15–20 profesionales, probar prototipos desde el primer mes, contrastar alternativas y explorar disposición a pagar. Resultado: problema priorizado, mapa del ecosistema, propuesta de valor ajustada y prototipo probado. Avanzar si el problema es relevante y el diferencial genera interés; ajustar si las necesidades son distintas.' },
        { title: 'Meses 4–6: demostrar valor', body: 'Lanzar una plataforma web esencial, realizar un piloto y probar la oferta gratuita y paga. Resultado: evidencia de utilidad, uso recurrente y primeras señales de conversión. Avanzar si existe valor y disposición a pagar; ajustar si hay uso sin conversión.' },
        { title: 'Meses 7–12: validar sostenibilidad', body: 'Mejorar la propuesta, concentrarse en los canales más efectivos y evaluar ingresos potenciales frente a costos operativos. Resultado: indicadores comerciales y una ruta de sostenibilidad para el segundo año. Escalar si hay demanda recurrente y una vía viable de ingresos; reformular si el modelo no se sostiene.' },
        { title: 'Indicadores de avance', body: 'Validación: frecuencia del problema y valoración del diferencial. Uso: activación, tareas completadas y recurrencia. Negocio: conversión a pago, ingresos recurrentes y costo de adquisición. Sostenibilidad: costos operativos, margen de contribución y recursos necesarios para continuar. Las metas numéricas iniciales de cada hito se presentan en la sección 3.3.3 y se ajustarán con los datos del piloto.' }
      ]
    },
    {
      number: '7.', title: 'Conclusión', body: 'RAPIEMPLEO propone transformar un ecosistema laboral fragmentado en una experiencia integrada que conecte oportunidades, postulaciones y desarrollo profesional. Su innovación consiste en convertir la información de las vacantes en acciones de preparación y crecimiento. El modelo freemium permite entregar valor inicialmente y capturar ingresos mediante funcionalidades avanzadas y servicios opcionales. La tecnología habilita la integración y la gobernanza protege la confianza y la información. El roadmap permite validar la propuesta desde el primer mes y evolucionar según la evidencia. El éxito dependerá de demostrar que resuelve un problema relevante, ofrece un diferencial y cuenta con una vía razonable para sostenerse y crecer.'
    },
    {
      number: '', title: 'Referencias', references: [
        'Congreso de Colombia. (2012). Ley Estatutaria 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales. Diario Oficial 48.587.',
        'Superintendencia de Industria y Comercio. (2024). Circular Externa 002 del 21 de agosto de 2024: lineamientos sobre el tratamiento de datos personales en sistemas de inteligencia artificial.'
      ]
    }
  ];

  return <section className="section" style={{ background: '#f8f7fb', minHeight: '70vh', paddingTop: 64 }}>
    <div className="container" style={{ maxWidth: 1040 }}>
      <button className="button button-outline" onClick={onBack} style={{ marginBottom: 28 }}>← Volver a la página principal</button>
      <div className="eyebrow"><span className="eyebrow-line"></span> DOCUMENTO DEL PROYECTO</div>
      <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)', lineHeight: 1.08, margin: '18px 0' }}>RAPIEMPLEO: <span style={{ color: '#7462a8' }}>Investigación</span></h1>
      <p className="section-lead" style={{ maxWidth: 760, marginBottom: 36 }}>Modelo de negocio de una plataforma de empleabilidad personalizada. Consulta aquí los siete numerales, sus apartados principales y las referencias, separados de la vista inicial.</p>
      <div style={{ display: 'grid', gap: 18, paddingBottom: 64 }}>
        {sections.map(section => <article key={section.title} style={{ background: '#fff', border: '1px solid #e8e4ef', borderRadius: 20, padding: 'clamp(20px, 4vw, 34px)', boxShadow: '0 8px 24px rgba(35, 24, 57, .04)' }}>
          <h2 style={{ marginTop: 0 }}>{section.number ? `${section.number} ${section.title}` : section.title}</h2>
          {section.body && <p style={docText}>{section.body}</p>}
          <DocBlocks blocks={section.blocks} />

          {section.subsections?.map(sub => (
            <div key={sub.title} style={{ marginTop: 24 }}>
              <h3 style={{ fontSize: '1.12rem', marginBottom: 8 }}>
                {sub.title}
              </h3>

              {sub.body && <p style={{ ...docText, marginTop: 0 }}>
                {sub.body}
              </p>}

              <DocBlocks blocks={sub.blocks} />

              {sub.image && (
                <img
                  src={sub.image}
                  alt={`Imagen de ${sub.title}`}
                  style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: 850,
                    height: 'auto',
                    margin: '24px auto',
                    borderRadius: 12,
                    objectFit: 'contain'
                  }}
                />
              )}
            </div>
          ))}

          {section.references && <div style={{ display: 'grid', gap: 12 }}>
            {section.references.map(ref => <p key={ref} style={{ ...docText, margin: 0, paddingLeft: 28, textIndent: -28 }}>{ref}</p>)}
          </div>}

        </article>)}
      </div>
    </div>
  </section>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openContact = () => { setContactOpen(true); setSent(false); };

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-dot"></span>
        Una nueva forma de conectar oportunidades y desarrollo profesional
        <a href="#como-funciona">Conoce la propuesta <ArrowRight size={13} /></a>
      </div>

      <header className="header">
        <div className="container nav-row">
          <Brand />
          <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
            <a href="#soluciones" onClick={closeMenu}>Soluciones</a>
            <a href="#como-funciona" onClick={closeMenu}>Cómo funciona</a>
            <a href="#planes" onClick={closeMenu}>Planes</a>
            <a href="#nosotros" onClick={() => { closeMenu(); setDetailsOpen(false); }}>Nosotros</a>
            <button className="nav-cta2" onClick={() => { closeMenu(); setDetailsOpen(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Investigación <ArrowRight size={15} /></button>
            <button className="nav-cta" onClick={() => { closeMenu(); openContact(); }}>Hablemos <ArrowUpRight size={15} /></button>
          </nav>
        </div>
      </header>

      <main>
        {detailsOpen ? <DetailsView onBack={() => { setDetailsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} /> : <>
          <section className="hero section" id="inicio">
            <div className="container hero-grid">
              <div className="hero-copy">
                <div className="eyebrow"><span className="eyebrow-line"></span> EMPLEABILIDAD CON PROPÓSITO</div>
                <h1>Tu próximo paso profesional empieza con <span>claridad.</span></h1>
                <p className="hero-lead">Conecta lo que buscas con lo que puedes desarrollar. Organiza tu búsqueda laboral y toma decisiones más informadas sobre tu crecimiento profesional.</p>
                <div className="hero-actions">
                  <a className="button button-dark" href="#soluciones">Explorar soluciones <ArrowRight size={17} /></a>
                  <a className="text-link" href="#como-funciona">Descubre cómo funciona <ArrowDownRight size={17} /></a>
                </div>
                <div className="hero-note"><ShieldCheck size={16} /> Tu proceso, tus decisiones. Sin promesas de contratación.</div>
              </div>
              <div className="hero-visual" aria-label="Vista ilustrativa de un panel de organización de búsqueda laboral">
                <div className="visual-orbit orbit-one"></div>
                <div className="visual-orbit orbit-two"></div>
                <div className="dashboard-card">
                  <div className="dashboard-top">
                    <div className="mini-brand"><span className="brand-mark small"><span></span><span></span><span></span></span> Mi espacio</div>
                    <div className="avatar">AM</div>
                  </div>
                  <div className="dashboard-greeting">
                    <span className="small-label">TU RUTA PROFESIONAL</span>
                    <h3>Un paso a la vez.</h3>
                    <p>Convierte tus objetivos en acciones concretas.</p>
                  </div>
                  <div className="progress-panel">
                    <div className="progress-head"><span>Objetivo de búsqueda</span><span className="progress-tag">En progreso</span></div>
                    <strong>Product Manager</strong>
                    <div className="progress-bar"><span></span></div>
                    <div className="progress-foot"><span>Perfil y requisitos</span><span>3 de 4 pasos</span></div>
                  </div>
                  <div className="dashboard-bottom">
                    <div className="mini-stat">
                      <span className="mini-stat-icon lilac"><BriefcaseBusiness size={16} /></span>
                      <div><strong>Oportunidades</strong><small>Organizadas en un lugar</small></div>
                      <ArrowUpRight size={15} className="stat-arrow" />
                    </div>
                    <div className="mini-stat">
                      <span className="mini-stat-icon mint"><Target size={16} /></span>
                      <div><strong>Próximo paso</strong><small>Fortalecer una competencia</small></div>
                      <ArrowUpRight size={15} className="stat-arrow" />
                    </div>
                  </div>
                  <div className="floating-note"><span className="floating-check"><Check size={14} /></span><span><strong>Más claridad</strong><small>Una búsqueda con dirección</small></span></div>
                </div>
                <div className="visual-caption"><span></span> Una experiencia integrada, centrada en ti</div>
              </div>
            </div>
            <div className="container hero-bottom">
              <span>BUSCAR</span><i></i><span>PREPARAR</span><i></i><span>AVANZAR</span>
              <p>El proceso profesional va más allá de encontrar una vacante.</p>
            </div>
          </section>

          <section className="problem-section section" id="nosotros">
            <div className="container problem-grid">
              <div>
                <div className="eyebrow"><span className="eyebrow-line"></span> EL RETO</div>
                <h2>Tu búsqueda laboral no debería sentirse como piezas sueltas.</h2>
              </div>
              <div className="problem-content">
                <p className="section-lead">Las oportunidades están repartidas entre portales, documentos, cursos y conversaciones. Conectar toda esa información puede ser difícil cuando cada herramienta funciona por separado.</p>
                <div className="fragmented-flow">
                  <div className="fragment-card"><IconWrap><Search size={18} /></IconWrap><strong>Encontrar</strong><span>Explorar oportunidades en diferentes fuentes.</span></div>
                  <div className="flow-connector"><ArrowRight size={17} /></div>
                  <div className="fragment-card"><IconWrap><FileText size={18} /></IconWrap><strong>Postularse</strong><span>Adaptar documentos y hacer seguimiento.</span></div>
                  <div className="flow-connector"><ArrowRight size={17} /></div>
                  <div className="fragment-card"><IconWrap><GraduationCap size={18} /></IconWrap><strong>Prepararse</strong><span>Reconocer competencias por fortalecer.</span></div>
                </div>
                <div className="insight-note"><Sparkles size={18} /><p><strong>La oportunidad:</strong> conectar la búsqueda de empleo con acciones concretas de preparación y desarrollo profesional.</p></div>
                <p className="hypothesis-note">Esta oportunidad es una hipótesis de negocio que debe validarse con profesionales y pruebas de uso.</p>
              </div>
            </div>
          </section>

          <section className="solutions-section section" id="soluciones">
            <div className="container">
              <div className="section-heading">
                <div>
                  <div className="eyebrow"><span className="eyebrow-line"></span> QUÉ HACEMOS</div>
                  <h2>Dos soluciones.<br /><span>Una ruta más clara.</span></h2>
                </div>
                <p className="section-lead heading-side">RAPIEMPLEO busca reunir la organización de oportunidades y la preparación profesional en una experiencia conectada.</p>
              </div>
              <div className="solution-cards">
                <article className="solution-card card-lilac">
                  <div className="solution-card-top"><IconWrap><BriefcaseBusiness size={21} /></IconWrap><span>01 / ENCONTRAR</span></div>
                  <h3>Copiloto de<br />búsqueda laboral</h3>
                  <p>Organiza oportunidades y facilita que entiendas cómo se relacionan con tu perfil y tus objetivos.</p>
                  <ul>
                    <li><Check size={15} /> Perfil y preferencias profesionales</li>
                    <li><Check size={15} /> Vacantes organizadas con su fuente original</li>
                    <li><Check size={15} /> Comparación orientativa de requisitos</li>
                    <li><Check size={15} /> Seguimiento de postulaciones y próximos pasos</li>
                    <li><Check size={15} /> Apoyo para adaptar tu hoja de vida</li>
                  </ul>
                  <a href="#como-funciona" className="card-link">Conoce el enfoque <ArrowUpRight size={16} /></a>
                  <div className="card-decoration decor-lilac"><Search size={92} strokeWidth={0.8} /></div>
                </article>
                <article className="solution-card card-mint">
                  <div className="solution-card-top"><IconWrap><Compass size={21} /></IconWrap><span>02 / PREPARAR</span></div>
                  <h3>Asistente de<br />desarrollo profesional</h3>
                  <p>Transforma los requisitos de los cargos que te interesan en posibles acciones para fortalecer tu perfil.</p>
                  <ul>
                    <li><Check size={15} /> Identificación orientativa de brechas</li>
                    <li><Check size={15} /> Plan de acción para tu desarrollo</li>
                    <li><Check size={15} /> Recursos y actividades de aprendizaje</li>
                    <li><Check size={15} /> Registro de logros y competencias</li>
                    <li><Check size={15} /> Práctica de entrevistas</li>
                  </ul>
                  <a href="#como-funciona" className="card-link">Conoce el enfoque <ArrowUpRight size={16} /></a>
                  <div className="card-decoration decor-mint"><TrendingUp size={105} strokeWidth={0.8} /></div>
                </article>
              </div>
              <div className="differentiator">
                <div className="differentiator-icon"><Layers3 size={23} /></div>
                <div><span className="small-label">NUESTRO DIFERENCIAL</span><h3>La vacante no es el final de la búsqueda. También puede orientar tu preparación.</h3></div>
                <p>La propuesta conecta oportunidades, postulaciones y desarrollo profesional para facilitar una experiencia continua, desde explorar opciones hasta definir qué hacer después.</p>
              </div>
            </div>
          </section>

          <section className="process-section section" id="como-funciona">
            <div className="container">
              <div className="section-heading process-heading">
                <div>
                  <div className="eyebrow"><span className="eyebrow-line"></span> CÓMO FUNCIONA</div>
                  <h2>De la oportunidad<br />a tu próximo paso.</h2>
                </div>
                <p className="section-lead heading-side">Un proceso pensado para ayudarte a organizarte y decidir con mayor información, sin perder de vista tus objetivos.</p>
              </div>
              <div className="steps">
                <div className="step">
                  <div className="step-number">01</div>
                  <IconWrap><Target size={20} /></IconWrap>
                  <h3>Define tu perfil</h3>
                  <p>Registra tu experiencia, competencias, preferencias y objetivos laborales.</p>
                  <span className="step-caption">TU PUNTO DE PARTIDA</span>
                </div>
                <div className="step-join"><ArrowRight size={18} /></div>
                <div className="step">
                  <div className="step-number">02</div>
                  <IconWrap><Search size={20} /></IconWrap>
                  <h3>Explora y compara</h3>
                  <p>Organiza oportunidades y revisa coincidencias y requisitos que aún no evidencias.</p>
                  <span className="step-caption">OPCIONES CON CONTEXTO</span>
                </div>
                <div className="step-join"><ArrowRight size={18} /></div>
                <div className="step">
                  <div className="step-number">03</div>
                  <IconWrap><Route size={20} /></IconWrap>
                  <h3>Actúa y haz seguimiento</h3>
                  <p>Prepara tus postulaciones y define acciones para acercarte a tus metas.</p>
                  <span className="step-caption">AVANCE CON DIRECCIÓN</span>
                </div>
              </div>
            </div>
          </section>

          <section className="ecosystem-section section">
            <div className="container ecosystem-grid">
              <div>
                <div className="eyebrow"><span className="eyebrow-line"></span> UNA VISIÓN CONECTADA</div>
                <h2>El crecimiento profesional no ocurre en solitario.</h2>
                <p className="section-lead">La propuesta contempla un ecosistema donde diferentes fuentes y actores pueden aportar valor a la ruta profesional de cada persona.</p>
                <a className="text-link" href="#nosotros">Conoce nuestro propósito <ArrowRight size={16} /></a>
              </div>
              <img
                src="/images/ecosistema.jpg"
                alt="Ecosistema RAPIEMPLEO"
                className="hero-image"
              />
            </div>
          </section>

          <section className="pricing-section section" id="planes">
            <div className="container">
              <div className="section-heading">
                <div>
                  <div className="eyebrow"><span className="eyebrow-line"></span> MODELO DE NEGOCIO</div>
                  <h2>Empieza por lo esencial.<br /><span>Avanza a tu ritmo.</span></h2>
                </div>
                <p className="section-lead heading-side">Un modelo freemium propuesto para que cada profesional pueda explorar el valor de la plataforma y decidir si necesita herramientas avanzadas.</p>
              </div>
              <div className="pricing-grid">
                <article className="price-card">
                  <div className="plan-label">PARA EMPEZAR</div>
                  <h3>Esencial</h3>
                  <p className="plan-description">Una base para organizar tu búsqueda.</p>
                  <div className="price"><strong>$0</strong><span>COP / siempre</span></div>
                  <div className="price-divider"></div>
                  <ul>
                    <li><Check size={16} /> Perfil profesional</li>
                    <li><Check size={16} /> Acceso básico a oportunidades disponibles</li>
                    <li><Check size={16} /> Guardado limitado de vacantes</li>
                    <li><Check size={16} /> Seguimiento inicial de postulaciones</li>
                  </ul>
                  <button className="button button-outline full-button" onClick={openContact}>Conocer la propuesta <ArrowRight size={16} /></button>
                </article>
                <article className="price-card price-featured">
                  <div className="popular-pill"><Sparkles size={13} /> PROPUESTA DESTACADA</div>
                  <div className="plan-label">PARA AVANZAR</div>
                  <h3>Premium integrado</h3>
                  <p className="plan-description">Búsqueda y desarrollo en una misma ruta.</p>
                  <div className="price"><strong>$30.000</strong><span>COP / mes · hipótesis inicial</span></div>
                  <div className="price-divider"></div>
                  <ul>
                    <li><Check size={16} /> Comparación ampliada de perfil y vacantes</li>
                    <li><Check size={16} /> Filtros, alertas y seguimiento avanzado</li>
                    <li><Check size={16} /> Apoyo para adaptar la hoja de vida</li>
                    <li><Check size={16} /> Posibles brechas y plan de desarrollo</li>
                    <li><Check size={16} /> Recursos y práctica de entrevistas</li>
                  </ul>
                  <button className="button button-dark full-button" onClick={openContact}>Me interesa <ArrowRight size={16} /></button>
                </article>
                <article className="price-card">
                  <div className="plan-label">APOYO PERSONALIZADO</div>
                  <h3>Servicios opcionales</h3>
                  <p className="plan-description">Acompañamiento humano para necesidades puntuales.</p>
                  <div className="price"><strong>$40.000–120.000</strong><span>COP / servicio · hipótesis inicial</span></div>
                  <div className="price-divider"></div>
                  <ul>
                    <li><Check size={16} /> Revisión personalizada de hoja de vida</li>
                    <li><Check size={16} /> Simulación de entrevistas</li>
                    <li><Check size={16} /> Orientación para la búsqueda laboral</li>
                    <li><Check size={16} /> Apoyo para estructurar un plan profesional</li>
                  </ul>
                  <button className="button button-outline full-button" onClick={openContact}>Consultar servicios <ArrowRight size={16} /></button>
                </article>
              </div>
              <p className="pricing-disclaimer"><ShieldCheck size={15} /> Los precios son hipótesis del modelo de negocio y deben validarse con usuarios potenciales. La plataforma no garantiza empleo, entrevistas ni salarios.</p>
            </div>
          </section>

          <section className="values-section section">
            <div className="container values-grid">
              <div className="values-intro">
                <div className="eyebrow"><span className="eyebrow-line"></span> LO QUE NOS GUÍA</div>
                <h2>Una herramienta para decidir, no para prometer.</h2>
              </div>
              <div className="value-item"><IconWrap><ShieldCheck size={20} /></IconWrap><div><h3>Transparencia</h3><p>Las comparaciones y recomendaciones son orientativas y deben poder entenderse.</p></div></div>
              <div className="value-item"><IconWrap><Target size={20} /></IconWrap><div><h3>Control del usuario</h3><p>Tu perfil y tus objetivos orientan el proceso; las decisiones siguen siendo tuyas.</p></div></div>
              <div className="value-item"><IconWrap><CircleCheck size={20} /></IconWrap><div><h3>Expectativas claras</h3><p>La propuesta busca facilitar el proceso, no garantizar resultados de contratación.</p></div></div>
            </div>
          </section>

          <section className="faq-section section">
            <div className="container faq-grid">
              <div>
                <div className="eyebrow"><span className="eyebrow-line"></span> PREGUNTAS FRECUENTES</div>
                <h2>Lo esencial,<br />sin rodeos.</h2>
                <p className="section-lead">Una mirada rápida a la propuesta de RAPIEMPLEO.</p>
              </div>
              <div className="faq-list">
                {[
                  ['¿RAPIEMPLEO es un portal de empleo?', 'No busca reemplazar los portales. La propuesta es ayudar a organizar oportunidades de fuentes disponibles y conectar los requisitos de las vacantes con la preparación profesional.'],
                  ['¿La plataforma garantiza conseguir empleo?', 'No. RAPIEMPLEO busca facilitar la organización, preparación y toma de decisiones. La contratación depende de muchos factores externos y no puede garantizarse.'],
                  ['¿Los precios ya son definitivos?', 'No. Los valores mostrados son hipótesis iniciales del documento de modelo de negocio. Tendrían que validarse con usuarios potenciales antes de convertirse en tarifas comerciales.'],
                  ['¿Ya existen alianzas con portales o universidades?', 'La propuesta contempla posibles relaciones con portales, empresas y entidades formativas, pero no se presentan como alianzas confirmadas.']
                ].map(([q, a], i) => (
                  <div className={`faq-item ${faqOpen === i ? 'faq-active' : ''}`} key={q}>
                    <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}>
                      <span>{q}</span><ChevronDown size={18} />
                    </button>
                    {faqOpen === i && <p>{a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="final-cta">
            <div className="container final-cta-inner">
              <div className="cta-spark"><Sparkles size={24} /></div>
              <div><span className="small-label">TU SIGUIENTE PASO</span><h2>Tu carrera es un camino.<br />Dale dirección.</h2><p>Conoce la propuesta de RAPIEMPLEO y ayúdanos a construir una experiencia más conectada.</p></div>
              <button className="button button-light" onClick={openContact}>Hablemos de RAPIEMPLEO <ArrowRight size={17} /></button>
              <div className="cta-decoration"></div>
            </div>
          </section>
        </>}
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand-col"><Brand light /><p>Conectamos la búsqueda laboral con el desarrollo profesional.</p></div>
          <div className="footer-links"><span>EXPLORA</span><a href="#soluciones">Soluciones</a><a href="#como-funciona">Cómo funciona</a><a href="#planes">Planes propuestos</a></div>
          <div className="footer-links"><span>RAPIEMPLEO</span><a href="#nosotros">Nuestra visión</a><button onClick={openContact}>Contacto</button><a href="#inicio">Volver al inicio ↑</a></div>
          <div className="footer-contact"><span>UNA PROPUESTA EN DESARROLLO</span><p>La experiencia y el modelo se validarán con usuarios antes de un lanzamiento comercial.</p></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} RAPIEMPLEO</span><span>Oportunidades con contexto. Desarrollo con dirección.</span></div>
      </footer>

      {contactOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setContactOpen(false); }}>
        <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title">
          <button className="modal-close" onClick={() => setContactOpen(false)} aria-label="Cerrar"><X size={20} /></button>
          {!sent ? <>
            <div className="modal-icon"><Mail size={22} /></div>
            <span className="small-label">SIGAMOS LA CONVERSACIÓN</span>
            <h2 id="contact-title">¿Te interesa RAPIEMPLEO?</h2>
            <p>Déjanos tus datos y una forma de contacto. Este formulario es una demostración visual: todavía no envía información a un servidor.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label>Tu nombre<input required name="name" placeholder="¿Cómo te llamas?" /></label>
              <label>Correo electrónico<input required type="email" name="email" placeholder="tu@correo.com" /></label>
              <label>¿Qué te interesa?<select name="interest" defaultValue="conocer"><option value="conocer">Conocer la propuesta</option><option value="usuario">Probar la plataforma en el futuro</option><option value="alianza">Explorar una posible alianza</option><option value="servicios">Servicios de orientación profesional</option></select></label>
              <button className="button button-dark full-button" type="submit">Enviar interés <Send size={16} /></button>
            </form>
          </> : <div className="success-state"><div className="success-icon"><Check size={26} /></div><h2 id="contact-title">¡Gracias por tu interés!</h2><p>Esta es una demostración de la experiencia. Para recibir mensajes reales, será necesario conectar el formulario a un servicio de envío o backend.</p><button className="button button-dark full-button" onClick={() => setContactOpen(false)}>Cerrar</button></div>}
        </div>
      </div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
