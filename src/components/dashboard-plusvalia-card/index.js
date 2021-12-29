import React from 'react'
import styles from './styles.module.sass'


const DashboarPlusvaliaCard = (props) => {

  return (

    <section className={'white-card ' +styles['dashboard-plusvalia-card']}>
      
        <header className={styles['header-plusvalia']}>
            <div className='gs'>        
              <div className='lay-'>
                <figure>
                  <img src="https://lahaus.imgix.net/static/plus/investors/assets/plus-green.png" width="50px"  height="50px" alt=""/>
                </figure>
              </div>
              <div className='lay-100'>
                <h3>Top Plusvalía</h3>
                <p className="mb-0">Colonias con mayor plusvalía en el último trimestre</p>
              </div>
            </div>
        </header>

        <section className={styles['list-plusvalia']}>
          {
            [1,2].map( (item, i)=> (
              <div className={styles['list-plusvalia__item']}>
                <span className={styles['__counter']}>{i+1}</span>
                <ul>
                  <li>
                    <span className={styles['__title']}><b>Agrícola Oriental</b></span>
                    <span className={styles['__value']}>
                      <i className={styles['__icon'] +' '+ styles['__icon-down']}></i>
                    </span>            
                  </li>
                  <li className={styles['li-dotted']}>
                    <span className={styles['__name']}>Plusvalia</span>
                    <span className={styles['__value']}>3.6%</span>
                  </li>
                  <li>
                    <span className={styles['__name']}>Precio por m²</span>
                    <span className={styles['__value']}>45,000</span>
                  </li>
                </ul>           
              </div>
            ))
          }
          
      </section>
        
    </section>
  )
}

export default DashboarPlusvaliaCard


