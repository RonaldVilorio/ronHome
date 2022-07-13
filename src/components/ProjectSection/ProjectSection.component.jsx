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
        linkUrl: 'https://hilarious-gecko-c5a1c1.netlify.app/'
    },
    proj2:{
        title:"PasswordChecker",
        imgUrl:<PasswordCheckerSrc/>,
        linkUrl: 'https://github.com/RonaldVilorio/passwordCheck'
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
                        Clothing_Y is an e-commerce web application that utilizes react and styled component for the 
                        frontend of development and uses firebase for it's backend.
                        Firebase made it easier to implement user authentication, as well as being the source for user data storage. 
                        We sell clothes, shoes, just don't try to buy anything we're temporaily closed. 
                    </DescriptionRight>
                    <DescriptionLeft>
                        PasswordChecker is a python app used to check if your password has been breached. 
                        It utilizes HaveIbeenPwned API to connect with the database containing the breached passwords. 
                        Don't stop at one password, you can check as many in your terminal as you want! 
                    </DescriptionLeft>
                    <Card title={projects.proj2.title} imgUrl={projects.proj2.imgUrl} linkUrl={projects.proj2.linkUrl}/>
                    {/* <Card title={projects.proj3.title} imgUrl={projects.proj3.imgUrl} linkUrl={projects.proj3.linkUrl}/>
                    <DescriptionRight>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus voluptatibus blanditiis. Totam, provident! Quo atque, sit maxime qui sapiente mollitia aut. Cumque animi error exercitationem tempora pariatur accusantium nesciunt?
                    </DescriptionRight> */}                    
                                 
                </ProjectGrid>
                

            </ProjectBox>
        </section>
        
     );
}
 
export default Projects;