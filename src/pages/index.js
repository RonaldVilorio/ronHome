import * as React from "react"
import Layout from '../components/layout/layout.component'
import Header from "../components/header/header.component"
import ProjectSection from "../components/ProjectSection/ProjectSection.component";
import Footer from "../components/Footer/Footer.component";
import { GlobalStyles } from "../components/GlobalStyle";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles/>
      <Layout pageTitle = 'Home Page'>
        <Header/>
        <ProjectSection/>
        <Footer/>
      </Layout>
    </>
    
  )
}

export default IndexPage
