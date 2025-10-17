export default function App() 
{
  return (
    <>
      <header className="site-header">
        <div className="container">
          <img className="avatar" src="./pp.jpg" alt="Foto de perfil" />
          <h1>Carrascosa Suarez Francisco Eduardo</h1>
          <p className="subtitle">Desarrollador Web Full Stack</p>
          <nav className="site-nav" aria-label="Secciones">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#certificados">Certificados</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="sobre-mi" className="section">
          <div className="container">
            <h2>Sobre mí</h2>
            <p>
              Soy desarrollador Full Stack con perfil emprendedor, además soy estudiante de Ingeniería en Sistemas de Información y de la Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional (FRT).
             Me especializo en el desarrollo de aplicaciones web completas, trabajando tanto en el front-end como en el back-end con JavaScript, React, MySQL, C# y .NET, priorizando la eficiencia, la escalabilidad y la calidad del código.
Tengo conocimientos en ciberseguridad aplicada, lo que me permite implementar buenas prácticas de protección y gestión segura de la información.
 También me formé en inteligencia artificial generativa y desarrollo con IA, integrando tecnologías actuales al proceso de desarrollo.
Como emprendedor, busco crear soluciones tecnológicas que aporten valor real a empresas y usuarios, combinando visión técnica con enfoque estratégico.
 Trabajo con metodologías ágiles y herramientas como JIRA para una gestión profesional de proyectos.
Cuento con nivel B2 de inglés, lo que me permite acceder a documentación técnica y colaborar en entornos internacionales.
            </p>
          </div>
        </section>

        <section id="habilidades" className="section">
          <div className="container">
            <h2>Habilidades</h2>
            <ul className="tags">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>C#</li>
              <li>.NET</li>
              <li>API REST</li>
            </ul>
          </div>
        </section>

        <section id="certificados" className="section">
          <div className="container">
            <h2>Algunos Certificados</h2>
            <div className="grid">
              <article className="card">
                <img src="./Rep-PC.png" alt="Certificado 1" />
                <h3>Reparación y Mantenimiento de PC</h3>
                <p>2025</p>
              </article>
              <article className="card">
                <img src="./fund-cs.jpg" alt="Certificado 2" />
                <h3>Fundamentos de Seguridad de Microsoft</h3>
                <p>2025</p>
              </article>
              <article className="card">
                <img src="/of-cs.jpg" alt="Certificado 3" />
                <h3>Seguridad Ofensiva: Bash para Pentesting</h3>
                <p>2025</p>
              </article>
              <article className="card">
                <img src="/av-mysql.jpg" alt="Certificado 4" />
                <h3>MySQL Avanzado</h3>
                <p>2025</p>
              </article>
              <article className="card">
                <img src="/software-e.png" alt="Certificado 5" />
                <h3>Software Engineer</h3>
                <p>2025</p>
              </article>
              <article className="card">
                <img src="/emp.jpg" alt="Certificado 5" />
                <h3>IA Generativa Para Líderes Empresariales</h3>
                <p>2025</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="container">
            <h2>Contacto</h2>
            <p>Comunicate conmigo:</p>
            <ul className="contact-list">
              <li>
                Email: <a href="mailto:soyunemail@fake.com">soyunemail@fake.com</a>
              </li>
              <li>
                LinkedIn: <a href="https://www.linkedin.com/in/holasoyunlinkedinfake" target="_blank" rel="noopener noreferrer">linkedin.com/in/holasoyunlinkedinfake</a>
              </li>
              <li>
                GitHub: <a href="https://github.com/holasoyungithubfake" target="_blank" rel="noopener noreferrer">github.com/holasoyungithubfake</a>
              </li>
            </ul>
          </div>
        </section>

      </main>
      <footer className="site-footer">
        <div className="container">
          <small>© 2025 Todos los derechos reservados.</small>
        </div>
      </footer>
    </>
  )
}
