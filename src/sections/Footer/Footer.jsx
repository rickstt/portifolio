import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
        <p>Copyright &copy; 2025 by Henrique Santos & BlistCode. <br />Todos os direitos reservados.</p>
    </section>
  )
}

export default Footer