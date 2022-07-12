import React from 'react';
import Card from '../Card/Card.component';
import {
    Title,
    ProjectBox,
    ProjectGrid,
    DescriptionRight,
    DescriptionLeft
} from './ProjectSection.styles'
import ClothingYImgSrc from '../../images/clothing_y.png'
import PasswordCheckerSrc from '../../images/passwordChecker.jpg'
import SearchMoviesSrc from '../../images/searchMovies.png'

const projects = {

    proj1:{
        title:"clothing_y",
        imgUrl:<ClothingYImgSrc/>,
        linkUrl: 'this'
    },
    proj2:{
        title:"PasswordChecker",
        imgUrl:<PasswordCheckerSrc/>,
        linkUrl: 'this'
    },
    proj3:{
        title:"searchMovies",
        imgUrl:<SearchMoviesSrc/>,
        linkUrl: 'this'

    }
   
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
                    <DescriptionRight>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus voluptatibus blanditiis. Totam, provident! Quo atque, sit maxime qui sapiente mollitia aut. Cumque animi error exercitationem tempora pariatur accusantium nesciunt?
                    </DescriptionRight>
                    <DescriptionLeft>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus voluptatibus blanditiis. Totam, provident! Quo atque, sit maxime qui sapiente mollitia aut. Cumque animi error exercitationem tempora pariatur accusantium nesciunt?
                    </DescriptionLeft>
                    <Card title={projects.proj2.title} imgUrl={projects.proj2.imgUrl} linkUrl={projects.proj2.linkUrl}/>
                    <Card title={projects.proj3.title} imgUrl={projects.proj3.imgUrl} linkUrl={projects.proj3.linkUrl}/>
                    <DescriptionRight>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus voluptatibus blanditiis. Totam, provident! Quo atque, sit maxime qui sapiente mollitia aut. Cumque animi error exercitationem tempora pariatur accusantium nesciunt?
                    </DescriptionRight>
                                 
                </ProjectGrid>
                

            </ProjectBox>
        </section>
        
     );
}
 
export default Projects;