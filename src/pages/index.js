import * as React from "react"
import Layout from '../components/layout/layout.component'
import Header from "../components/header/header.component"
import styled from 'styled-components';
import { GlobalStyles } from "../components/GlobalStyle";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles/>
      <Layout pageTitle = 'Home Page'>
        <Header/>
        {/* Projects section */}        {/* Footer section */}

      </Layout>
    </>
    
  )
}

export default IndexPage
