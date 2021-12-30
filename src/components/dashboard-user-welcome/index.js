import React from 'react'
import styles from './styles.module.sass'


const DashboarUserWelcome = (props) => {

  const { user } = props

  return (

    <section className={styles['dashboard-user-welcome']}>
      <h3>Hola, {user?.first_name} {user?.last_name}</h3>
    </section>
  )
}

export default DashboarUserWelcome


