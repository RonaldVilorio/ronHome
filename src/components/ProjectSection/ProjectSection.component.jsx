import React from 'react';
import {
    Title,
    ProjectBox,
    ProjectGrid,
    Card,
    Description
} from './ProjectSection.styles'

const Projects = () => {
    return ( 
        <section>
            <ProjectBox>
                <Title>What's on the Menu Today?</Title>
                {/* 3cards */}
                {/* Z pattern proj-desc top to bottom */}
                <ProjectGrid>
                    <Card/>
                    {/* <h1>s</h1> */}
                    <h1>s</h1>
                    <h1>s</h1> 
                    <h1>s</h1>
                    <h1>s</h1>
                    <h1>s</h1>               
                </ProjectGrid>
                

            </ProjectBox>
        </section>
        
     );
}
 
export default Projects;