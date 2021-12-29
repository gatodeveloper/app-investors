import React from 'react'
import styles from './styles.module.sass'


const DashboarConciergeCard = (props) => {

  return (

    <section className={'white-card ' + styles['dashboard-concierge-card']}>
        <p className="text-18 bold-600">Tu asesor asignado</p>
        <header className={styles['header-concierge']}>
          <div className="gs keep-lay">
            <div className="lay-auto">
              <figure>
                <img src="https://lahaus.imgix.net/static/plus/investors/assets/avatar.png" width="102px"  alt=""/>
              </figure>
            </div>
            <div className="lay">
              <h3>Youseff Abraham</h3>
              <span>CDMX</span>
            </div>
          </div>
        </header>
        <p className='__quote'>“Garantizar que tu capital crezca a través de inversiones inteligentes”</p>
        <div>
          <div className="gs keep-lay">
            <div className="lay flex align-items-center">
              <b className='text-33 bold-600 mr-10px'>05</b>
              <span>Años de experiencia</span>
            </div>
            <div className="lay flex align-items-center">
              <b className='text-33 bold-600 mr-10px'>78</b>
              <span>Depas vendidos</span>
            </div>
          </div>
        </div>
        <div className={styles['skills-area']}>
          <p>Habilidades</p>
          <ul>
            <li>Preventas</li>
            <li>CDMX</li>
            <li>Inversiones</li>
            <li>Plus Valía</li>
          </ul>
        </div>
        <a className='btn btn-green btn-block btn-sm mt-20px' href="/" >Mensajear a mi asesor</a>
    </section>
  )
}

export default DashboarConciergeCard


