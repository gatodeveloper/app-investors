import React from 'react'
import styles from './styles.module.sass'


const DashboarSidebarMenu = (props) => {

  return (

    <section className={styles['dashboard-sidebar-menu']}>      
        <header className={styles['header-sidebar-menu']}>            
          <figure>
            <a href="https://www.lahaus.com/" className={styles['__active']}>
              <img src="https://lahaus.imgix.net/static/plus/investors/assets/isotipo.svg" width="24px"  height="24px" alt=""/>
            </a>
          </figure>              
        </header>

        <section>
          <nav className={styles['__nav']}>
            <a href="./" className={styles['__active']}>
              <img src="https://lahaus.imgix.net/static/plus/investors/assets/home-icon.svg" width="15px"  height="auto" alt=""/>
              <span>Club</span>
            </a>
            <a href="https://www.lahaus.com/mi-haus/para-ti">
              <img src="https://lahaus.imgix.net/static/plus/investors/assets/ideas-icon.svg" width="10px"  height="auto" alt=""/>
              <span>Para ti</span>
            </a>
            <a href="https://www.lahaus.com/mi-haus/guardados/favoritos">
              <img src="https://lahaus.imgix.net/static/plus/investors/assets/heart-icon.svg" width="15px"  height="auto" alt=""/>
              <span>Guardados</span>
            </a>
            <a href="https://www.lahaus.com/mi-haus/perfil/">
              <img src="https://lahaus.imgix.net/static/plus/investors/assets/user-profile.svg" width="15px"  height="auto" alt=""/>
              <span>Perfil</span>
            </a>
          </nav>          
        </section>

        
    </section>
  )
}

export default DashboarSidebarMenu


