import React, { useState } from 'react'
import DashboardUserWelcome from '../../components/dashboard-user-welcome';
import DashboardAppWelcome from '../../components/dashboard-app-welcome';
import DashboardConciergeCard from '../../components/dashboard-concierge-card';
import DashboardPlusvaliaCard from '../../components/dashboard-plusvalia-card';
import DashboardHandPicked from '../../components/dashboard-hand-picked';


import styles from './styles.module.sass'
import DashboarSidebarMenu from '../../components/dashboard-sidebar-menu';

const Dashboard = () => {

  return (
    <section className={'flex ' +styles['page-dashboard-view']}>
        <DashboarSidebarMenu></DashboarSidebarMenu>   
        <section className={styles['main-dashboard-view']}>
            <section className={styles['group-components']}>
                <div className='gs gs-block-sm gap-20'>
                    <div className='lay-70 flex-direction-column flex'>
                        <DashboardUserWelcome></DashboardUserWelcome>
                        <DashboardAppWelcome></DashboardAppWelcome>
                    </div>
                    <div className='lay-30'>
                        <DashboardConciergeCard></DashboardConciergeCard>
                    </div>
                </div>
            </section>

            <section className={styles['group-components']}>
                <div className='gs gs-block-sm gap-20'>
                    <div className='lay-70 lay-sm-50'>
                        <DashboardHandPicked></DashboardHandPicked>
                    </div>
                    <div className='lay-30 lay-sm-50'>
                        <DashboardPlusvaliaCard></DashboardPlusvaliaCard>
                    </div>
                </div>
            </section>
        </section>
    </section>
  )
}

export default Dashboard


