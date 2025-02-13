import React from 'react'
import styles from './ProvidedStyles.module.css'
import foto1 from '../../assets/viberr.png'
import ProvidedCard from '../../common/ProvidedCard'

function Provided() {
  return <section id='provided' className={styles.container}>
    <h1 className='sectionTitle'>Serviços Prestados</h1>
    <div className={styles.providedContainer}>
        <ProvidedCard src={foto1} h3="Mentoria" p="Mentoria em tecnologia"/>
    </div>
  </section>
}

export default Provided