import React from 'react';
import Card from '../Card/Card.component';
import {
    Title,
    ProjectBox,
    ProjectGrid,
    Description
} from './ProjectSection.styles'
import ClothingYImgSrc from '../../images/clothing_y.png'
const projects = {

    proj1:{
        title:"clothing_y",
        imgUrl:<ClothingYImgSrc/>,
        linkUrl: 'this'
    },
   
}

const Projects = () => {
    return ( 
        <section>
            <ProjectBox>
                <Title>What's on the Menu Today?</Title>
                {/* 3cards */}
                {/* Z pattern proj-desc top to bottom */}
                <ProjectGrid>
                    <Card title={projects.proj1.title} imgUrl={projects.proj1.imgUrl} linkUrl={projects.proj1.linkUrl}/>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus voluptatibus blanditiis. Totam, provident! Quo atque, sit maxime qui sapiente mollitia aut. Cumque animi error exercitationem tempora pariatur accusantium nesciunt?
                    </Description>
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