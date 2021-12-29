import React from 'react'
import HandPickedGallery from './gallery'
import styles from './styles.module.sass'


const DashboarHandPicked = (props) => {

  return (

    <section className={'white-card ' + styles['dashboard-hand-picked']}>      
        <header className={styles['header-hand-picked']}>
            <div className='gs align-items-center gap-20'>        
              <div className='lay-'>
                <figure>
                  <img src="https://lahaus.imgix.net/static/plus/investors/assets/hands.png" width="50px"  height="50px" alt=""/>
                </figure>
              </div>
              <div className='lay-50'>
                <h3>Hand Picked</h3>
              </div>
              <div className='lay-100'>
                <span className="mb-0">Tu asesor seleccionó estas preventas para ti, según tus intereses</span>
              </div>
            </div>
        </header>

        <HandPickedGallery></HandPickedGallery>              
    </section>
  )
}

export default DashboarHandPicked


