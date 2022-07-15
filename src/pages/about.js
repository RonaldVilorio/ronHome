import React from 'react'
import Layout from '../components/layout/layout.component'
import { GlobalStyles } from "../components/GlobalStyle";
import AboutSection from '../components/AboutSection/AboutSection.component';
const AboutPage = () => {
    return (
        <>
            <GlobalStyles/>
            <Layout pageTitle='About Me'>
                <AboutSection/>        
            </Layout>
        
        </>
        
    )
}
export default AboutPage
