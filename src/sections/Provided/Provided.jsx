import React from 'react'
import styles from './ProvidedStyles.module.css'
import foto1 from '../../assets/devsites.webp'
import foto2 from '../../assets/otimizacao.webp'
import ProvidedCard from '../../common/ProvidedCard'

function Provided() {
  return (
    <section id='provided' className={styles.container}>
      <h1 className='sectionTitle'>Serviços Prestados</h1>
      <div className={styles.providedContainer}>
        <ProvidedCard src={foto1} h3="Websites modernos e otimizados" p="Criação websites modernos, rápidos e responsivos, alinhados à identidade da sua marca. Foco em design intuitivo, performance otimizada e experiência do usuário, garantindo uma presença digital impactante e eficaz." />
        <ProvidedCard src={foto2} h3="Otimização de Sistemas e SEO" p="Transformação do desempenho do seu sistema, tornando-o mais rápido, eficiente e escalável. Também aplico estratégias de SEO para otimizar a visibilidade do seu site nos mecanismos de busca, garantindo mais acessos e resultados melhores para o seu negócio." />
        <ProvidedCard src={foto1} h3="Consultoria em desenvolvimento de sistemas" p=" Orientação especializada no desenvolvimento de sistemas, otimização de processos, escolha estratégica de ferramentas e implementação de soluções eficientes, garantindo inovação e crescimento sustentável para impulsionar seu negócio." />
        <ProvidedCard src={foto2} h3="Construção e Integração de APIs" p="Desenvolvimento de APIs personalizadas para integrar sistemas com eficiência e segurança. Foco na escalabilidade, alta performance e confiabilidade, garantindo comunicação ágil entre plataformas e impulsionando a inovação do seu negócio." />
      </div>
    </section>
  )
}

export default Provided
