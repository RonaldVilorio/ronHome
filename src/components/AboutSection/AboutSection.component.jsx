import React from "react";
import { AboutSectionBox,Button } from "./AboutSection.styles";
const AboutSection = () => {
    return (
        <>
            <AboutSectionBox>
                <p>
                    I remember making my first hello world website back in High School. 
                    I was bored and out of curiosity decided to build a site. 
                    So I ordered a book titled HTML and CSS by Jon Duckett. 
                    With the book on my left side , I managed to build the site and thinking 
                    back now this was actually the moment that got me interested in programming. 
                    It would be a couple years after exploring different fields in tech that I would 
                    start to pursue Web Development as my main focus in coding. 
                </p>
                <p>
                    I'm continuing my journey with Web Development. I'm 
                    always focusing on the fundamentals as well as learning new trends.
                    I have experience in both the frontend and the backend with some design skills.
                    I've collaborated with others on projects using Microsoft Teams, as well as tutored students 
                    on the fundamentals of Javascript. Along the way I also got my AWS Cloud Practitioner Certification.
                    I'm ready for my next challenge, contact me so we can work together! 
                </p>
                <a href="https://www.sendbig.com/view-files/?Id=05cccbad-c27f-193d-b923-f79ba3d563e3" download="RonaldVilorioResume">
                    <Button type="button">View Resume</Button>
                </a>

            </AboutSectionBox>        
        </>

    
     );
}
 
export default AboutSection;