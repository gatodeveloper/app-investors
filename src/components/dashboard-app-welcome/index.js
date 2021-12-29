import React from 'react'
import styles from './styles.module.sass'


const DashboarAppWelcome = (props) => {

  return (

    <section className={'white-card ' + styles['dashboard-app-welcome']}>      
        <section className={styles["__inner-section"] + ' text-center'}>
          <h4 className="text-center">Bienvenido al Club</h4>
          <p className="text-16 bold-600">En este panel de inversionista tendrás acceso a los benficios exlusivos de La Haus Plus como: </p>
          <div className={styles['__group-icons']}>
            <div className={styles['__icon']}>
              <figure>
                <img src="https://lahaus.imgix.net/static/plus/investors/assets/user.png" width="56px" height="56px" alt=""/>
              </figure>
              <span>Asesor Personal</span>
            </div>
            <div className={styles['__arrow']}>
              <figure>
                <img src="https://lahaus.imgix.net/static/plus/investors/assets/arrow.png" width="34px"  alt=""/>
              </figure>
            </div>
            <div className={styles['__icon']}>
              <figure>
                <img src="https://lahaus.imgix.net/static/plus/investors/assets/graphics-chart.png" width="49px" height="49px" alt=""/>
              </figure>
              <span>Data sobre Inversiones </span>
            </div>
            <div className={styles['__arrow']}>
              <figure>
                <img src="https://lahaus.imgix.net/static/plus/investors/assets/arrow.png" width="34px"  alt=""/>
              </figure>
            </div>
            <div className={styles['__icon']}>
              <figure>
                <img src="https://lahaus.imgix.net/static/plus/investors/assets/enterprise.png" width="49px" height="49px" alt=""/>
              </figure>
              <span>Preventas Especiales</span>
            </div>          
          </div>
        </section>            
    </section>
  )
}

export default DashboarAppWelcome


