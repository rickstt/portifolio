import React from 'react'
import styles from './ProvidedStyles.module.css'
import foto1 from '../../assets/img-dev.webp'
import foto2 from '../../assets/img-meet.webp'
import foto3 from '../../assets/img-seo.webp'
import ProvidedCard from '../../common/ProvidedCard'

function Provided() {
  return (
    <section id='provided' className={styles.container}>
      <h1 className='sectionTitle'>Serviços Prestados</h1>
      <div className={styles.providedContainer}>
        <div className={styles.overlay}>
          <ProvidedCard src={foto1} />
          <p className={styles.texto}>Criação sistemas, APIs, automações e aplicativos personalizados para tornar sua empresa mais eficiente e conectada.</p>
        </div>
        <div className={styles.overlay}>
          <ProvidedCard src={foto2} />
          <p className={styles.texto}>Consultoria e mentoria em tecnologia para ajudar sua empresa a implementar soluções digitais e tomar decisões estratégicas.</p>
        </div>
        <div className={styles.overlay}>
          <ProvidedCard src={foto3} />
          <p className={styles.texto}>Otimização de sites, sistemas e estratégias de marketing e SEO para melhorar sua presença online e aumentar a visibilidade.</p>
        </div>
      </div>
    </section>
  )
}

export default Provided
