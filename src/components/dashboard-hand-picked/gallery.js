import React from 'react'
import styles from './styles.module.sass'


const HandPickedGallery = (props) => {

  return (

    <section className={'gs ' + styles['hand-picked-gallery']}>
        
        <div className={'lay-70 ' + styles['main-card']}>

          <figure className={styles['preview-photos']}>
            <b className={styles['__id']}>JM59</b>
            <span className={styles['__location']}>Tabacalera, CDMX</span>
          </figure>

          <div className={styles['__info']}>
            <ul>
              <li>
                <figure>
                  <img src="https://lahaus.imgix.net/static/plus/investors/assets/area-outline.svg" alt=""/>
                </figure>
                <span>38m² - 162m²</span>
              </li>
              <li>
                <figure>
                  <img src="https://lahaus.imgix.net/static/plus/investors/assets/bedroom.png" alt=""/>
                </figure>
                <span>1 - 2 recámaras</span>
              </li>


              <li>
                <figure>
                  <img src="https://lahaus.imgix.net/static/plus/investors/assets/bathroom.png" alt=""/>
                </figure>
                <span>1 baño</span>
              </li>

              <li>
                <figure>
                  <img src="https://lahaus.imgix.net/static/plus/investors/assets/front-car.svg" alt=""/>
                </figure>
                <span>1 Parking</span>
              </li>              
            </ul>
          </div>

          <div className={'gs align-items-center ' +styles['__price-n-options']}>
            <div className='lay p-20'>
              <span>Desde</span>
              <b>2.7 Millones</b>
            </div>
            <div className='lay'>
              <a className='btn btn-block btn-sm' href="/" >Ver desarrollo</a>
            </div>
          </div>

        </div>

        <div className={'lay-30 ' +styles['thumbsnail-cards']}>

          {
            [1,2,3].map( (item, k) => (
              <figure className={styles['preview-photos']}>
                <span className={styles['__id']}>JM59</span>
                <span className={styles['__location']}>Tabacalera, CDMX</span>
              </figure>
            ))
          }

        </div>
        
    </section>
  )
}

export default HandPickedGallery


