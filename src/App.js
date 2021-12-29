import React, { Fragment, useState } from 'react'

import Root from './pages/Root'


const Container = () => {

  const [showUpdateMessage] = useState(false)

  return (
    
    <Fragment>
      <Root showUpdateMessage={showUpdateMessage}/>
    </Fragment>
    
  )
}

export default Container
