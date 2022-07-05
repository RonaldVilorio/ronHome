import * as React from "react"
import Layout from '../components/layout/layout.component'
import Header from "../components/header/header.component"
import Theme from "../components/Theme.component"
import styled from 'styled-components';

const IndexPage = () => {
  return (
    <Theme>
      <Layout pageTitle = 'Home Page'>
        <Header/>
        {/* Projects section */}
        {/* Footer section */}

      </Layout>
    </Theme>
    
  )
}

export default IndexPage
