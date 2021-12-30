import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";


import DashboardUserWelcome from '../../components/dashboard-user-welcome';
import DashboardAppWelcome from '../../components/dashboard-app-welcome';
import DashboardConciergeCard from '../../components/dashboard-concierge-card';
import DashboardPlusvaliaCard from '../../components/dashboard-plusvalia-card';
import DashboardHandPicked from '../../components/dashboard-hand-picked';

import utils from '../../utils'
import styles from './styles.module.sass'
import DashboarSidebarMenu from '../../components/dashboard-sidebar-menu';

import service from '../../servicies/dashboard'

const Dashboard = () => {

    const [init] = useState();
    const [userData, setUserData] = useState(null);
    const [user, setUser] = useState(null);
    const [concierges, setConcierges] = useState(null);
    const [concierge, setConcierge] = useState(null);
    const [valuations, setValuations] = useState(null);
    const [valuation, setValuation] = useState(null);
    const query = new URLSearchParams(useLocation().search);
    const userEmail = query.get("user")

    const getCustomers = async () => {
        let fetch = await service.fetchCustomers();
        const csvToJSON = utils.csvToJSON(fetch)
        setUserData(csvToJSON);
    }

    const getConcierges = async () => {
        let fetch = await service.fetchConcierges();
        const csvToJSON = utils.csvToJSON(fetch)
        setConcierges(csvToJSON);
    }

    const getValuations = async () => {
        let fetch = await service.fetchValuations();
        const csvToJSON = utils.csvToJSON(fetch)
        setValuations(csvToJSON);
    }


    useEffect(() => {
        getCustomers();
        getConcierges();
        getValuations();
    },[init])


    useEffect(() => {       
        if(userData){        
            const find = service.findUser(userEmail, userData) || userData[0];
            setUser(find);
        }
    }, [userData, userEmail]);


    useEffect(() => {        
        if(concierges && user){        
            const fint = service.findConcierge(user.country, concierges);
            setConcierge(fint);
        }
        
    }, [user, concierges]);


    useEffect(() => {        
        if(valuations && user){        
            const find = service.findValuation(user.city, valuations);
            setValuation(find);
        }
        
    }, [user, valuations]);

    

  return (
    <section className={'flex ' +styles['page-dashboard-view']}>
        <DashboarSidebarMenu></DashboarSidebarMenu>   
        <section className={styles['main-dashboard-view']}>
            <section className={styles['group-components']}>
                <div className='gs gs-block-sm gap-20'>
                    <div className='lay-70 flex-direction-column flex'>
                        {/* {JSON.stringify(valuations)} */}
                        {/* {JSON.stringify(valuation)} */}
                        <DashboardUserWelcome user={user}></DashboardUserWelcome>
                        <DashboardAppWelcome></DashboardAppWelcome>
                    </div>
                    <div className='lay-30'>
                        <DashboardConciergeCard concierge={concierge}></DashboardConciergeCard>
                    </div>
                </div>
            </section>

            <section className={styles['group-components']}>
                <div className='gs gs-block-sm gap-20'>
                    <div className='lay-70 lay-sm-50'>
                        <DashboardHandPicked></DashboardHandPicked>
                    </div>
                    <div className='lay-30 lay-sm-50'>
                        <DashboardPlusvaliaCard valuation={valuation}></DashboardPlusvaliaCard>
                    </div>
                </div>
            </section>
        </section>
    </section>
  )
}

export default Dashboard


