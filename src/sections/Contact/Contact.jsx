import { useRef, useState } from "react";
import styles from "./ContactStyles.module.css";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

    function sendEmail(e) {
        e.preventDefault();

        if (!form.current) return;

        const formData = new FormData(form.current);
        const templateParams = {
            from_name: formData.get("from_name"),
            from_email: formData.get("from_email"),
            message: formData.get("message"),
            subject: formData.get("subject"),
        };

        emailjs
            .send("service_mhy4prc", "template_1nea1la", templateParams, "bGB9wkhRHT5dvbe_P")
            .then(() => {
                setIsModalOpen(true); // Abre o modal ao enviar com sucesso
                form.current.reset(); // Limpa o formulário
            })
            .catch((error) => {
                console.error("Erro ao enviar email:", error.text);
            });
    }

    return (
        <section id="contact" className={styles.container}>
            <h1 className="sectionTitle">Contato</h1>

            <form ref={form} onSubmit={sendEmail}>
                <div className="formGroup">
                    <label htmlFor="name" hidden>Nome</label>
                    <input type="text" name="from_name" id="name" placeholder="Nome" required />
                </div>

                <div className="formGroup">
                    <label htmlFor="email" hidden>Email</label>
                    <input type="email" name="from_email" id="email" placeholder="Email" required />
                </div>

                <div className="formGroup">
                    <label htmlFor="subject" hidden>Assunto</label>
                    <input type="text" name="subject" id="subject" placeholder="Assunto" required />
                </div>

                <div className="formGroup">
                    <label htmlFor="message" hidden>Mensagem</label>
                    <textarea name="message" id="message" placeholder="Mensagem" required />
                </div>

                <input className="hover btn" type="submit" value="Enviar" />
            </form>

            {/* Modal de Sucesso */}
            {isModalOpen && (
                <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.checkAnimation}>
                        <svg viewBox="0 0 52 52" className={styles.checkSvg}>
                            <circle cx="26" cy="26" r="25" className={styles.circle} />
                            <path d="M14 27l7 7 16-16" className={styles.check} />
                        </svg>
                    </div>
                    <h3>Email enviado com sucesso!</h3>
                    <button onClick={() => setIsModalOpen(false)}>OK</button>
                </div>
            </div>
            )}

        </section>
    );
}

export default Contact;
