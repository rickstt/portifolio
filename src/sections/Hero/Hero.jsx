import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png';
import dia from '../../assets/sun.svg';
import noite from '../../assets/moon.svg';
import gitLight from '../../assets/github-light.svg';
import gitDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? dia : noite;
    const gitIcon = theme === 'light' ? gitLight : gitDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

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
            <p className={styles.description}>Apaixonado por inovação e transformação digital, fundador do projeto Seensus, CTO da Blist Code inc. Presto serviços de consultoria em tecnologia e atuo na criação de sistemas inteligentes</p>
            <a href={CV} download>
                <button className="hover">Resumo</button>
            </a>
        </div>
    </section>
  )
}

export default Hero