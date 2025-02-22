import React from 'react'
import styles from './ProvidedStyles.module.css'
import foto1 from '../../assets/img-coding.webp'
import foto2 from '../../assets/img-meet.webp'
import ProvidedCard from '../../common/ProvidedCard'

function Provided() {
  return (
    <section id='provided' className={styles.container}>
      <h1 className='sectionTitle'>Serviços Prestados</h1>
      <div className={styles.providedContainer}>
        <ProvidedCard src={foto1} />
        <ProvidedCard src={foto2} />
        <ProvidedCard src={foto1} />
        <ProvidedCard src={foto2} />
      </div>
    </section>
  )
}

export default Provided
