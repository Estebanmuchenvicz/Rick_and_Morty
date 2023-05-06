import style from './about.module.css'
import perfil from '../../assets/img/perfil.jpg';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
function About (){
    return(
        <div className={style.container}>
            <div>
            <h2>Esteban Muchenvicz</h2>
            <h3>Full Stack Developer</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta voluptatum blanditiis natus, omnis rerum quo, cupiditate ut harum corporis accusamus rem commodi. In id necessitatibus molestiae eius esse voluptatum!</p>
            <div >
                <li className={style.social}>
                    <i><BsLinkedin href='https://www.linkedin.com/in/rodolfo-esteban-muchenvicz/'/></i>
                    <i><BsGithub href='https://github.com/Estebanmuchenvicz/'/></i>
                    <i><BsInstagram href='https://www.instagram.com/esteban.much/'/></i>
                </li>

            </div>
            </div>

            <div>
                <img src={perfil} alt="" />
            </div>
            
        </div>
    )
};

export default About;