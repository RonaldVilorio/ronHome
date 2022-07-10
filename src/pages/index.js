import * as React from "react"
import Layout from '../components/layout/layout.component'
import Header from "../components/header/header.component"
import ProjectSection from "../components/ProjectSection/ProjectSection.component";
import { GlobalStyles } from "../components/GlobalStyle";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles/>
      <Layout>
        <Header/>
        <ProjectSection/>
      </Layout>
    </>
    
  )
}

export default IndexPage
