import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return <section id='skills' className={styles.container}>
    <h1 className="sectionTitle">Competências</h1>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        <SkillList src={checkMarkIcon} skill="TypeScript"/>
        <SkillList src={checkMarkIcon} skill="React"/>
        <SkillList src={checkMarkIcon} skill="TailWind CSS"/>
    </div>
    <hr />
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="NodeJS"/>
        <SkillList src={checkMarkIcon} skill="Spring"/>
        <SkillList src={checkMarkIcon} skill="API Restful"/>
        <SkillList src={checkMarkIcon} skill="React Native"/>
    </div>
    <hr />
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Docker"/>
        <SkillList src={checkMarkIcon} skill="Jenkins"/>
        <SkillList src={checkMarkIcon} skill="Git"/>
        <SkillList src={checkMarkIcon} skill="JWT"/>
    </div>
    
  </section>
}

export default Skills