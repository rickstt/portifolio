import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import gitIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme} = useTheme();

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Avatar profissional de Henrique Santos" />

            <img className={styles.colorMode} src={themeIcon} alt="Icone do modo de cores" onClick={toggleTheme}/>
        </div>

        <div className={styles.info}>
            <h1>Henrique
                <br />
                Santos
            </h1>
            <h2>Desenvolvedor Fullstack</h2>
            <span>
                <a href="https://github.com/rickstt" target='_blank'>
                    <img src={gitIcon} alt="Icone Github" />
                </a>
                <a href="https://linkedin.com/in/rickstt" target='_blank'>
                    <img src={linkedinIcon} alt="Icone linkedin" />
                </a>
            </span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores beatae praesentium, sint deleniti quam hic. Aspernatur nemo alias officiis, laudantium porro perspiciatis libero, ratione similique velit nostrum ipsam, quam natus?</p>
            <a href={CV} download>
                <button className="hover">Resumo</button>
            </a>
        </div>
    </section>
  )
}

export default Hero