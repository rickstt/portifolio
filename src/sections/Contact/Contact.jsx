import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contato</h1>
        <form action="">
            <div className="formGroup">
                <label htmlFor="nome" hidden>Nome</label>
                <input type="text" name="nome" id="nome" placeholder="Nome" required/>
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>Email</label>
                <input type="mail" name="email" id="email" placeholder="Email" required/>
            </div>
            <div className="formGroup">
                <label htmlFor="mensagem" hidden>Mensagem</label>
                <textarea name="mensagem" id="mensagem" placeholder="Mensagem" required/>
            </div>
            <input className="hover btn" type="submit" value="Submit"/>
        </form>
    </section>
  )
}

export default Contact