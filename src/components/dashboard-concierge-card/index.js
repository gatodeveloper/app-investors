import React from 'react'
import styles from './styles.module.sass'


const DashboarConciergeCard = (props) => {

  const { concierge } = props

  return (

    <section className={'white-card ' + styles['dashboard-concierge-card']}>
        <p className="text-18 bold-600">Tu asesor asignado</p>
        <header className={styles['header-concierge']}>
          <div className="gs keep-lay">
            <div className="lay-auto">
              <figure>
                <img src={concierge?.image_profile} width="102px"  alt=""/>
              </figure>
            </div>
            <div className="lay">
              <h3>{ concierge?.first_name } { concierge?.last_name }</h3>
              <span>{ concierge?.location }</span>
            </div>
          </div>
        </header>
        <p className='__quote'>{ concierge?.quote }</p>
        <div>
          <div className="gs keep-lay">
            <div className="lay flex align-items-center">
              <b className='text-33 bold-600 mr-10px'>{ concierge?.years_experience }</b>
              <span>Años de experiencia</span>
            </div>
            <div className="lay flex align-items-center">
              <b className='text-33 bold-600 mr-10px'>{ concierge?.properties_sold }</b>
              <span>Depas vendidos</span>
            </div>
          </div>
        </div>
        <div className={styles['skills-area']}>
          <p>Habilidades</p>
          <ul>
            { concierge?.skills.map( (skill,k) => (<li key={k}>{skill}</li>))}          
          </ul>
        </div>
        <a className='btn btn-green btn-block btn-sm mt-20px' href={concierge?.whatsapp_number} target="_black">Mensajear a mi asesor</a>
    </section>
  )
}

export default DashboarConciergeCard


