import React, { Fragment } from 'react'
import UrlsComponent from '../urls'
import {  BrowserRouter as Router, Switch } from "react-router-dom";


const Root = () => {

  return (
    <Fragment>
      <Router>
        <Switch>
          <UrlsComponent />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default Root
