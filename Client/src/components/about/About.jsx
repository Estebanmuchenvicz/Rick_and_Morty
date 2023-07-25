import style from './about.module.css'
import perfil from '../../assets/img/perfil.jpg';
import { BsGithub, BsLinkedin} from "react-icons/bs";

function About (){
    return(
        <div className={style.containerSection}>
        <div className={style.containerAbout}>
            <div>
            <h2>Esteban Muchenvicz</h2>
            <h3>Full Stack Developer</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta voluptatum blanditiis natus, omnis rerum quo, cupiditate ut harum corporis accusamus rem commodi. In id necessitatibus molestiae eius esse voluptatum!</p>
            <div >
                <li className={style.social}>
                <a href="https://www.linkedin.com/in/esteban-muchenvicz/" target="_blank" rel="noreferrer">
                    <i><BsLinkedin /></i>
                    </a>
                    <a href='https://github.com/Estebanmuchenvicz/' target="_blank" rel="noreferrer">
                        <i><BsGithub /></i>
                        </a>
                </li>
            </div>
            </div>

            <div>
                <img src={perfil} alt="imgen" />
            </div>          
        </div>
        </div>
    )
};

export default About;