import style from "./about.module.css";
import perfil from "../../assets/img/perfil.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function About() {
  return (
    <div className={style.containerSection}>
      <div className={style.containerAbout}>
        <div>
          <h2>Esteban Muchenvicz</h2>
          <h3>Full Stack Developer</h3>
          <div className={style.paragraphContainer}>
          <p>
            ¡Hola! Soy Esteban, un apasionado Desarrollador Web Full Stack con
            especial interés en el desarrollo Front End.
          </p>

          <p>
            En la última década, trabajé en el campo de "Comunicación Social" y
            decidí crear mi propio medio de comunicación. Durante este proceso,
            me adentré en el mundo de la programación para desarrollar mi propia
            web. Descubrí mi pasión por la tecnología y tomé la valiente
            decisión de hacer la transición hacia una carrera en desarrollo web.
          </p>

          <p>
            Para mejorar mis habilidades, me inscribí en Soy Henry Bootcamp,
            donde perfeccioné mis conocimientos en desarrollo web 🚀.
          </p>

          <p>
            🛠 Tecnologías: JavaScript | React.js | Redux | Node.js | PostgreSQL
            | Express.js | MongoDB | HTML5 | CSS | SCRUM | Git/GitHub
          </p>
          </div>
          <div>
            <li className={style.social}>
              <a
                href="https://www.linkedin.com/in/esteban-muchenvicz/"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <BsLinkedin />
                </i>
              </a>
              <a
                href="https://github.com/Estebanmuchenvicz/"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <BsGithub />
                </i>
              </a>
            </li>
          </div>
        </div>

        <div>
          <img src={perfil} alt="imgen" />
        </div>
      </div>
    </div>
  );
}

export default About;
